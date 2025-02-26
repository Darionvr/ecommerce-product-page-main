import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Info from './components/Info'
import CartProvider from './Context/CartContex'

import Views from './components/Views'

function App() {

  

  return (
    <>
      <CartProvider>
        <NavBar />
        <main>
          <Views />
          <Info />
        </main>
       
      </CartProvider>


    </>
  )
}

export default App
