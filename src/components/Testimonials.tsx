import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-accent tracking-[0.5em] uppercase mb-4">{t.testimonials.title}</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-foreground">
            {t.testimonials.subtitle} <span className="text-accent italic">{t.testimonials.accent}</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2.5rem] relative group hover:border-accent/30 transition-all duration-500"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Quote size={20} />
              </div>
              
              <p className="text-foreground/70 leading-relaxed mb-8 italic text-lg">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight text-foreground">{item.name}</h4>
                  <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
