import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 text-foreground">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter">
              <span className="text-accent">E</span>SYSTEM
              <span className="text-accent">LK</span>
            </span>
            <p className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest mt-2">
              © 2026 ESYSTEMLK Software Solutions. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-8">
            {['Home', 'Skills', 'Services', 'Portfolio', 'About', 'Contact'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[10px] font-mono uppercase tracking-widest text-foreground/40 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-6 justify-center">
            {[Facebook, Twitter, Linkedin, Github, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -5, color: '#E50914' }}
                className="text-foreground/40 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
