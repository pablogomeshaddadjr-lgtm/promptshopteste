import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-5 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-purple to-neon-blue flex items-center justify-center shadow-[0_0_15px_rgba(122,60,255,0.5)]">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <motion.span 
              className="text-xl font-bold tracking-tight"
              animate={{ opacity: scrolled && !isHome ? 0 : 1, width: scrolled && !isHome ? 0 : 'auto' }}
            >
              PromptShop
            </motion.span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white"
          >
            <Search size={20} />
          </motion.button>
          <motion.div className="relative">
             <motion.button 
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 backdrop-blur-md border border-white/10 text-white"
            >
              <ShoppingBag size={20} />
            </motion.button>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center font-bold">0</span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;