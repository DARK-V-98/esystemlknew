import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Wrench } from 'lucide-react';

export default function UpdateNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('update-notice-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem('update-notice-dismissed', '1');
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          {/* Popup */}
          <motion.div
            className="fixed z-[1000] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="glass rounded-[2rem] p-8 relative overflow-hidden border border-accent/30">
              {/* Accent glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} className="text-foreground/50" />
              </button>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                <Wrench size={26} className="text-accent" />
              </div>

              {/* Content */}
              <p className="text-xs font-mono text-accent tracking-[0.4em] uppercase mb-3">Notice</p>
              <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-3">
                Site Under Update
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-6">
                We're currently updating this website. New features and trials will be added soon — stay tuned for what's coming.
              </p>

              <button
                onClick={dismiss}
                className="w-full py-3 rounded-xl bg-accent text-white font-bold uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors cursor-pointer"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
