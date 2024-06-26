import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import SearchBox from './SearchBox';
import Navigation from './Navigation';


import { FaRegUser } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { useContext } from 'react';
import { MyContext } from '../../App';

 
const Header = ()=>{
    const context = useContext(MyContext)

    return(
        <>
            <div className='headerWrapper'>
                <div className='top-strip bg-green'>
                    <div className='container'>
                        <p className='mb-0 mt-0 text-center'>Welcome to our store! Enjoy shopping with a <b>10% discount</b> on your first order.</p>
                    </div>
                </div>

                <header className='header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='logoWrapper d-flex align-items-center  col-sm-2'>
                                <Link to={'/'}><img src={logo} alt='logo'/></Link>
                            </div>

                            <div className='d-flex align-items-center col-sm-10 part2'>
                            {
                                context.areaList !==0 && <CountryDropdown/>
                            }
                                
                                <SearchBox/>
                                
                                    <div className='part3 d-flex align-items-center ml-auto'>
                                        <Button className='circle mr-3'>
                                        <FaRegUser />
                                        </Button>

                                        <div className='ml-auto cartTab d-flex align-items-center'>
                                            <span className='price'>3.29/-</span>
                                            <div className='position-relative ml-2'>
                                            <Button className='circle'>
                                        <LuShoppingBag />
                                        </Button>

                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>
                </header>

               <Navigation/>
            </div>
        </>
    )
}

export default Header;