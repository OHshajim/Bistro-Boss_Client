import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
    const { price, name, image, recipe } = item;
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    console.log(axiosSecure);
    const handleAddCard = (food) => {
        console.log(food);
        const { _id, name, image, price } = food
        if (user && user.email) {
            console.log(user);
            const foodItem = {
                foodId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', foodItem)
                .then(result => {
                    console.log(result);
                })
        }
        else {
            Swal.fire({
                title: "Please Login !!!",
                text: "You are not login !!!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card  bg-base-100 shadow-xl rounded-none">
            <figure><img src={image} alt={name} className="w-full" /></figure>
            <p className="absolute m-4 right-0  px-3 py-2 bg-black font-semibold text-white ">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleAddCard(item)}
                        className="btn border-b-4 border-0 border-yellow-600 text-yellow-600 hover:bg-black text-lg mt-4 uppercase">Add To cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;