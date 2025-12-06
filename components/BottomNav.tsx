import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, User, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNav: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Grid, label: 'Shop', path: '/shop' },
    { icon: Heart, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-16 px-6 flex items-center justify-between">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `relative flex flex-col items-center justify-center w-12 h-12 transition-colors ${isActive ? 'text-neon-blue' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-white/5 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="relative z-10"
                >
                  <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                  {isActive && (
                    <motion.div 
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-blue rounded-full shadow-[0_0_10px_#4a8bff]" 
                    />
                  )}
                </motion.div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;