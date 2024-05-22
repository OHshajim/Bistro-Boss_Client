const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex gap-5">
            <img src={image} alt="food" className="w-24 h-24" style={{borderRadius:"0px 200px 200px 200px"}}/>
            <div className="flex justify-between w-full">
                <div>
                    <h3 className="text-xl">{name} ------------------</h3>
                    <p>{recipe}</p>
                </div>
                <h4 className="text-yellow-600 text-xl ">${price}</h4>
            </div>
        </div>
    );
};

export default MenuItem;