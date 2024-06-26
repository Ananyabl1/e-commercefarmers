import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import thumnail1 from '../../assets/images/thumbnail-1.jpg'
import thumnail2 from '../../assets/images/thumbnail-2.jpg'
import thumnail3 from '../../assets/images/thumbnail-3.jpg'

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);

    return (
        <section className='homeCat'>
            <div className='container'>
                <h3 className="mb-3 hd">FEATURED CATEGORIES</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                {itemBg?.map((item, index)=>{
                    return(
                        <SwiperSlide>
                        <div className="item text-center cursor" style={{background: item}}>
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                            <h6>Red Apples</h6>
                        </div>
                    </SwiperSlide>
                    )
                })}

                   
                    
                </Swiper>
            </div>
        </section>
    )
}

export default HomeCat;