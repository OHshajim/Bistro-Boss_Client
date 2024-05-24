import useCart from "../../../Hooks/useCart";

const Cart = () => {
    const [cart]= useCart()
    return (
        <div>
            <h3>Cart</h3>
        </div>
    );
};

export default Cart;