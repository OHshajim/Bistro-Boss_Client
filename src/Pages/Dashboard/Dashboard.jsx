import { CgComment } from "react-icons/cg";
import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex ">
            <div className="bg-[#D1A054] text-[#151515] max-w-xl min-h-screen px-9 pt-10">
                <h3 className="text-2xl font-black">Bistro Boss</h3>
                <ul className="font-medium pt-8 uppercase space-y-5">
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
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;