import SectionsTitle from "../../Shared/SectionsTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

// images 
import Category1 from "../../assets/home/slide1.jpg"
import Category2 from "../../assets/home/slide2.jpg"
import Category3 from "../../assets/home/slide3.jpg"
import Category4 from "../../assets/home/slide4.jpg"
import Category5 from "../../assets/home/slide5.jpg"

const Categories = () => {
    return (
        <section >
            <SectionsTitle subHeading="From 11:00am to 10:00pm" heading="ORDER ONLINE" />
            <Swiper
                slidesPerView={4}
                spaceBetween={80}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-10"
            >
                <SwiperSlide>
                    <img src={Category1} alt="category" className="w-full" />
                    <h3 className="text-4xl  text-center uppercase -mt-14 ">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category2} alt="category" className="w-full"/>
                    <h3 className="text-4xl  text-center uppercase -mt-14 ">pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category3} alt="category" className="w-full"/>
                    <h3 className="text-4xl  text-center uppercase -mt-14 ">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category4} alt="category" className="w-full"/>
                    <h3 className="text-4xl  text-center uppercase -mt-14 ">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Category5} alt="category" className="w-full"/>
                    <h3 className="text-4xl  text-center uppercase -mt-14 ">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Categories;