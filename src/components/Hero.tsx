import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { geoOrthographic, geoPath } from 'd3-geo';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!svgRef.current) return;
// ... (rest of the useEffect remains same)

    const container = svgRef.current.parentElement;
    const width = container?.clientWidth || 600;
    const height = container?.clientWidth || 600;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const projection = geoOrthographic()
      .scale(width / 2.4)
      .translate([width / 2, height / 2])
      .clipAngle(90);

    const path = geoPath().projection(projection);

    // Create a sphere
    svg.selectAll('*').remove(); // Clear previous content
    svg.append('path')
      .datum({ type: 'Sphere' })
      .attr('class', 'sphere')
      .attr('d', path as any)
      .attr('fill', 'rgba(229, 9, 20, 0.05)')
      .attr('stroke', 'rgba(229, 9, 20, 0.2)')
      .attr('stroke-width', 1);

    // Create grid lines (graticule)
    const graticule = d3.geoGraticule();
    svg.append('path')
      .datum(graticule())
      .attr('class', 'graticule')
      .attr('d', path as any)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(0, 0, 0, 0.05)')
      .attr('stroke-width', 0.5);

    // Add some random "nodes" (tech icons/points)
    const points = Array.from({ length: 50 }, () => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [Math.random() * 360 - 180, Math.random() * 180 - 90]
      }
    }));

    const nodes = svg.selectAll('.node')
      .data(points)
      .enter()
      .append('path')
      .attr('class', 'node')
      .attr('d', path as any)
      .attr('fill', (d, i) => i % 3 === 0 ? '#E50914' : '#000000')
      .attr('opacity', 0.6);

    const timer = d3.timer((elapsed) => {
      projection.rotate([elapsed * 0.01, -15]);
      svg.selectAll('path').attr('d', path as any);
      
      // Pulse effect for nodes
      nodes.attr('opacity', (d, i) => 0.4 + Math.sin(elapsed * 0.002 + i) * 0.3);
    });

    return () => timer.stop();
  }, []);

  const techStack = [
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Go", logo: "https://cdn.simpleicons.org/go/00ADD8" },
    { name: "Java", logo: "https://cdn.simpleicons.org/java/ED8B00" },
    { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C" },
    { name: "Rust", logo: "https://cdn.simpleicons.org/rust/000000" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
    { name: "GCP", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
    { name: "Vue", logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="scanline absolute inset-0 z-10" />
      
      {/* Background Particles (Simplified) */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * 100 + '%'],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6 text-foreground"
          >
            ESYSTEM<span className="text-accent text-glow">LK</span>
          </motion.h1>
          <h2 className="text-base sm:text-xl md:text-2xl font-medium text-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
            {t.hero.subtitle} <span className="text-accent">{t.hero.accent}</span>
          </h2>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10 px-4 sm:px-0">
            {techStack.map((tech) => (
              <motion.div 
                key={tech.name} 
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/5 border border-black/10 rounded-xl transition-all hover:bg-accent/10 hover:border-accent/30 group relative cursor-pointer"
                title={tech.name}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain transition-all" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tech.name}&background=E50914&color=fff&size=32`;
                  }}
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-tighter">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 sm:px-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest red-glow cursor-pointer"
            >
              {t.hero.cta_portfolio}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-black/20 hover:border-accent text-foreground px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              {t.hero.cta_partner}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center w-full max-w-[300px] sm:max-w-[500px] mx-auto"
        >
          <div className="absolute w-full aspect-square bg-accent/5 rounded-full blur-[60px] sm:blur-[100px]" />
          <svg ref={svgRef} className="relative z-10 drop-shadow-[0_0_30px_rgba(229,9,20,0.1)] w-full h-auto" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
