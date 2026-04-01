import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { geoOrthographic, geoPath } from 'd3-geo';
import { useLanguage } from '../LanguageContext';

const skills = [
  { name: 'React', level: 95, logo: "https://cdn.simpleicons.org/react/61DAFB", years: 6 },
  { name: 'Next.js', level: 90, logo: "https://cdn.simpleicons.org/nextdotjs/000000", years: 4 },
  { name: 'TypeScript', level: 92, logo: "https://cdn.simpleicons.org/typescript/3178C6", years: 5 },
  { name: 'Node.js', level: 92, logo: "https://cdn.simpleicons.org/nodedotjs/339933", years: 5 },
  { name: 'PHP', level: 85, logo: "https://cdn.simpleicons.org/php/777BB4", years: 8 },
  { name: 'Laravel', level: 88, logo: "https://cdn.simpleicons.org/laravel/FF2D20", years: 7 },
  { name: 'Python', level: 80, logo: "https://cdn.simpleicons.org/python/3776AB", years: 5 },
  { name: 'Go', level: 75, logo: "https://cdn.simpleicons.org/go/00ADD8", years: 3 },
  { name: 'Java', level: 82, logo: "https://cdn.simpleicons.org/java/ED8B00", years: 6 },
  { name: 'Docker', level: 85, logo: "https://cdn.simpleicons.org/docker/2496ED", years: 4 },
  { name: 'AWS', level: 82, logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E", years: 4 },
  { name: 'Tailwind', level: 98, logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4", years: 5 },
];

export default function Skills() {
  const globeRef = useRef<SVGSVGElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!globeRef.current) return;

    const container = globeRef.current.parentElement;
    const width = container?.clientWidth || 400;
    const height = container?.clientWidth || 400;
    const svg = d3.select(globeRef.current)
      .attr('width', width)
      .attr('height', height);

    const projection = geoOrthographic()
      .scale(width / 3)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const path = geoPath().projection(projection);

    svg.selectAll('*').remove(); // Clear previous content
    svg.append('path')
      .datum({ type: 'Sphere' })
      .attr('d', path as any)
      .attr('fill', 'rgba(229, 9, 20, 0.03)')
      .attr('stroke', 'rgba(229, 9, 20, 0.2)')
      .attr('stroke-width', 1);

    const graticule = d3.geoGraticule();
    svg.append('path')
      .datum(graticule())
      .attr('d', path as any)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(0, 0, 0, 0.05)')
      .attr('stroke-width', 0.5);

    const timer = d3.timer((elapsed) => {
      projection.rotate([elapsed * 0.02, -10]);
      svg.selectAll('path').attr('d', path as any);
    });

    return () => timer.stop();
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
          <h2 className="text-sm font-mono text-accent tracking-[0.5em] uppercase mb-4">{t.skills.title}</h2>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-foreground">{t.skills.subtitle} <span className="text-accent italic">{t.skills.accent}</span></h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 w-full lg:w-auto flex-grow order-2 lg:order-1">
            {skills.slice(0, 6).map((skill, idx) => (
              <SkillCard key={skill.name} skill={skill} idx={idx} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative shrink-0 w-full max-w-[280px] sm:max-w-[400px] mx-auto order-1 lg:order-2 aspect-square"
          >
            <div className="absolute inset-0 bg-accent/5 blur-[60px] sm:blur-[80px] rounded-full" />
            <svg ref={globeRef} className="relative z-10 w-full h-full" />
            
            {/* Orbiting Icons Placeholder */}
            <div className="absolute inset-0 pointer-events-none">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15 + i * 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                  }}
                >
                  <motion.div 
                    className="absolute"
                    style={{ 
                      top: '50%', 
                      left: `${80 + (i * 1.5)}%`,
                    }}
                  >
                    <motion.img 
                      src={skill.logo} 
                      alt={skill.name} 
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 15 + i * 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="w-5 h-5 sm:w-7 sm:h-7 transition-all" 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill.name}&background=E50914&color=fff&size=32`;
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 w-full lg:w-auto flex-grow order-3">
            {skills.slice(6).map((skill, idx) => (
              <SkillCard key={skill.name} skill={skill} idx={idx + 6} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ skill, idx }: { skill: any, idx: number, key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05 }}
      whileHover={{ y: -5 }}
      className="glass p-6 rounded-2xl relative group flex items-center justify-center"
    >
      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
        <img 
          src={skill.logo} 
          alt={skill.name} 
          className="w-10 h-10" 
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${skill.name}&background=E50914&color=fff&size=32`;
          }}
        />
      </div>
    </motion.div>
  );
}
