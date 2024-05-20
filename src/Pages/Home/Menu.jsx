import { useEffect } from "react";
import SectionsTitle from "../../Shared/SectionsTitle";
import { useState } from "react";
import MenuItem from "../../Shared/MenuItem";

const Menu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
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
        </section>
    );
};

export default Menu;