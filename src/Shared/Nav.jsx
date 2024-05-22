import { Link, NavLink } from "react-router-dom";

const Nav = () => {
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
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-extrabold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn btn-outline text-white">login</Link>
            </div>
        </div>
    );
};

export default Nav;