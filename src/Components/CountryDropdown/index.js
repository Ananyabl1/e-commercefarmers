import React, { useContext, useEffect, useState  } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const CountryDropdown = () => {
    const[isOpenModal, setIsOpenModal]= useState(false);
    // isOpenModal passed to dialog

    const[selectedTab, setSelectedTab]= useState(null);
    const[selectedPlace, setSelectedPlace]= useState("");
    const[areaList, setareaList] = useState([])
    const context = useContext(MyContext);

    const selectCity = (index, item) => {
        setSelectedTab(index);
        setIsOpenModal(false);
        setSelectedPlace(item.substr(0, 10)+"...");
    }

    useEffect(() => {
        setareaList(context.areaList);
    }, [])

    const filterList =(e) => {

        const keyword = e.target.value.toLowerCase();

        if(keyword!==""){
            const list = areaList.filter((item) => {
                return item.toLowerCase().includes(keyword)
            });
            setareaList(list);
        }
        else{
            setareaList(context.areaList);
        }

        
    }


    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>{selectedPlace}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} TransitionComponent={Transition} className='locationModal'>
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={() => setIsOpenModal(false)}><IoClose/></Button>

                <div className='headerSearch w-100'>
                    <input type='text' placeholder='Search your Area' onChange={filterList}/>
                    <Button><FaSearch /></Button>
                </div>

                <ul className='areaList mt-3'>
                   {areaList!== 0 && areaList?.map((item, index)=>{
                    return(
                        <li key={index}><Button onClick={()=> selectCity(index, item)} className={`${selectedTab=== index ? 'active' : ''}`}>{item}</Button></li>
                    )
                   })}
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown