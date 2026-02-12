import { motion } from "framer-motion";

const HeroSection = () => {
  const handleExplore = () => {
    document.querySelector("#hacker-hats")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-float-slower" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(185 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
