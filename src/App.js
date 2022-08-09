import React from 'react' 
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Products from './Products'
import './index.css'
import './Home.css'
import './Contact.css'
import './Products.css'
function App(){
  return(

    <BrowserRouter>
      <div className="text-success">
        <nav>
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/services" className="link">Services</Link>
          <Link to="/products" className="link">Products</Link>
          <Link to="/contact" className="link">Contact Us</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  )}

export default App;
