import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
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
        }
        else {
            console.log(paymentMethod

            );
        }
    }
    return (
        <div className="m-12 p-10">
            <form onSubmit={handleSubmit}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
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
                    <button type="submit" className="btn bg-[#570DF8] text-white w-full">Pay</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;