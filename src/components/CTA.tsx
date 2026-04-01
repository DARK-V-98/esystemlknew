import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-accent rounded-[3rem] p-12 sm:p-24 relative overflow-hidden text-center group"
        >
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full grid-bg" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] border border-white/20 rounded-full" 
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8 uppercase"
            >
              {t.cta.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg sm:text-2xl font-medium mb-12 max-w-xl mx-auto"
            >
              {t.cta.subtitle}
            </motion.p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-accent px-10 py-6 rounded-full font-black uppercase tracking-widest flex items-center gap-4 mx-auto group shadow-2xl cursor-pointer"
            >
              {t.cta.button}
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
