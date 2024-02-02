import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Routes, Link } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import './style.css';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import Store from "./Store/Store";



function App() {
  return (
    <Provider store ={Store}>
    <div className="App">
      <NavBar />    

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
        <Route path='/product' element={<Product />} />
          
          {/* <Route path='vegetables' element={<Vegetables />} />
          <Route path='fruits' element={<Fruits />} />
          <Route path='dairy-products' element={<DairyProducts />} />
          
          </Route> */}
          <Route path='/cart' element={<Cart />} />
                       
      </Routes>
      <Footer />
    </div>
    </Provider>
  );
  
}

export default App;