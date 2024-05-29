import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BiWallet } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { SiCodechef } from "react-icons/si";
import { TbTruck } from "react-icons/tb";

const DashboardAdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()
    const { data: stats = {} } = useQuery({
        queryKey: ['/admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return (res.data);
        }
    })
    console.log(stats);
    const { users, menuItems, orders, revenue } = stats;
    return (
        <div className="my-14 mx-10 ">
            <h2
                className="text-3xl font-semibold capitalize my-4">Hi, welcome {user?.displayName ? user?.displayName : 'back'}!</h2>

            {/* info's stats*/}
            <div className="stats shadow w-full mt-8">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <BiWallet className="text-4xl" />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <HiUserGroup className="text-4xl" />
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{users}</div>
                    <div className="stat-desc">↗︎ (28%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <SiCodechef className="text-4xl" />
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{menuItems}</div>
                    <div className="stat-desc">↘︎ (4%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <TbTruck className="text-4xl" />
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{orders}</div>
                    <div className="stat-desc">↗︎ (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default DashboardAdminHome;