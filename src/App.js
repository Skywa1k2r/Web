import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './pages/Main/Main'
import Users from './pages/Users/Users'
import Cart from './pages/Cart/Cart'
import Favourites from './pages/Favourites/Favourites'
import Detail from './pages/Detail/Detail'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Header from './components/Navs/Header'
import Footer from './components/Navs/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="products/" element={<Products />} />
        <Route path="about/" element={<About />} />
        <Route path="product/:id" element={<Detail />} />
        <Route path="user/" element={<Users />} />
        <Route path="cart/" element={<Cart />} />
        <Route path="favourites/" element={<Favourites />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
