import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";

const Main = () => {
    const location = useLocation()
    const noNavFooter = location.pathname.includes('login')
    return (
        <div>
            {noNavFooter || <Nav />}
            <Outlet />
            {noNavFooter || <Footer />}
        </div>
    );
};

export default Main;