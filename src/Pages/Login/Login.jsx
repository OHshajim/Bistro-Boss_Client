import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png'
import loginBG from '../../assets/others/authentication.png'
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";


const Login = () => {
    const [disable, setDisable] = useState(true)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    // console.log(from, location);
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // login
        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
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
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Error",
                    text: "try again",
                    icon: "error"
                });
            });
    }
    const handleValidate = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }
        else {
            setDisable(true)
            e.target.value = ""
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen" style={{
            backgroundImage: `url(${loginBG})`
        }}>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="flex my-20 shadow-2xl w-full max-w-lg mx-auto overflow-hidden rounded-lg lg:max-w-screen-xl text-black"
                style={{
                    backgroundImage: `url(${loginBG})`
                }}
            >
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <img src={loginImg} alt="" />
                </div>

                <div className="w-full bg-transparent px-6 py-8 md:px-8 lg:w-1/2">

                    <p className="mt-3 text-xl text-center ">
                        Welcome back!
                    </p>


                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b  lg:w-1/4"></span>

                        <p className="text-xs text-center text-gray-500 uppercase "> login
                            with email</p>

                        <span className="w-1/5 border-b  lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleLogin} >

                        <div className="mt-4 ">
                            <label className="block mb-2 text-sm font-medium " >Email Address</label>
                            <input className="block w-full px-4 py-2  border rounded-lg bg-white  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email"
                                name="email"
                                placeholder="Enter Your Email"
                            />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium " >Password</label>
                            </div>

                            <input className="block w-full px-4 py-2  border rounded-lg bg-white focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" name="password"
                                placeholder="Enter Your Password"
                            />
                        </div>

                        {/* captcha */}
                        <div className="mt-7">
                            <LoadCanvasTemplate />
                            <div className="join w-full mt-1 ">
                                <input onBlur={handleValidate} className="my-2 block w-full px-4 py-2  bg-white  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300 join-item" type="text" name="captcha"
                                    placeholder="type the text above"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <button disabled={disable} className="btn w-full px-6 py-3 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#D1A054] rounded-lg ">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center mt-4">
                        <p className="text-xs  uppercase text-[#D1A054]">
                            New here? Create a
                            <Link to='/signUp' className="font-medium hover:underline"> New Account</Link>
                        </p>
                    </div>
                    <div className="flex flex-col  items-center mt-3">
                        <p className="text-sm font-medium">Or Sign in With </p>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;