
const FoodCard = ({ item }) => {
    const {  name, image, recipe } = item;
    console.log(name);
    return (
        <div className="card  bg-base-100 shadow-xl rounded-none">
            <figure><img src={image} alt={name} className="w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                     className="btn border-b-4 border-0 border-yellow-600 text-yellow-600 hover:bg-black text-lg mt-4 uppercase">Add To cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;