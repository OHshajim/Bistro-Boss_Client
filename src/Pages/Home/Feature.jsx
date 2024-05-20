import SectionsTitle from "../../Shared/SectionsTitle";
import featuredImage from "../../assets/home/featured.jpg"
const Feature = () => {
    return (
        <div>
            <SectionsTitle subHeading={"Check it out"} heading={"Featured Item"} />
            <div className="flex max-w-screen-2xl mx-auto mt-10 gap-20 items-center">
                <div>
                    <img src={featuredImage} alt="featured Image" />
                </div>
                <div>
                    <h3 className="text-lg mb-1">
                        March 20, 2023 <br />
                        WHERE CAN I GET SOME?
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline border-b-4 border-0 mt-10">read more</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;