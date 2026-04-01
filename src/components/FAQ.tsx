import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageContext';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-black/[0.02] relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-accent tracking-[0.5em] uppercase mb-4">{t.faq.title}</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-foreground">
            {t.faq.subtitle} <span className="text-accent italic">{t.faq.accent}</span>
          </h3>
        </motion.div>

        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass rounded-3xl overflow-hidden transition-all duration-500 ${isOpen ? 'border-accent/30 bg-white/10' : 'hover:border-accent/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className={`text-lg sm:text-xl font-bold uppercase tracking-tight transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-foreground group-hover:text-accent'}`}>
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-black/5 text-foreground/40 group-hover:bg-accent/10 group-hover:text-accent'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8 pt-2">
                        <p className="text-foreground/60 leading-relaxed text-lg">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
