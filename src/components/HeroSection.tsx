import { motion } from "framer-motion";

const HeroSection = () => {
  const handleExplore = () => {
    document.querySelector("#hacker-hats")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Deep layered gradient background */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 120% 80% at 50% 40%, hsl(200 80% 8%) 0%, hsl(220 60% 4%) 50%, hsl(240 40% 2%) 100%)"
      }} />

      {/* Subtle scanlines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(185 100% 50% / 0.08) 2px, hsl(185 100% 50% / 0.08) 3px)",
        backgroundSize: "100% 3px"
      }} />

      {/* Perspective grid floor */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(180deg, transparent 40%, hsl(185 100% 50% / 0.03) 100%)"
      }}>
        <div className="absolute bottom-0 left-0 right-0 h-[60%] opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(hsl(185 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom center",
        }} />
      </div>

      {/* Floating orbs - more realistic with varied sizes and colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full animate-float" style={{
          background: "radial-gradient(circle, hsl(185 100% 50% / 0.08) 0%, transparent 70%)"
        }} />
        <div className="absolute top-[20%] right-[5%] w-[600px] h-[600px] rounded-full animate-float-slow" style={{
          background: "radial-gradient(circle, hsl(270 100% 60% / 0.06) 0%, transparent 70%)"
        }} />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full animate-float-slower" style={{
          background: "radial-gradient(circle, hsl(330 100% 50% / 0.05) 0%, transparent 70%)"
        }} />
        <div className="absolute top-[50%] right-[30%] w-[300px] h-[300px] rounded-full animate-float" style={{
          background: "radial-gradient(circle, hsl(140 100% 50% / 0.04) 0%, transparent 70%)"
        }} />
      </div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Horizontal glow line */}
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-[0.08]" style={{
        background: "linear-gradient(90deg, transparent 0%, hsl(185 100% 50%) 30%, hsl(270 100% 60%) 50%, hsl(185 100% 50%) 70%, transparent 100%)"
      }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-cyber">Curious About</span>
            <br />
            <span className="text-foreground">Cybersecurity?</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Learn the difference between hacker types, explore real career paths,
          and take your first step into digital security.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExplore}
          className="px-8 py-3.5 rounded-lg font-semibold text-primary-foreground bg-primary glow-cyan transition-all hover:brightness-110"
        >
          Start Exploring
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
