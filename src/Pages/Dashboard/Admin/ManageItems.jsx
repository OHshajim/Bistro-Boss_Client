import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { TbTrash } from "react-icons/tb";
import useMenu from "../../../Hooks/useMenu";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
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
                axiosSecure.delete(`/menuItem/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="p-14 ">
            <div className="uppercase text-3xl font-bold flex justify-between ">
                <h3 >total Orders : {menu.length}</h3>
            </div>
            <div className="overflow-x-auto mt-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white rounded-xl">
                        <tr className="p-6 ">
                            <th className="p-6 rounded-tl-xl">
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM Name</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th className="p-6 rounded-tr-xl">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th className="text-lg font-bold ">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask  w-16 h-12">
                                            <img src={item.image} alt={item.name} className="w-full" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <Link to='/updateItem'>
                                        <button className="btn btn-ghost text-xl hover:text-yellow-600 hover:bg-transparent"><FiEdit /></button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-xl hover:text-red-600 hover:bg-transparent"><TbTrash /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;