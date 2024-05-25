import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { TbTrash } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;

        }
    })
    console.log(users);
    return (
        <div className="p-14">
            <h3 className="uppercase text-3xl font-bold  ">Total Users: {users.length} </h3>
            <div className="overflow-x-auto mt-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white rounded-xl">
                        <tr className="p-6 ">
                            <th className="p-6 rounded-tl-xl">
                                #
                            </th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th className="p-6 rounded-tr-xl">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th className="text-lg font-bold ">
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <th>
                                    <button  className="btn btn-ghost text-xl hover:text-red-600 hover:bg-transparent">
                                    <HiUserGroup/></button>
                                </th>
                                <th>
                                    {/* <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-xl hover:text-red-600 hover:bg-transparent"><TbTrash /></button> */}
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUser;