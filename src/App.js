import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './E-commerce pages/Shop';
import ShopCategory from './E-commerce pages/ShopCategory';
import Product from './E-commerce pages/Product';
import Cart from './E-commerce pages/Cart';
import LoginSignup from './E-commerce pages/LoginSignup';
import Login from './E-commerce pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path = '/' element={<Shop/>}/>
        <Route path = '/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path = '/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path = '/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path = '/product' element={<Product/>}>
        <Route path = ':productId' element={<Product/>}/>
        </Route>
        <Route path ='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/login2' element={<Login/>}/>
   



      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
