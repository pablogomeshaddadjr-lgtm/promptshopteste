import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap } from 'lucide-react';
import { Prompt } from '../types';
import { MOCK_IMAGES } from '../constants';
import { useNavigate } from 'react-router-dom';

interface PromptCardProps {
  prompt: Prompt;
  index: number;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, index }) => {
  const navigate = useNavigate();
  const imgSrc = MOCK_IMAGES[prompt.id] || prompt.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => navigate(`/product/${prompt.id}`)}
      className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imgSrc} 
          alt={prompt.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 border border-white/10">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold">{prompt.rating}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-start justify-between">
          <div className="w-full">
            <h3 className="text-sm font-bold text-white truncate mb-1">{prompt.title}</h3>
            <div className="flex items-center justify-between w-full mt-2">
              <span className="text-xs text-zinc-400 px-2 py-0.5 rounded-md bg-zinc-800/80 border border-white/5">{prompt.category}</span>
              <span className="text-neon-blue font-bold text-lg">${prompt.price}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glow effect on hover/active */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-purple/50 rounded-3xl transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default PromptCard;