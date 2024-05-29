import { loadStripe } from "@stripe/stripe-js";
import SectionsTitle from "../../../../Shared/SectionsTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";




const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    return (
        <div className="my-20">
            <SectionsTitle subHeading={'pay to buy'} heading={'Payment'} />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;