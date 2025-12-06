import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Share2, Copy, CheckCircle, Lock, Star } from 'lucide-react';
import { PROMPTS, MOCK_IMAGES } from '../constants';
import Button from '../components/Button';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const prompt = PROMPTS.find(p => p.id === id);
  const [showLoginModal, setShowLoginModal] = useState(false);

  if (!prompt) return <div>Prompt not found</div>;

  const imgSrc = MOCK_IMAGES[prompt.id] || prompt.image;

  const handleBuy = () => {
    // Simulate auth check
    setShowLoginModal(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen pb-32"
    >
      {/* Header Controls */}
      <div className="fixed top-0 left-0 right-0 z-40 p-5 flex justify-between items-start pointer-events-none">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(-1)}
          className="pointer-events-auto p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="pointer-events-auto p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white"
        >
          <Share2 size={24} />
        </motion.button>
      </div>

      {/* Hero Image */}
      <motion.div 
        layoutId={`image-${prompt.id}`}
        className="relative h-[60vh] w-full"
      >
        <img src={imgSrc} alt={prompt.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="px-6 -mt-10 relative z-10">
        <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-neon-purple/20 border border-neon-purple/30 text-neon-purple text-xs font-bold uppercase tracking-wider">
                {prompt.category}
            </span>
             <div className="flex items-center gap-1 text-yellow-400">
                <Star size={14} fill="currentColor" />
                <span className="text-sm font-bold text-white">{prompt.rating}</span>
             </div>
        </div>

        <h1 className="text-3xl font-bold mb-2 leading-tight">{prompt.title}</h1>
        <p className="text-zinc-400 text-base leading-relaxed mb-6">
            {prompt.description}
        </p>

        {/* Included Section */}
        <div className="bg-zinc-900/50 rounded-3xl p-5 border border-white/5 mb-6 backdrop-blur-sm">
            <h3 className="text-sm font-bold text-zinc-300 mb-4 uppercase tracking-wider">What's Included</h3>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle size={14} className="text-green-500" /></div>
                    High Quality Text Prompt
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle size={14} className="text-green-500" /></div>
                    Negative Prompt Instructions
                </li>
                 <li className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="bg-green-500/20 p-1 rounded-full"><CheckCircle size={14} className="text-green-500" /></div>
                    Parameter Settings (v6.0)
                </li>
            </ul>
        </div>

        {/* Locked Content Preview */}
        <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 text-center mb-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-stripes opacity-5"></div>
            <Lock size={32} className="text-zinc-600 mb-1" />
            <h3 className="font-bold text-zinc-400">Prompt Locked</h3>
            <p className="text-xs text-zinc-500 max-w-[200px]">Purchase this item to reveal the full prompt generation code.</p>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/95 to-transparent z-50">
        <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex flex-col">
                <span className="text-xs text-zinc-400">Total Price</span>
                <span className="text-2xl font-bold text-white">${prompt.price}</span>
            </div>
            <Button fullWidth onClick={handleBuy} variant="primary">
                Buy Now
            </Button>
        </div>
      </div>

      {/* Login Modal Simulation */}
      <AnimatePresence>
        {showLoginModal && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
                <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    className="w-full max-w-sm bg-zinc-900 border border-white/10 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-blue" />
                    
                    <h2 className="text-2xl font-bold mb-2">Sign in to Purchase</h2>
                    <p className="text-zinc-400 text-sm mb-6">Create an account to save your prompts instantly.</p>

                    <input type="email" placeholder="Email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 mb-3 text-white focus:outline-none focus:border-neon-purple transition-colors" />
                    <input type="password" placeholder="Password" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 mb-6 text-white focus:outline-none focus:border-neon-purple transition-colors" />

                    <Button fullWidth onClick={() => navigate('/profile')}>
                        Sign In / Sign Up
                    </Button>
                    
                    <button 
                        onClick={() => setShowLoginModal(false)}
                        className="w-full text-center text-zinc-500 text-sm mt-4 py-2"
                    >
                        Cancel
                    </button>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductDetails;