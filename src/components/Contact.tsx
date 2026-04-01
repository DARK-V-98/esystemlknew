import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin, Facebook, Mail, Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-black/[0.02] overflow-hidden">
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
          <h2 className="text-sm font-mono text-accent tracking-[0.5em] uppercase mb-4">{t.contact.title}</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-foreground">
            {t.contact.subtitle} <span className="text-accent">{t.contact.accent}</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 sm:space-y-12">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-2">{t.contact.callUs}</h4>
                  <p className="text-lg sm:text-xl font-bold text-foreground">+94 77 571 1396</p>
                  <p className="text-foreground/40 text-sm sm:text-base">+94 77 259 1396</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-2">WhatsApp</h4>
                  <p className="text-lg sm:text-xl font-bold text-foreground">+94 77 571 1396</p>
                  <a 
                    href="https://wa.me/94775711396" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block mt-4 bg-accent text-white px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
                  >
                    {t.contact.whatsappBtn}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-2">{t.contact.location}</h4>
                  <p className="text-lg sm:text-xl font-bold text-foreground uppercase">NO 618, 6TH FLOOR, JANA JAYA CITY MALL</p>
                  <p className="text-foreground/40 text-sm sm:text-base uppercase">RAJAGIRIYA (JJC MALL), SRI LANKA</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Facebook size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-foreground/40 uppercase tracking-widest mb-2">{t.contact.social}</h4>
                  <a 
                    href="https://www.facebook.com/esystemlk/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-lg sm:text-xl font-bold hover:text-accent transition-colors text-foreground"
                  >
                    facebook.com/esystemlk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl" />
            
            <form className="space-y-6 relative z-10 mb-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.contact.name}</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.contact.email}</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.contact.subject}</label>
                <input 
                  type="text" 
                  className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors text-foreground"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.contact.message}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors resize-none text-foreground"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 red-glow cursor-pointer"
              >
                <Send size={18} />
                {t.contact.send}
              </motion.button>
            </form>

            {/* Animated Location Map Placeholder */}
            <div className="relative h-48 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 800 400">
                  <path d="M150,100 Q400,50 650,100 T650,300 Q400,350 150,300 T150,100" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="5,5" />
                  <circle cx="400" cy="200" r="100" fill="none" stroke="black" strokeWidth="0.2" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-accent rounded-full red-glow mb-2"
                />
                <p className="text-[10px] font-mono text-accent uppercase tracking-widest">RAJAGIRIYA (JJC MALL), SRI LANKA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
