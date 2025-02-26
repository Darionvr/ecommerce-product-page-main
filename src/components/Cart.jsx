import React, { useContext } from 'react'
import { CartContex } from '../Context/CartContex'

const Cart = () => {

const {added, total, setAdded, setTotal} = useContext(CartContex)

const cleanCart = () => {
    setAdded([])
    setTotal(0)
}

  return (
    <div className='cart'>
        <p className='cart-title'> Cart</p>
        {added.length > 0 ? (
         <>
         <div className='cart-detail'>
            <img className='cart-image' src={`images/${added[0].thumbnails[0]}`} alt="" />
            <div>
                <p>{added[0].name}</p>
                <p className='allprices'><span>{added[0].price.toLocaleString()}</span> <span>x {total}</span> <span className='total-cost'>${(added[0].price * total).toLocaleString()}</span></p>
            </div>
            <img onClick={() => cleanCart()} src="images/icon-delete.svg" alt="Trash can icon" className='trashcan' />
        </div>
        <button className='checkout'>Checkout</button>
        </>):(
            <p className='emptycart'> Your cart is empty.</p>
        )}
    </div>
  )
}

export default Cart