import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import PromptCard from '../components/PromptCard';
import { CATEGORIES, PROMPTS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pb-28 pt-20"
    >
      {/* Hero Section */}
      <section className="px-5 mb-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] bg-gradient-to-b from-zinc-900 to-black border border-white/10 overflow-hidden p-6 min-h-[400px] flex flex-col justify-end items-start"
        >
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 animate-pulse-slow" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-xs font-semibold text-neon-blue mb-4"
            >
              <Sparkles size={12} />
              <span>AI Generated Perfection</span>
            </motion.div>

            <h1 className="text-4xl font-bold leading-tight mb-3">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Imagination.</span>
            </h1>
            <p className="text-zinc-400 mb-6 text-sm max-w-[200px]">
              Premium prompts for Midjourney, DALL-E 3 & Stable Diffusion.
            </p>

            <Button onClick={() => navigate('/shop')}>
              Explore Prompts <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="mb-10">
        <div className="px-5 flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Categories</h2>
          <span className="text-xs text-neon-purple font-semibold cursor-pointer">See All</span>
        </div>
        <div className="flex overflow-x-auto gap-4 px-5 pb-4 no-scrollbar touch-pan-x">
          {CATEGORIES.slice(1).map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/shop')}
              className="flex-shrink-0 min-w-[100px] h-[120px] rounded-3xl bg-zinc-900 border border-white/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent group-hover:from-neon-purple/20 transition-colors" />
              <span className="text-sm font-semibold relative z-10">{cat}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="px-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {PROMPTS.slice(0, 4).map((prompt, i) => (
            <PromptCard key={prompt.id} prompt={prompt} index={i} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;