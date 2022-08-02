import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import Blog from './pages/Blog';
import About from './pages/About';
import Error from './pages/Error';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotal, getAllProducts } from './features/cart/cartSlice';
import Checkout from './pages/Checkout';

function App() {
  const { allProducts, cartItems, isLoading, errorMessage } = useSelector(state => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems])

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  // console.log(allProducts);

  return (
    <div >
      <Navbar />
      <main className="px-16 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Blog />} />
          <Route path="/review" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
