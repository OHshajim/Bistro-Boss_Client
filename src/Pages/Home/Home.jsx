import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Blogs from "./Blogs/Blogs";
import Categories from "./Categories";
import Feature from "./Feature";
import Menu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="space-y-20">
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner />
            <div className="max-w-screen-2xl mx-auto space-y-20">
                <Categories />
                <Blogs />
                <Menu />
            </div>
            <Feature />
            <Testimonials />
        </div>
    );
};

export default Home;