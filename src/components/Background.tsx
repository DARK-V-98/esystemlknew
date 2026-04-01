import { motion, useScroll, useTransform } from 'motion/react';

export default function Background() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -1000]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -200]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Floating Shapes */}
      <motion.div
        style={{ 
          y: y1
        }}
        className="absolute top-[10%] left-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl"
      />
      
      <motion.div
        style={{ 
          y: y2
        }}
        className="absolute top-[40%] right-[5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <motion.div
        style={{ 
          y: y3
        }}
        className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/50" />
    </div>
  );
}
