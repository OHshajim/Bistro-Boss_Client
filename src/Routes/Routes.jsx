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
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory/PaymentHistory";
import DashboardUserHome from "../Pages/Dashboard/User/DashboardUserHome/DashboardUserHome";
import DashboardAdminHome from "../Pages/Dashboard/Admin/DashboardAdminHome";
import AdminRoute from "./AdminRoute";

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
                path: "userHome",
                element: <DashboardUserHome/>,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "payment",
                element: <Payment />,
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory />,
            },
            // admin
            {
                path: "adminHome",
                element: <AdminRoute><DashboardAdminHome /></AdminRoute>,
            },
            {
                path: "allUsers",
                element: <AdminRoute><AllUser /></AdminRoute>,
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems /></AdminRoute>,
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageItems /></AdminRoute>,
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    }
]);

export default Routes;