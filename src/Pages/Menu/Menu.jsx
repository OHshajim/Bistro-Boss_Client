import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import MenuBGImage from '../../assets/menu/banner3.jpg'
import PizzaBGImage from '../../assets/menu/pizza-bg.jpg'
import SaladBGImage from '../../assets/menu/salad-bg.jpg'
import SoupBGImage from '../../assets/menu/soup-bg.jpg'
import DessertBGImage from '../../assets/menu/dessert-bg.jpeg'
import SectionsTitle from "../../Shared/SectionsTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./menuCategories/MenuCategory";
import { Link } from "react-router-dom";

const Menu = () => {
    const [menu] = useMenu()
    const offeredItems = menu.filter(item => item.category === "offered")
    const dessertItems = menu.filter(item => item.category === "dessert")
    const saladItems = menu.filter(item => item.category === "salad")
    const pizzaItems = menu.filter(item => item.category === "pizza")
    const soupItems = menu.filter(item => item.category === "soup")
    // const [menu, setMenu] = useState([])
    // const [desserts, setDessert] = useState([])
    // const [Pizza, setPizza] = useState([])
    // const [salads, setSalads] = useState([])
    // const [soup, setSoup] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular")
    //             const dessertItems = data.filter(item => item.category === "dessert")
    //             const saladItems = data.filter(item => item.category === "salad")
    //             const pizzaItems = data.filter(item => item.category === "pizza")
    //             const soupItems = data.filter(item => item.category === "soup")
    //             setMenu(popularItems)
    //             setDessert(dessertItems)
    //             setSalads(saladItems)
    //             setPizza(pizzaItems)
    //             setSoup(soupItems)
    //         })
    // }, [])
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Our Menu</title>
            </Helmet>
            {/* offered menu */}
            <Cover BGImage={MenuBGImage} subheading="Would you like to try a dish?" heading="Our Menu"
                style={{ "heading": "text-8xl font-bold", 'subheading': "font-semiBold text-2xl" }} />

            <div className="mt-24 mb-14" >
                <SectionsTitle heading={"Today's Offer"} subHeading={"Don't Miss"} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 max-w-screen-2xl mx-auto ">
                {
                    offeredItems.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="flex w-full justify-center items-center my-10">
                <Link to="/order">
                <button className="btn btn-outline border-b-4 border-0 ">order your favorite food</button>
                </Link>
            </div>

            {/* subcategories */}

            <MenuCategory BGImage={DessertBGImage} item={dessertItems}
                subheading="Indulge in Sweet Bliss: Treat Yourself to a Delightful Range of Decadent Desserts, Perfect for Every Occasion, from Elegant Confections to Homestyle Classics That Satisfy Every Sweet Tooth" heading="desserts" />
            <MenuCategory BGImage={PizzaBGImage} item={pizzaItems}
                subheading="From Classic Margherita to Gourmet Creations: Dive Into a World of Perfectly Crafted Pizzas, Where Fresh Ingredients and Bold Flavors Come Together in Delicious Harmony" heading="pizza" />
            <MenuCategory BGImage={SaladBGImage} item={soupItems}
                subheading="Fresh, Crunchy, and Delicious: Explore a Vibrant Array of Salads That Not Only Satisfy Your Cravings but Also Provide a Burst of Nutrition and Flavors in Every Bite" heading="salads" />
            <MenuCategory BGImage={SoupBGImage} item={saladItems}
                subheading="Warm Your Soul with Our Hearty and Flavorful Soups: Enjoy Comforting Bowls of Soup Crafted with Love, Using the Finest Ingredients to Create Rich and Satisfying Flavors" heading="soups" />
        </div >
    );
};

export default Menu;


