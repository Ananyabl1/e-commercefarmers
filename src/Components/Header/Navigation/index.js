import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { useState } from 'react';

const Navigation = ()=>{

    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

    return(
        <>
             <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-2 navPart1'>
                               <div className='catWrapper'>
                               <Button className='allCatTab align-items-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                    <span className='icon1 mr-2'><IoMenu/></span>
                                    <span className='text'>ALL CATEGORIES</span>
                                    <span className='icon2 ml-2'><FaAngleDown/></span>
                                </Button>

                                <div className={`sidebarNav ${isopenSidebarVal=== true ? 'open' : ''}`}>
                                    <ul>
                                        <li><Link to='/'> <Button>Home<FaAngleRight className='ml-auto'/></Button> </Link>
                                        <div className='submenu'>
                                        <Link to='/'><Button>Instant delivery</Button></Link>
                                    {/* veggies */}
                                    <Link to='/'><Button>Deliver in 7 days</Button></Link>
                                    {/* rice and other flour */}
                                    <Link to='/'><Button>Deliver in a month</Button></Link>
                                    {/* exotic */}
                                        </div>
                                        </li>
                                        <li><Link to='/'> <Button>Shop</Button> </Link></li>
                                        <li><Link to='/'> <Button>Beverages</Button> </Link></li>
                                        <li><Link to='/'> <Button>Meat & SeaFood</Button> </Link></li>
                                        <li><Link to='/'> <Button>Bakery</Button> </Link></li>
                                        <li><Link to='/'> <Button>Grocery</Button> </Link></li>
                                        <li><Link to='/'> <Button>Blog</Button> </Link></li>
                                        <li><Link to='/'> <Button>Contact Us</Button> </Link></li>
                                    </ul>
                                </div>
                               </div>
                            </div>

                            <div className='col-sm-10 navPart2 d-flex align-items-center'>
                                <ul className='list list-inline ml-auto'>
                                    <li className='list-inline-item'><Link to='/'> <Button>Home</Button> </Link></li>
                                    <li className='list-inline-item'>
                                    <Link to='/'><Button>Shop</Button></Link>

                                    <div className='submenu shadow'>
                                    <Link to='/'><Button>Instant delivery</Button></Link>
                                    {/* veggies */}
                                    <Link to='/'><Button>Deliver in 7 days</Button></Link>
                                    {/* rice and other flour */}
                                    <Link to='/'><Button>Deliver in a month</Button></Link>
                                    {/* exotic */}
                                    </div>

                                    </li>
                                    <li className='list-inline-item'><Link to='/'><Button>Beverages</Button></Link></li>
                                    <li className='list-inline-item'><Link to='/'><Button>Meat & SeaFood</Button></Link></li>
                                    <li className='list-inline-item'><Link to='/'> <Button>Bakery</Button></Link></li>
                                    <li className='list-inline-item'><Link to='/'><Button>Grocery</Button></Link></li>
                                    <li className='list-inline-item'><Link to='/'><Button>Blog</Button></Link></li>
                                    <li className='list-inline-item'><Link to='/'><Button>Contact</Button></Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
        </>
    );
}

export default Navigation;