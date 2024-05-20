import { Link } from "react-router-dom";

const Nav = () => {
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/shop'>Our Shop</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-black bg-opacity-50 fixed z-10 text-white" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      { links} 
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                { links} 
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline text-white">Button</a>
            </div>
        </div>
    );
};

export default Nav;