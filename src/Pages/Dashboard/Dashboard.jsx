import { CgComment } from "react-icons/cg";
import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="flex ">
            <div className="bg-[#D1A054] text-[#151515] max-w-xl min-h-screen px-9 pt-10">
                <h3 className="text-2xl font-black">Bistro Boss</h3>
                <ul className="font-medium pt-8 uppercase space-y-5">
                    {
                        isAdmin ?
                            // admin
                            <>
                                <li><NavLink to='/dashboard/home'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaHome className="text-2xl" />
                                    Admin Home</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/addItems'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaUtensils className="text-2xl" />
                                    add items</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/cart'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaList className="text-2xl" />
                                    Manage Items</NavLink>
                                </li>

                                <li><NavLink to='/dashboard/myBookings'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaBook className="text-2xl" />
                                    manage bookings</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/allUsers'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><HiUserGroup className="text-2xl" />
                                    All users</NavLink>
                                </li>
                            </>
                            :
                            // users
                            <>
                                <li><NavLink to='/dashboard/home'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaHome className="text-2xl" />
                                    User Home</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/reservation'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaCalendar className="text-2xl" />
                                    Reservation</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/cart'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaShoppingCart className="text-2xl" />
                                    My Cart</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/review'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><CgComment className="text-2xl" />
                                    add review</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/myBookings'
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                                    }><FaList className="text-2xl" />
                                    my bookings</NavLink>
                                </li>
                            </>
                    }


                    <hr />

                    <li><NavLink to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                        }><FaHome className="text-2xl" />
                        Home</NavLink>
                    </li>
                    <li><NavLink to='/menu'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                        }><FaList className="text-2xl" />
                        menu</NavLink>
                    </li>
                    <li><NavLink to='/menu'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white flex items-center gap-2" : "flex items-center gap-2"
                        }><MdEmail className="text-2xl" />
                        Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;