import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";
import prodimg from '../../assets/images/product-image-1.jpg'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { useRef } from 'react';
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


const ProductModel = (props) => {

    var settings2 = {
        dots: false,
        infinite: false,
        speed:700,
        slidesToShow:1,
        slidesToScroll:1,
        fade:false,
        arrows:false
    }

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    return (
        <>
            <Dialog open={true} className='productModal' onClose={() => props.closeProductModal()}>
            
                <Button className='close_' onClick={() => props.closeProductModal()}><IoClose /></Button>
                <h4 className='mb-1 font-weight-bold'>Freshly Grown Carrots</h4>

                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Brands:</span>
                        <span className='ml-2'>John's:</span>
                    </div>

                    <div className='read-only'>      <Rating name="read-only" size="small" precision={0.2} value={1} readOnly />

                    </div>

                    <hr />

                    <div className='row mt-2 productDetailsModal'>
                        <div className='col-md-5'>
                            <div className='productZoom'>

                                <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={prodimg} />
                                    </div>
                                </Slider>

                            </div>
                        </div>
                        <div className='col-md-7'></div>
                    </div>

                </div>
            </Dialog>
        </>
    )
}

export default ProductModel;