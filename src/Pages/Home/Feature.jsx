import SectionsTitle from "../../Shared/SectionsTitle";
import featuredImage from "../../assets/home/featured.jpg"

const Feature = () => {
    // const styles = {
    //     backgroundImage: "url("+{featuredImage}+")",
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover'
    // }
    return (
        <div style={{
            // backgroundImage:"url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg" + ")",
            backgroundImage: `linear-gradient(180.00deg, rgba(0, 0, 0, 0.799), rgba(0, 0, 0, 0.454) 100%) , url(  ${featuredImage} )`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}
            className="bg-fixed py-20 "
        >
            <SectionsTitle subHeading={"Check it out"} heading={"Featured Item"} />
            <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto mt-10 gap-20 items-center text-white">
                <div className="flex-1">
                    <img src={featuredImage} alt="featured Image" />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg mb-1">
                        March 20, 2023 <br />
                        WHERE CAN I GET SOME?
                    </h3>
                    <p className="text-[#e7e7e7ad]">
                        Discover the heart and soul of culinary innovation with Bistro Boss's featured foods. Our carefully curated selection showcases the pinnacle of gastronomic creativity, bringing you the latest trends, timeless classics, and hidden gems from the world of food. From artisanal appetizers to indulgent entrees and irresistible desserts, each featured dish is a masterpiece crafted by our passionate team of chefs. Dive into a world of flavors, textures, and aromas that will tantalize your taste buds and leave you craving for more. 
                    </p>
                    <button className="btn btn-outline border-b-4 border-0 mt-10">read more</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;