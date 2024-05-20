import BlogsBG from "../../assets/home/chef-service.jpg"
const Blogs = () => {
    return (
        <div className="relative ">
            <img src={BlogsBG} alt="" className="w-full h-full "/>
            <div className=" text-center py-24 px-32 text-black  absolute top-0 bg-white  m-20 ">
                <h3 className="text-5xl">Bistro Boss</h3>
                <p className="text-[#151515] mt-2">Welcome to Bistro Boss, your ultimate destination for culinary excellence and gastronomic adventure. Whether you are a seasoned foodie or a casual diner, Bistro Boss invites you to embark on a journey through a world of delectable flavors, tantalizing aromas, and mouth-watering experiences.</p>
            </div>
        </div>
    );
};

export default Blogs;