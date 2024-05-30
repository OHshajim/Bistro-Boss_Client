import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { BiWallet } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { SiCodechef } from "react-icons/si";
import { TbTruck } from "react-icons/tb";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

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
    const { data: cartData=[] } = useQuery({
        queryKey: ['/order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return (res.data);
        }
    })
    console.log(stats, cartData);
    const { users, menuItems, orders, revenue } = stats;

    const chartData = cartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };




    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
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

            <div className="flex items-center">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={cartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {cartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* pieChart */}
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Legend></Legend>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default DashboardAdminHome;