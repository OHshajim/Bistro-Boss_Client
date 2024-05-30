import { useEffect } from "react";
import SectionsTitle from "../../Shared/SectionsTitle";
import { useState } from "react";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('https://bistro-boss-server-roan-eight.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular")
                setMenu(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionsTitle subHeading={"Check it out"} heading="FROM OUR MENU" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>

            <div className="bg-black mt-20">
                <h1 className="text-5xl text-white bg-black p-24 text-center">Call Us : +88 01518933208</h1>
            </div>
        </section>
    );
};

export default PopularMenu;