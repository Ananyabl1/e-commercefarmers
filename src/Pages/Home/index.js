import Button from '@mui/material/Button';
import HomeBanner from "../../Components/HomeBanner";
import banner4 from '../../assets/images/banner4.jpg';
import thumbnail1 from '../../assets/images/thumbnail-1.jpg';
import sidebanner from '../../assets/images/sidebanner.jpg';
import sidebanner2 from '../../assets/images/sidebanner2.jpg';
import endbanner1 from '../../assets/images/endbanner1.jpg';
import ProductItem from '../../Components/ProductItem';
import HomeCat from '../../Components/HomeCat';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';

import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <HomeBanner />

            <HomeCat/>

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                           <div className='sticky'>
                           <div className="banner">
                                <img src={sidebanner2} className="cursor w-100" />
                            </div>

                            <div className="banner mt-5">
                                <img src={sidebanner} className="cursor w-100" />
                            </div>
                           </div>
                        </div>

                        <div className="col-md-9 productRow">
                        {/* best seller */}
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">Best Seller</h3>
                                    <p className="text-light text-sml mb-0">Do not miss current offers</p>
                                </div>

                                <Button className='viewAllBtn ml-auto'>View All <FaArrowRightLong />
                                </Button>
                            </div>

                            <div className='product_row w-100 mt-4'>
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={5}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >      

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>   

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <ProductItem/>
                                </SwiperSlide>
                          
                                </Swiper>
                            </div>



                        {/* new products */}

                        <div className="d-flex align-items-center mt-3">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">New Products</h3>
                                    <p className="text-light text-sml mb-0">Waiting for you</p>
                                </div>

                                <Button className='viewAllBtn ml-auto'>View All <FaArrowRightLong />
                                </Button>
                            </div>

                            <div className='product_row productRow2 w-100 mt-4 d-flex'>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>


                            </div>

                            <div className='d-flex mt-4 mb-5 bannerSec'>
                            <div className="banner">
                                <img src={endbanner1} className="cursor w-100" />
                            </div>  
                            <div className="banner">
                                <img src={endbanner1} className="cursor w-100" />
                            </div>  
                            </div> 

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;