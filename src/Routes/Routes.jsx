import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import AddItems from "../Pages/Dashboard/Admin/AddItems";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";
import UpdateItem from "../Pages/Dashboard/Admin/UpdateItem";
import Cart from "../Pages/Dashboard/User/Cart/Cart";
import Payment from "../Pages/Dashboard/User/Payment/Payment";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/order/:category",
                element: <Order />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            //user
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "payment",
                element: <Payment/>,
            },
            // admin
            {
                path: "allUsers",
                element: <AllUser />,
            },
            {
                path: "addItems",
                element: <AddItems />,
            },
            {
                path: "manageItems",
                element: <ManageItems />,
            },
            {
                path: "updateItem/:id",
                element: <UpdateItem />,
                loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    }
]);

export default Routes;