import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="scanline absolute inset-0 opacity-20" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 text-center"
          >
            <div className="mb-8">
              <span className="text-4xl sm:text-6xl font-black tracking-tighter text-black">
                <span className="text-accent">E</span>SYSTEM
                <span className="text-accent">LK</span>
              </span>
            </div>

            <div className="w-64 sm:w-80 h-1 bg-black/5 rounded-full overflow-hidden relative mb-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between items-center px-1">
              <span className="text-[10px] font-mono text-black/40 uppercase tracking-widest">Initialising Systems</span>
              <span className="text-[10px] font-mono text-accent font-bold">{progress}%</span>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[8px] font-mono text-black/20 uppercase tracking-[0.3em]">Protocol: v2.0.4</p>
              <p className="text-[8px] font-mono text-black/20 uppercase tracking-[0.3em]">Status: Secure Connection</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] font-mono text-black/20 uppercase tracking-[0.3em]">© 2026 ESYSTEMLK</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
