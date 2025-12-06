import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal } from 'lucide-react';
import PromptCard from '../components/PromptCard';
import { PROMPTS, CATEGORIES } from '../constants';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredPrompts = activeCategory === 'All' 
    ? PROMPTS 
    : PROMPTS.filter(p => p.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pb-28 pt-24 px-5"
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Explore</h1>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowFilters(!showFilters)}
          className={`p-3 rounded-2xl border ${showFilters ? 'bg-neon-purple text-white border-neon-purple' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}
        >
          <SlidersHorizontal size={20} />
        </motion.button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="flex flex-wrap gap-2 pb-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat 
                    ? 'bg-neon-blue text-white shadow-[0_0_10px_rgba(74,139,255,0.4)]' 
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 gap-4">
        <AnimatePresence mode='popLayout'>
          {filteredPrompts.map((prompt, i) => (
            <PromptCard key={prompt.id} prompt={prompt} index={i} />
          ))}
        </AnimatePresence>
      </div>
      
      {filteredPrompts.length === 0 && (
        <div className="py-20 text-center text-zinc-500">
          No prompts found in this category.
        </div>
      )}
    </motion.div>
  );
};

export default Shop;