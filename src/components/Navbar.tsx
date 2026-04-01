import { motion } from 'motion/react';
import { Menu, X, Globe, LogOut, LogIn } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { useAuth } from '../AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.faq, href: '#faq' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'si' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center"
            >
              <span className="text-2xl font-bold tracking-tighter text-foreground">
                <span className="text-accent">E</span>SYSTEM
                <span className="text-accent">LK</span>
              </span>
            </motion.div>
            
            <div className="hidden md:flex items-baseline space-x-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-foreground/70 hover:text-accent hover:text-glow transition-all duration-300 text-sm font-medium uppercase tracking-widest"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={toggleLanguage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors cursor-pointer"
            >
              <Globe size={18} />
              <span className="text-xs font-mono font-bold uppercase">{language === 'en' ? 'SI' : 'EN'}</span>
            </motion.button>

            {user ? (
              <div className="flex items-center gap-3">
                {user.photoURL
                  ? <img src={user.photoURL} alt={user.displayName || ''} className="w-8 h-8 rounded-full border-2 border-accent" />
                  : <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">{(user.displayName || user.email || 'U')[0].toUpperCase()}</div>
                }
                <motion.button onClick={logout} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-foreground/60 hover:text-accent text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer">
                  <LogOut size={14} /> Sign Out
                </motion.button>
              </div>
            ) : (
              <motion.button onClick={() => navigate('/auth')}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-accent text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest red-glow hover:bg-foreground transition-all duration-300 cursor-pointer">
                <LogIn size={15} /> Sign In
              </motion.button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <span className="text-xs font-mono font-bold uppercase">{language === 'en' ? 'SI' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden glass overflow-hidden border-t border-black/5"
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setIsOpen(false)}
              className="text-foreground/70 hover:text-accent block px-3 py-4 text-base font-bold uppercase tracking-widest border-b border-black/5 last:border-0"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full bg-accent text-white px-6 py-5 mt-6 font-bold uppercase tracking-widest rounded-xl red-glow"
          >
            Work With Us
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
}
