import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import MenuBGImage from '../assets/menu/banner3.jpg'
import PizzaBGImage from '../assets/menu/pizza-bg.jpg'
import SaladBGImage from '../assets/menu/salad-bg.jpg'
import SoupBGImage from '../assets/menu/soup-bg.jpg'
import DessertBGImage from '../assets/menu/dessert-bg.jpeg'
import SectionsTitle from "../Shared/SectionsTitle";
import { useEffect, useState } from "react";
import MenuItem from "../Shared/MenuItem";
const Menu = () => {
    const [menu, setMenu] = useState([])
    const [desserts, setDessert] = useState([])
    const [Pizza, setPizza] = useState([])
    const [salads, setSalads] = useState([])
    const [soup, setSoup] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular")
                const dessertItems = data.filter(item => item.category === "dessert")
                const saladItems = data.filter(item => item.category === "salad")
                const pizzaItems = data.filter(item => item.category === "pizza")
                const soupItems = data.filter(item => item.category === "soup")
                setMenu(popularItems)
                setDessert(dessertItems)
                setSalads(saladItems)
                setPizza(pizzaItems)
                setSoup(soupItems)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Our Menu</title>
            </Helmet>
            <Cover BGImage={MenuBGImage} subheading="Would you like to try a dish?" heading="Our Menu"
                style={{ "heading": "text-8xl font-bold", 'subheading': "font-semiBold text-2xl" }} />

            <div className="mt-24 mb-14" >
                <SectionsTitle heading={"Today's Offer"} subHeading={"Don't Miss"} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 max-w-screen-2xl mx-auto ">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>

            {/* desserts */}
            <Cover BGImage={DessertBGImage} subheading="Would you like to try a dish?" heading="DESSERTS"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-10 max-w-screen-2xl mx-auto ">
                {
                    desserts.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            {/* Pizza */}
            <Cover BGImage={PizzaBGImage} subheading="Would you like to try a dish?" heading="PIZZA"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-10 max-w-screen-2xl mx-auto ">
                {
                    Pizza.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            {/* Salads */}
            <Cover BGImage={SaladBGImage} subheading="Would you like to try a dish?" heading="SALADS"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-10 max-w-screen-2xl mx-auto ">
                {
                    salads.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            {/* Soup */}
            <Cover BGImage={SoupBGImage} subheading="Would you like to try a dish?" heading="SOUPS"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-10 max-w-screen-2xl mx-auto ">
                {
                    soup.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
        </div >
    );
};

export default Menu;