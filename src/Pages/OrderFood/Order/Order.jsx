import useMenu from "../../../Hooks/useMenu";
import Cover from "../../../Shared/Cover";
import OrderBG from '../../../assets/shop/banner2.jpg'

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodItems from "../FoodItems";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks']
    const [menu] = useMenu()
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const saladItems = menu.filter(item => item.category === "salad")
    const pizzaItems = menu.filter(item => item.category === "pizza")
    const soupItems = menu.filter(item => item.category === "soup")
    const dessertItems = menu.filter(item => item.category === "dessert")
    const drinkItems = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Cover BGImage={OrderBG}
                subheading={'Quick and Easy: Delicious Meals Delivered Right to Your Doorstep'}
                heading={"Order Food"}
                style={{ "heading": "text-8xl font-bold", 'subheading': "font-semiBold text-2xl" }} />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="my-20 max-w-screen-2xl mx-auto">
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <FoodItems Items={saladItems} />
                </TabPanel>
                <TabPanel>
                    <FoodItems Items={pizzaItems} />
                </TabPanel>
                <TabPanel>
                    <FoodItems Items={soupItems} />
                </TabPanel>
                <TabPanel>
                    <FoodItems Items={dessertItems} />
                </TabPanel>
                <TabPanel>
                    <FoodItems Items={drinkItems} />
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Order;