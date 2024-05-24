import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivetRoute;