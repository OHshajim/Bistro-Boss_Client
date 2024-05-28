// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
    const axiosSecure = useAxiosSecure();
    // const [menu, setMenu] = useState([])
    // const [loading, setLoad] = useState(true)

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoad(false)
    //         })
    // }, [])
    // return [menu, loading] ;
    const { data: menu = [], isPending, refetch } = useQuery({
        queryKey: ['manu'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu')
            return res.data;
        }
    })
    return [menu, isPending, refetch]
};

export default useMenu;