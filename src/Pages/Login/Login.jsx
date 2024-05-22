import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target ;
        const email = form.email.value ;
        const password = form.password.value ;
        console.log(email ,password);
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex shadow-2xl w-full max-w-lg mx-auto overflow-hidden rounded-lg lg:max-w-screen-xl">
                <div className="hidden bg-cover lg:block lg:w-1/2">
                    <img src="" alt="" />
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">

                    <p className="mt-3 text-xl text-center ">
                        Welcome back!
                    </p>


                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b  lg:w-1/4"></span>

                        <p className="text-xs text-center text-gray-500 uppercase "> login
                            with email</p>

                        <span className="w-1/5 border-b  lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleLogin}>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium " >Email Address</label>
                            <input className="block w-full px-4 py-2  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="email" 
                            name="email" />
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium " >Password</label>
                            </div>

                            <input className="block w-full px-4 py-2  border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" name="password" />
                        </div>

                        <div className="mt-6">
                            <button className="btn w-full px-6 py-3 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#D1A054] rounded-lg ">
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
                </div>
            </div>
        </div>
    );
};

export default Login;