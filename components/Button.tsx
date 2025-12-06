import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-semibold rounded-2xl py-4 px-6 flex items-center justify-center gap-2 transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-[0_0_20px_rgba(122,60,255,0.4)] border border-white/10",
    secondary: "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700",
    glass: "backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02, boxShadow: variant === 'primary' ? "0 0 30px rgba(122,60,255,0.6)" : undefined }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default Button;