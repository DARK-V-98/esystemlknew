import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { Check } from 'lucide-react';

export default function Pricing() {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
            {t.title}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            {t.subtitle} <span className="text-accent italic">{t.accent}</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.items.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${
                index === 1 
                  ? 'bg-white/5 border-accent shadow-2xl shadow-accent/10 relative scale-105 z-10' 
                  : 'bg-white/5 border-white/10'
              } backdrop-blur-sm hover:border-accent/50 transition-colors group`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
              <div className="text-3xl font-bold mb-6 text-accent">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground/70">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                index === 1 
                  ? 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {translations[language].cta.button}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
