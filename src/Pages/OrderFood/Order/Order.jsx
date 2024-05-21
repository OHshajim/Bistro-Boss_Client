import Cover from "../../../Shared/Cover";
import OrderBG from '../../../assets/shop/banner2.jpg'

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    return (
        <div>
            <Cover BGImage={OrderBG}
                subheading={'Quick and Easy: Delicious Meals Delivered Right to Your Doorstep'}
                heading={"Order Food"}
                style={{ "heading": "text-8xl font-bold", 'subheading': "font-semiBold text-2xl" }} />
            <Tabs className="my-20 max-w-screen-2xl mx-auto">
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;