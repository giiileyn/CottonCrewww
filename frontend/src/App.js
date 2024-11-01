
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupSignin from './Pages/SignupSignin';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import toddler_banner from './Components/Assets/banner_toddler.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/women' element={<Categories banner = {women_banner} category = "women"/>}/>
        <Route path = '/men' element = {<Categories banner = {men_banner} category = "men" />}/>
        <Route path = '/kid' element = {<Categories banner = {kid_banner}category = "kid"/>}/>
        <Route path = '/toddler' element = {<Categories banner = {toddler_banner} category = "toddler"/>}/>
        <Route path = "/product" element =  {<Products/>}>
          <Route path = ':productId' element ={<Products/>}/>
        </Route>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/signin' element = {<SignupSignin/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
