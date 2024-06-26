import React from "react";
import Slider from "react-slick";
import  slider1 from '../../assets/images/slider-1.png';
import  slider2 from '../../assets/images/slider-2.png';

const HomeBanner = ()=> {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
      };
    return(
        
       <div className="container mt-3">
         <div className="homeBannerSection">
            <Slider {...settings} className="swiper">
                <div className="item">
                    <img src={slider1} className="w-100"/>
                </div>
                <div className="item">
                    <img src={slider2} className="w-100"/>
                </div>
                {/* <div className="item">
                    <img src={banner1}className="w-100"/>
                </div> */}
            </Slider>
        </div>
       </div>
    )
}

export default HomeBanner;