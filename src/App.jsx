import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage'
import Contactpage from './Pages/ContactPage/Contactpage'
import ShopPage from './Pages/ShopPage/ShopPage'
import Categorypage from './Pages/Categorypage/Categorypage'
import Dashboard from './Pages/Dashboard/Dashboard'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Homepage/>} />
        <Route path="/contact" element={<Contactpage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/category" element={<Categorypage/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;