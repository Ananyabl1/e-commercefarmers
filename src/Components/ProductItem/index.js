import Button from '@mui/material/Button';
import ProductModel from '../ProductModel';
import thumbnail1 from '../../assets/images/thumbnail-1.jpg'
import Rating from '@mui/material/Rating';
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from 'react';


const ProductItem = () => {

    const[isOpenProductModal, setisOpenProductModal]= useState(false);

    const viewProductDetails = (id)=> {
        setisOpenProductModal(true); 
    }

    const closeProductModal= () => {
        setisOpenProductModal(false);
    }

    return (
        <>
            <div className='item productItem'>
                <div className='imgWrapper'>
                    <img src={thumbnail1} className='w-100' />

                    <span className='badge badge-primary'>28</span>

                    <div className='actions'> <Button onClick={()=>viewProductDetails(1)}><BsArrowsFullscreen />
                    </Button> 
                    <Button><IoMdHeartEmpty style={{fontSize : '20px'}}/>
                    </Button> 
                    </div>
                </div>

                <div className='info'>
                    <h4>Wethers freshly grown veggies</h4>
                    <span className='text-success d-block'>In stock</span>
                    <Rating className='mt-1 mb-1' name="read-only" value={4.4} readOnly size='small' precision={0.2} />

                    <div className='d-flex'>
                        <span className='oldPrice'>50/-</span>
                        <span className='netPrice text-danger ml-2'>35/-</span>
                    </div>
                </div>
            </div>

            {isOpenProductModal=== true && <ProductModel closeProductModal={closeProductModal}/> } 

            
        </>
    )
}

export default ProductItem;