import FoodCard from "../../Components/FoodCard";

const FoodItems = ({Items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-screen-2xl mx-auto ">

            {
                Items.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default FoodItems;