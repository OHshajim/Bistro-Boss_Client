import { useForm } from "react-hook-form"
import { FaUtensils } from "react-icons/fa";
import SectionsTitle from "../../../Shared/SectionsTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const AddItems = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`, imageFile, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
        console.log(res.data.data);
        if (res.data.success) {
            const newItem = {
                image: res.data.data.display_url,
                name: data.name,
                recipe: data.recipe,
                price: parseFloat(data.price),
                category: data.category
            }
            const menuRes = await axiosSecure.post('/menu', newItem)
            console.log(menuRes);
            if (menuRes) {
                console.log(res);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Add item successfully"
                });
                reset()
            }
        }
    }
    return (
        <div>
            <div className="my-12">
                <SectionsTitle subHeading={"What's new?"} heading={'Add an item'} />
            </div>
            <div className="mx-20 p-10 mb-20 border border-[#828282]">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Name */}
                    <div>
                        <div className="label">
                            <span className="text-xl font-semibold ">Recipe Name*</span>
                        </div>
                        <input {...register("name", { required: true })}
                            type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                        {errors.name && <span className="text-base text-red-600">This field is required</span>}
                    </div>
                    <div className="flex gap-8 mt-4">

                        {/* Category */}
                        <div className="w-1/2 ">
                            <div className="label">
                                <span className="text-xl font-semibold  ">Category*</span>
                            </div>
                            <select {...register("category", { required: true })}
                                defaultValue={'default'} className="select select-bordered w-full ">
                                <option disabled value='default'>Category</option>
                                <option>popular</option>
                                <option>offered</option>
                                <option>pizza</option>
                                <option>dessert</option>
                                <option>salad</option>
                                <option>drinks</option>
                            </select>
                            {errors.category && <span className="text-base text-red-600">This field is required</span>}
                        </div>

                        {/* Price */}
                        <div className="w-1/2 ">
                            <div className="label">
                                <span className="text-xl font-semibold  ">Price*</span>
                            </div>
                            <input {...register("price", { required: true })}
                                type="text" placeholder="Price" className="input input-bordered w-full " />
                            {errors.price && <span className="text-base text-red-600">This field is required</span>}

                        </div>
                    </div>

                    {/* recipe */}
                    <div className="mt-4">
                        <div className="label">
                            <span className="text-xl font-semibold  ">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-36 w-full" placeholder="Recipe Details"></textarea>
                        {errors.recipe && <span className="text-base text-red-600">This field is required</span>}

                    </div>

                    {/* image */}
                    <div className="mt-4">
                        <input {...register("image", { required: true })}
                            type="file" className=" p-2" /> <br />
                        {errors.image && <span className="text-base text-red-600">This field is required</span>}

                    </div>

                    <button
                        className="btn mt-4 rounded-none bg-gradient-to-r from-[#835D23] to-[#c58e35] text-white text-xl font-bold" >Add Item<FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;