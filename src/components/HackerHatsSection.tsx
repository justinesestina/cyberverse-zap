import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, ShieldAlert, ShieldQuestion } from "lucide-react";
import { hackerHats, type HackerHat } from "@/data/hackerHats";
import CodeBlock from "./CodeBlock";

const ethicalIcons = {
  Legal: <ShieldCheck className="w-4 h-4" />,
  Illegal: <ShieldAlert className="w-4 h-4" />,
  Mixed: <ShieldQuestion className="w-4 h-4" />,
};

const ethicalColors = {
  Legal: "text-cyber-green",
  Illegal: "text-cyber-red",
  Mixed: "text-cyber-grey",
};

const DifficultyBar = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`h-2 w-6 rounded-full ${i <= level ? "bg-primary" : "bg-muted"}`}
      />
    ))}
  </div>
);

const HackerHatsSection = () => {
  const [selected, setSelected] = useState<HackerHat | null>(null);

  return (
    <section id="hacker-hats" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-cyber">The 6 Hacker Hats</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not all hackers are the same. Discover the different types and what drives them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackerHats.map((hat, i) => (
            <motion.button
              key={hat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(hat)}
              className={`card-cyber text-left cursor-pointer group`}
              style={{ borderColor: `${hat.color}20` }}
            >
              <div className="flex flex-col items-center text-center">
                <img src={hat.image} alt={hat.name} className="w-32 h-32 object-contain mb-4 group-hover:scale-105 transition-transform" />
                <h3 className="text-lg font-bold mb-2" style={{ color: hat.color }}>{hat.name}</h3>
                <p className="text-sm text-muted-foreground">{hat.shortDesc}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 backdrop-blur-sm overflow-y-auto pt-20 pb-10 px-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-card border border-border rounded-2xl p-6 sm:p-8 relative"
              style={{ boxShadow: `0 0 40px ${selected.color}15` }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img src={selected.image} alt={selected.name} className="w-20 h-20 object-contain" />
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: selected.color }}>{selected.name}</h3>
                  <div className={`flex items-center gap-1.5 text-sm mt-1 ${ethicalColors[selected.ethicalLabel]}`}>
                    {ethicalIcons[selected.ethicalLabel]}
                    <span>{selected.ethicalLabel}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Description */}
                <div className="space-y-3">
                  {selected.description.map((p, i) => (
                    <p key={i} className="text-sm text-foreground/80 leading-relaxed">{p}</p>
                  ))}
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Main Responsibilities</h4>
                  <ul className="space-y-1">
                    {selected.responsibilities.map((r, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span style={{ color: selected.color }}>▸</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ethics */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-1">Ethical Position</h4>
                  <p className="text-sm text-muted-foreground">{selected.ethicalPosition}</p>
                </div>

                {/* Skills & Difficulty */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills Required</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.skills.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Difficulty Level</h4>
                    <DifficultyBar level={selected.difficulty} />
                  </div>
                </div>

                {/* Code */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Educational Code Example</h4>
                  <CodeBlock code={selected.code} language={selected.codeLanguage} />
                  <div className="mt-3 p-4 rounded-lg bg-muted/30 border border-border">
                    <h5 className="text-xs font-semibold text-primary mb-1">How This Code Works</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selected.codeExplanation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HackerHatsSection;
