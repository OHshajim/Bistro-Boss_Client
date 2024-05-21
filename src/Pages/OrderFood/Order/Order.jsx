import Cover from "../../../Shared/Cover";
import OrderBG from '../../../assets/shop/banner2.jpg'
const Order = () => {
    return (
        <div>
            <Cover BGImage={OrderBG}
                subheading={'Quick and Easy: Delicious Meals Delivered Right to Your Doorstep'}
                heading={"Order Food"}
                style={{ "heading": "text-8xl font-bold", 'subheading': "font-semiBold text-2xl" }} />

                
        </div>
    );
};

export default Order;