import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Blog() {
  const { language } = useLanguage();
  const t = translations[language].blog;

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-white/5">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
              {t.title}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              {t.subtitle} <span className="text-accent italic">{t.accent}</span>
            </h3>
          </div>
          <button className="flex items-center gap-2 text-accent font-bold group hover:gap-4 transition-all">
            View All Insights <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.items.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-2xl bg-white/10 overflow-hidden mb-6 relative">
                <img 
                  src={`https://picsum.photos/seed/blog-${index}/800/450`} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <div className="flex items-center gap-3 text-xs text-foreground/50 mb-4 uppercase tracking-widest">
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                {post.title}
              </h4>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6 line-clamp-2">
                Explore the latest trends and deep dives into modern software engineering, AI, and scalable architectures.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all">
                Read More <ArrowRight className="w-4 h-4 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
