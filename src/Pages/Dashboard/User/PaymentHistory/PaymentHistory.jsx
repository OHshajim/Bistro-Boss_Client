import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionsTitle from "../../../../Shared/SectionsTitle";

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`)
            return res.data;
        }
    })
    return (
        <div className="my-20">
            <div >
                <SectionsTitle subHeading={'At a Glance!'} heading={'Payment history'} />
            </div>
            <div className="p-14 ">
                <div className="uppercase text-3xl font-bold flex justify-between ">
                    <h3 >total Orders : {payments.length}</h3>
                </div>
                <div className="overflow-x-auto mt-8">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white rounded-xl">
                            <tr className="p-6 ">
                                <th className="p-6 rounded-tl-xl">
                                    #
                                </th>
                                <th>EMAIL</th>
                                <th>TRANSACTION ID</th>
                                <th>PRICE</th>
                                <th>STATUS</th>
                                <th className="p-6 rounded-tr-xl">PAYMENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                payments.map((item, index) => <tr key={item._id}>
                                    <th className="text-lg font-bold ">
                                        {index + 1}
                                    </th>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>{item.transactionID}</td>
                                    <td>${item.price}</td>
                                    <td>{item.status}</td>
                                    <td>{item.date}</td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;