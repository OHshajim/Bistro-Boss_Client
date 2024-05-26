import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const GProvider = new GoogleAuthProvider();
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    // sign up with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        });

    }


    // login with email and password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login with gmail 
    const loginWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, GProvider)
    }

    // show user
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            const userInfo = { email: currentUser.email }
            if (currentUser) {
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.token) {
                            localStorage.setItem('access_token', res.data.token)
                        }
                    })
            }
            else {
                localStorage.removeItem('access_token')
            }
            setLoading(false)
        });
        return () => { return subscribe() }
    }, [axiosPublic])


    // logout 
    const logout = () => {
        return signOut(auth)
    }

    const info = {
        loginUser,
        loginWithGmail,
        logout,
        loading,
        createUser,
        user,
        updateUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;