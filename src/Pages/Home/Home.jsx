import Banner from "./Banner";
import Blogs from "./Blogs";
import Categories from "./Categories";

const Home = () => {
    return (
        <div className="space-y-20">
            <Banner />
            <div className="max-w-screen-2xl mx-auto space-y-20">
                <Categories />
                <Blogs />
            </div>
        </div>
    );
};

export default Home;