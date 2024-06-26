import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { BsGoogle } from "react-icons/bs";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const { loginWithGmail } = useAuth()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const handleGoogle = () => {
        loginWithGmail()
            .then(result => {
                const { email, displayName } = result.user;
                const user = { email: email, name: displayName }
                axiosPublic.post('/users', user)
                    .then((res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Congratulation !!!",
                                text: ' Successfully Logged in',
                                icon: "success",
                                showClass: {
                                    popup: `
                                        animate__animated
                                        animate__fadeInUp
                                        animate__faster
                                      `
                                },
                                hideClass: {
                                    popup: `
                                        animate__animated
                                        animate__fadeOutDown
                                        animate__faster
                                      `
                                }
                            });
                            navigate(from)
                        }
                    }))
                Swal.fire({
                    title: "Congratulation !!!",
                    text: ' Successfully Logged in',
                    icon: "success",
                    showClass: {
                        popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                    },
                    hideClass: {
                        popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                    }
                });
                navigate(from)
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: "try again",
                    icon: "error"
                });
            });
    }
    return (
        <div className="flex justify-center mt-2">
            <button onClick={handleGoogle} className="btn btn-outline rounded-full text-xl p-3 text-[#444444] border-[#444444] border-2">
                <BsGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;