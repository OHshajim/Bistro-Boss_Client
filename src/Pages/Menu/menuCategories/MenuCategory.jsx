import Cover from "../../../Shared/Cover";
import MenuItem from "../../../Shared/MenuItem";

const MenuCategory = ({ BGImage, item, subheading, heading }) => {
    return (
        <div>
            <Cover BGImage={BGImage} subheading={subheading} heading={heading}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20  max-w-screen-2xl mx-auto ">
                {
                    item.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="flex w-full justify-center items-center my-10">
                <button className="btn btn-outline border-b-4 border-0 ">order your favorite food</button>
            </div>
        </div>
    );
};

export default MenuCategory;