import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { CheckCircle2, Search, PenTool, Code2, Rocket } from 'lucide-react';

const icons = [Search, PenTool, Code2, Rocket];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-accent tracking-[0.5em] uppercase mb-4">{t.process.title}</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-foreground">
            {t.process.subtitle} <span className="text-accent italic">{t.process.accent}</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-black/5 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {t.process.steps.map((step, idx) => {
              const Icon = icons[idx];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`flex-1 w-full ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`glass p-8 rounded-3xl relative group hover:border-accent/30 transition-all duration-500`}>
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                         <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                           <Icon size={24} />
                         </div>
                         <h4 className="text-2xl font-bold uppercase tracking-tight text-foreground">{step.title}</h4>
                      </div>
                      <h4 className="text-3xl font-bold uppercase tracking-tight mb-4 hidden md:block text-foreground">{step.title}</h4>
                      <p className="text-foreground/60 leading-relaxed">{step.desc}</p>
                      
                      {/* Step Number Badge */}
                      <div className={`absolute -top-4 ${isEven ? 'md:-left-4' : 'md:-right-4'} left-4 bg-accent text-white w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold shadow-lg`}>
                        0{idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Icon Node (Desktop) */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-background border border-black/5 shadow-xl group">
                    <div className="w-16 h-16 rounded-full bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <Icon size={32} />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
