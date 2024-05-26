import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { TbTrash } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;

        }
    })
    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Successful",
                        text: `Now This user is new Admin `,
                        icon: "success"
                    });
                }
            })
    }
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "This user has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
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
                                    {
                                        user.role ? user.role :
                                            <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost text-xl  bg-[#D1A054] text-white">
                                                <HiUserGroup /></button>
                                    }
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost text-xl text-white  bg-red-700"><TbTrash /></button>
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