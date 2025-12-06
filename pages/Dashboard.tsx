import React from 'react';
import { motion } from 'framer-motion';
import { Copy, LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROMPTS, MOCK_IMAGES } from '../constants';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    // Simulate purchased items
    const myPrompts = [PROMPTS[0], PROMPTS[2]]; 

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="pb-32 pt-24 px-5"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <p className="text-zinc-400 text-sm">Design Enthusiast</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-700 border border-white/10" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-5">
                    <span className="text-3xl font-bold text-white block mb-1">24</span>
                    <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Prompts</span>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-5">
                    <span className="text-3xl font-bold text-white block mb-1">4.9</span>
                    <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Rating</span>
                </div>
            </div>

            <h2 className="text-xl font-bold mb-4">My Collection</h2>

            <div className="space-y-4">
                {myPrompts.map((prompt, i) => (
                    <motion.div 
                        key={prompt.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-zinc-900 border border-white/5 rounded-3xl p-4 flex gap-4 items-center group"
                    >
                        <img 
                            src={MOCK_IMAGES[prompt.id] || prompt.image} 
                            alt={prompt.title} 
                            className="w-20 h-20 rounded-2xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-white truncate">{prompt.title}</h3>
                            <p className="text-xs text-zinc-400 mb-2 truncate">{prompt.category}</p>
                            <button className="flex items-center gap-1.5 text-xs font-bold text-neon-blue bg-neon-blue/10 px-3 py-1.5 rounded-lg active:scale-95 transition-transform">
                                <Copy size={12} /> Copy Prompt
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-10 space-y-2">
                 <button className="w-full flex items-center justify-between p-4 bg-zinc-900/30 rounded-2xl border border-white/5 text-zinc-300">
                    <div className="flex items-center gap-3">
                        <Settings size={18} /> Settings
                    </div>
                </button>
                <button onClick={() => navigate('/login')} className="w-full flex items-center justify-between p-4 bg-zinc-900/30 rounded-2xl border border-white/5 text-red-400">
                    <div className="flex items-center gap-3">
                        <LogOut size={18} /> Log Out
                    </div>
                </button>
            </div>
        </motion.div>
    );
};

export default Dashboard;