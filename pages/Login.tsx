import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Ambient Bg */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-neon-purple/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-blue/20 blur-[100px]" />

        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl z-10"
        >
            <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neon-purple to-neon-blue flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(122,60,255,0.4)]">
                    <span className="text-white font-bold text-3xl">P</span>
                </div>
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <p className="text-zinc-400 text-sm mt-2">Enter the future of creativity.</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Email</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Password</label>
                    <input type="password" className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all" />
                </div>
            </div>

            <div className="mt-8">
                <Button fullWidth onClick={() => navigate('/profile')}>
                    Log In
                </Button>
            </div>
            
            <p className="text-center text-zinc-500 text-sm mt-6">
                Don't have an account? <span className="text-neon-blue font-bold">Sign Up</span>
            </p>
        </motion.div>
    </div>
  );
};

export default Login;