import React, { useContext, useEffect, useRef, useState } from 'react'
import { CartContex } from '../Context/CartContex'
import Cart from './Cart'


const NavBar = () => {

    const { total } = useContext(CartContex)
    const [openCart, setOpenCart] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

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
            <img onClick={() => setIsOpen(true)} className='menu-icon' src="images/icon-menu.svg" alt="Mobile Menu Icon" />
            <img className='logo' src="images/logo.svg" alt="Brand Logo" />

            <ul className={`nav-menu ${isOpen ? 'open' : 'closed'}`}>
                <img  onClick={() => setIsOpen(false)} src="images/icon-close.svg" alt="Close button" />
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
            <div className="overlay" style={{display: isOpen ? 'block' : 'none'}}></div>




        </nav>
    )
}

export default NavBar