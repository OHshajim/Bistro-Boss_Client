import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionID, setTransactionID] = useState('')
    const [cart, refetch] = useCart()
    const navigate = useNavigate()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then((res) => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log(error);
            setError(error.message)
        }
        else {
            console.log('payment Method :', paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        }
        else {
            console.log('paymentIntent : ', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                setTransactionID(paymentIntent.id)
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionID: paymentIntent.id,
                    date: new Date(),
                    cartsId: cart.map(item => item._id),
                    menuItemsId: cart.map(item => item.foodId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payment', payment)
                console.log(res.data.result.deletedCount > 0);
                if (res.data) {
                    refetch()
                    Swal.fire({
                        title: "Success",
                        text: 'Payment Complete ',
                        icon: 'success'
                    })
                    navigate('/dashboard/paymentHistory')
                }
            }
        }
    }
    return (
        <div className="m-12 p-10">
            <form onSubmit={handleSubmit}>
                <CardElement className='p-3 text-xl' options={{
                    style: {
                        base: {
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
                <div className="max-w-sm  mx-auto my-10 ">
                    <button disabled={!stripe || !clientSecret || !cart} type="submit" className="btn bg-[#570DF8] text-white w-full">Pay</button>
                </div>
                <p className="text-red-600 text-center">{error}</p>
                {transactionID &&
                    <p className="text-green-600 text-center">{transactionID}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;