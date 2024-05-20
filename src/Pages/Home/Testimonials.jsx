import SectionsTitle from "../../Shared/SectionsTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

// rating
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { TfiCommentsSmiley } from "react-icons/tfi";

const Testimonials = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])

    return (
        <section className="max-w-screen-2xl mx-auto ">
            <SectionsTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"} />
            <Swiper 
            navigation={true} 
            loop={true}
            modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col justify-center items-center my-10 space-y-8">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <TfiCommentsSmiley className="text-9xl" />

                            <p className="text-xl max-w-5xl">{review.details}</p>
                            <h3 className="text-3xl text-yellow-600 ">{review.name}</h3>

                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>

    );
};

export default Testimonials;