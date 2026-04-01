import { motion, Variants } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const containerVariants: Variants = {
// ...
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 border-2 border-accent/30 rounded-3xl animate-pulse" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-accent red-glow">
              <img 
                src="https://picsum.photos/seed/company/800/1000" 
                alt="ESYSTEMLK Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 glass p-4 sm:p-8 rounded-2xl"
            >
              <p className="text-xl sm:text-4xl font-black text-accent">8+</p>
              <p className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-foreground/60 whitespace-pre-line">{t.about.years}</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.h2 variants={itemVariants} className="text-sm font-mono text-accent tracking-[0.5em] uppercase mb-4">{t.about.title}</motion.h2>
            <motion.h3 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 text-foreground">{t.about.subtitle} <span className="text-accent">{t.about.accent}</span></motion.h3>
            
            <div className="space-y-6 text-foreground/70 text-base sm:text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                {t.about.p1}
              </motion.p>
              <motion.p variants={itemVariants}>
                {t.about.p2}
              </motion.p>
              <motion.p variants={itemVariants}>
                {t.about.p3}
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-accent font-black text-xl sm:text-2xl">150+</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.about.projects}</p>
              </div>
              <div>
                <p className="text-accent font-black text-xl sm:text-2xl">50+</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.about.clients}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
