import React, { useContext, useEffect, useState } from 'react'
import product from '../Product'
import { CartContex } from '../Context/CartContex'



const Info = () => {

    const { added, setAdded, total, setTotal } = useContext(CartContex)

 
    const [preCart, setPreCart] = useState([])
    const [preTotal, setPreTotal] = useState(0)


   
    const handlePlus = () => {
        if (preTotal === 0) {
            const newProduct = { ...product };
            setPreCart([newProduct]);
            setPreTotal(newProduct.count);


        } else if (preTotal >= 1) {
            const newProduct = { ...product, count: preCart[0].count + 1 };
            setPreCart([newProduct]);
            setPreTotal(newProduct.count);
            console.log(preCart)

        }
    }

    const handleMinus = () => {
        if (preTotal > 1) {
            const newProduct = { ...product, count: preCart[0].count - 1 };
            setPreCart([newProduct]);
            setPreTotal(newProduct.count);
        } else if (preTotal === 1) {
            setPreCart([]);
            setPreTotal(0);
        }
    }

    const addtoCart = () => {
        if (preCart.length > 0 && preTotal > 0) {
            setAdded(preCart)
            setTotal(preTotal)
        }

    }

    useEffect(() => {
        console.log(added)
    }, [added, total])

    return (
        <>
           
                
                <div className='productinfo'>
                    <p className='brand'>{product.brand.toLocaleUpperCase()}</p>
                    <p className='name'> {product.name}</p>
                    <p className='description'>  {product.description}</p>

                    <p className='prices'>  
                        <span className='finalprice'>${product.price.toLocaleString()} <span className='discount'>50% </span></span>
                        <span className='originalprice'>$250.000</span>
                    </p>
                    <div className='buttons'>
                        <div className='plusminus'> <img src="images/icon-minus.svg" alt="minus button" onClick={handleMinus} /><span> {preTotal}</span> <img src="images/icon-plus.svg" alt="plus button" onClick={handlePlus} /></div>
                        <button  className='addtocart' onClick={() => addtoCart()}> 
                        <svg className='addtocart-icon' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"  fillRule="nonzero"/></svg> Add to cart</button>
                    </div>
                </div>
           

        </>
    )
}

export default Info