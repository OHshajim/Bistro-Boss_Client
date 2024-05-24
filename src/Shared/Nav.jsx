import { useContext } from "react";
import { NavLink, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../Hooks/useCart";

const Nav = () => {
    const { user, logout } = useContext(AuthContext)
    const [cart] = useCart()
    const handleLogout = () => {
        logout()
    }
    const links = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25] " : ""
        }>Home</NavLink></li>
        <li><NavLink to='/menu' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
        }    >Our Menu</NavLink></li>
        <li><NavLink to='/order/salads' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
        }>Order Food</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
        }>Contact Us</NavLink></li>
        <li><NavLink to='/dashboard/cart' className="text-[21px]">
            <TiShoppingCart />
            <span className=" badge rounded-full bg-red-600 text-white p-1 text-sm border-none">{cart.length}</span>
        </NavLink></li>
        {
            user ?
                <>
                    <button onClick={handleLogout} className="btn bg-transparent border-none text-white font-extrabold text-md  mr-3 ml-5 hover:bg-transparent ">Log out</button>
                    <img alt="photo" src={user?.photoURL} className="rounded-full w-12" />
                </> :
                <>
                    <li><NavLink to='/login' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                    }>Login</NavLink></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-black bg-opacity-50 fixed z-10 text-white" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content font-extrabold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex navbar-end">
                <ul className="menu menu-horizontal px-1 font-extrabold items-center">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Nav;