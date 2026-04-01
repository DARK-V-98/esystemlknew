import { motion } from 'motion/react';
import { 
  Layout, ShoppingCart, Box, Smartphone, 
  Share2, Bot, Settings, Zap 
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [Layout, ShoppingCart, Box, Smartphone, Share2, Bot, Settings, Zap];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-black/[0.02] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-mono text-accent tracking-[0.5em] uppercase mb-4">{t.services.title}</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-foreground">
            {t.services.subtitle} <span className="text-accent">{t.services.accent}</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl group hover:border-accent/50 transition-all duration-500 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-white transition-all duration-500 mb-6 relative overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx * 0.1 
                    }}
                  >
                    <Icon size={28} />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight text-foreground">{service.title}</h4>
                <p className="text-foreground/50 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
