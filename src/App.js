import './App.css';
import { Routes, Route } from 'react-router-dom';

// import pages
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

// ________________________________________________________

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/productdetail/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
