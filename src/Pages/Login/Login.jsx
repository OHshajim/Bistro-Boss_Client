import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png'
import loginBG from '../../assets/others/authentication.png'
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
    const [disable, setDisable] = useState(true)
    const captchaRef = useRef()
    const { loginUser,
        loginWithGmail, } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false)
        }
        else {
            setDisable(true)
            captchaRef.current.value = ""
        }
    }

    const handleGoogle = () => {
        loginWithGmail()
            // .then(result => {
            //     console.log(result);
            // })
            // .catch(error => {
            //     console.log(error);
            // })
    }
    return (
        <div className="flex justify-center items-center h-screen" style={{
            backgroundImage: `url(${loginBG})`
        }}>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="flex shadow-2xl w-full max-w-lg mx-auto overflow-hidden rounded-lg lg:max-w-screen-xl text-black"
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
                                <input className="my-2 block w-full px-4 py-2  bg-white  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300 join-item" type="text" name="captcha" ref={captchaRef}
                                    placeholder="type the text above"
                                />
                                <button onClick={handleValidate} className="border px-4 py-2 my-2  bg-white text-[#D1A054] border-[#D1A054]  join-item btn">Validation</button>
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
                            <Link className="font-medium hover:underline"> New Account</Link>
                        </p>
                    </div>
                    <div className="flex justify-center  mt-3">
                        <button onClick={handleGoogle} className="btn btn-outline rounded-full text-xl p-3 text-[#444444] border-[#444444] border-2">
                            <BsGoogle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;