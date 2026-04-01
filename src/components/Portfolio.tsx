import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const projectImages = [
  'https://picsum.photos/seed/cyber/800/600',
  'https://picsum.photos/seed/shop/800/600',
  'https://picsum.photos/seed/ai/800/600',
  'https://picsum.photos/seed/finance/800/600',
  'https://picsum.photos/seed/logistics/800/600',
  'https://picsum.photos/seed/social/800/600'
];

const projectTags = [
  ['React', 'D3.js', 'Node.js'],
  ['Next.js', 'Laravel', 'Stripe'],
  ['Python', 'OpenAI', 'React'],
  ['React Native', 'Firebase'],
  ['Go', 'Docker', 'Vue'],
  ['TypeScript', 'PostgreSQL', 'Tailwind']
];

const getTagIcon = (tag: string) => {
  const icons: Record<string, string> = {
    'React': 'https://cdn.simpleicons.org/react/61DAFB',
    'Next.js': 'https://cdn.simpleicons.org/nextdotjs/000000',
    'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
    'Laravel': 'https://cdn.simpleicons.org/laravel/FF2D20',
    'Python': 'https://cdn.simpleicons.org/python/3776AB',
    'Go': 'https://cdn.simpleicons.org/go/00ADD8',
    'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
    'Vue': 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
    'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
    'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
    'Tailwind': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    'Firebase': 'https://cdn.simpleicons.org/firebase/FFCA28',
    'React Native': 'https://cdn.simpleicons.org/react/61DAFB',
    'OpenAI': 'https://cdn.simpleicons.org/openai/412991',
    'Stripe': 'https://cdn.simpleicons.org/stripe/008CDD',
    'D3.js': 'https://cdn.simpleicons.org/d3dotjs/F9A03C',
  };
  return icons[tag] || null;
};

export default function Portfolio() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const total = t.portfolio.items.length;
  const trackRef = useRef<HTMLDivElement>(null);

  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);

  return (
    <section id="portfolio" className="py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-accent tracking-[0.5em] uppercase mb-4">{t.portfolio.title}</h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-foreground">
              {t.portfolio.subtitle} <span className="text-accent italic">{t.portfolio.accent}</span>
            </h3>
          </motion.div>
        </div>

        {/* Slider */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden" ref={trackRef}>
            <motion.div
              className="flex"
              animate={{ x: `calc(-${current * 100}% - ${current * 2}rem)` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ gap: '2rem' }}
            >
              {t.portfolio.items.map((project, idx) => (
                <div
                  key={project.title}
                  className="flex-shrink-0 w-full group relative"
                >
                  <div className="glass p-4 rounded-[2.5rem] relative overflow-hidden group-hover:border-accent/50 transition-all duration-500">
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6">
                      <img
                        src={projectImages[idx % projectImages.length]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                        <button className="bg-foreground text-background p-4 rounded-full hover:scale-110 transition-transform cursor-pointer">
                          <ExternalLink size={24} />
                        </button>
                        <button className="bg-white text-accent p-4 rounded-full hover:scale-110 transition-transform cursor-pointer">
                          <Github size={24} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0 px-2 pb-2">
                      <div>
                        <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">{project.category}</p>
                        <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors text-foreground">{project.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {projectTags[idx % projectTags.length].map(tag => (
                          <span key={tag} className="flex items-center gap-1.5 text-[10px] font-mono border border-black/20 px-2 py-1 rounded uppercase text-foreground">
                            {getTagIcon(tag) && (
                              <img
                                src={getTagIcon(tag)!}
                                alt={tag}
                                className="w-3 h-3 object-contain"
                                referrerPolicy="no-referrer"
                                loading="lazy"
                                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                              />
                            )}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev / Next */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-black/20 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-full border border-black/20 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {t.portfolio.items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current ? 'w-6 bg-accent' : 'w-2 bg-black/20 hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <p className="text-xs font-mono text-foreground/40 uppercase tracking-[0.3em]">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
