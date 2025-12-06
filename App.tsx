import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  // Hide bottom nav on details page and login page for more immersive feel
  const hideNav = location.pathname.includes('/product/') || location.pathname === '/login';

  return (
    <>
      {location.pathname !== '/login' && <Header />}
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/saved" element={<div className="pt-24 px-5 text-center text-zinc-500">Saved Items coming soon</div>} />
        </Routes>
      </AnimatePresence>

      {!hideNav && <BottomNav />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-neon-purple/30 selection:text-white overflow-x-hidden">
        <AnimatedRoutes />
      </div>
    </HashRouter>
  );
};

export default App;