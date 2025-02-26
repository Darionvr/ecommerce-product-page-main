import React, { createContext, useState } from 'react'


export const CartContex = createContext();

const CartProvider = ({ children }) => {

    const [thumbnail, setThumbnail] = useState('')
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [added, setAdded] = useState([])

    return (
        <CartContex.Provider value={{thumbnail, setThumbnail, count, setCount, total, setTotal, added, setAdded}}>
            {children}
        </CartContex.Provider >

    )
}

export default CartProvider