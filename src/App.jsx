import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Whishlist from './Pages/Whishlist'
import View from './Pages/View'
import Cart from './Pages/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishlist' element={<Whishlist/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/view/:id' element={<View/>} />
      <Route path='/*' element={<Navigate to={'/'}/>} />
    </Routes>
   
     <Footer />
    </>
  )
}

export default App
