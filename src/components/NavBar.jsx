import React, { useContext, useEffect, useRef, useState } from 'react'
import { CartContex } from '../Context/CartContex'
import Cart from './Cart'


const NavBar = () => {

    const { total } = useContext(CartContex)

    const [openCart, setOpenCart] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        if (total > 0) {
            setOpenCart(true);
        }
    }, [total])

    const handleCart = () => {

        if (openCart == false) {
            setOpenCart(true)
        } else {
            setOpenCart(false)
        }
    }

    const handleMenu = () => {
        if (!mobileMenu) {
            setMobileMenu(true)
        } else {
            setMobileMenu(false)
        }
    }

   

    const handleClickOutside = (event) => {
        if (!event.target.closest('.cart') && !event.target.closest('.cart-icon')) {
            setOpenCart(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav>
            <img onClick={handleMenu} className='menu-icon' src="images/icon-menu.svg" alt="" />
            <img className='logo' src="images/logo.svg" alt="Brand Logo" />

            <ul className='desktop-menu'>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='navcart'   >
                <img onClick={() => handleCart()} className='cart-icon' src="images/icon-cart.svg" alt="Cart Icon" />
                {total > 0 && <span className='cart-total' >{total}</span>}
            </div>


            <img className='avatar' src="images/image-avatar.png" alt="Profile picture" />
            {openCart && <Cart />}

            {mobileMenu &&
                <div className='modal'>
                    <div className="mobile-menu">
                        <img onClick={handleMenu} src="images/icon-close.svg" alt="Close button" />
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                </div>
            }


        </nav>
    )
}

export default NavBar