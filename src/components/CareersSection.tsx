import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, TrendingUp, DollarSign, ShieldCheck, KeyRound, MonitorDot, ScanSearch, Bug, Fingerprint, Trophy, Siren, Settings, Globe, type LucideIcon } from "lucide-react";
import { careers, type Career } from "@/data/careers";
import CodeBlock from "./CodeBlock";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck, KeyRound, MonitorDot, ScanSearch, Bug, Fingerprint, Trophy, Siren, Settings, Globe,
};

const CareerIcon = ({ name, color }: { name: string; color: string }) => {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return (
    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
      <Icon className="w-5 h-5" style={{ color }} />
    </div>
  );
};

const CareersSection = () => {
  const [selected, setSelected] = useState<Career | null>(null);

  return (
    <section id="careers" className="py-20 px-4 bg-gradient-cyber">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-cyber">Cybersecurity Careers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore 10 exciting career paths in cybersecurity and find your perfect fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {careers.map((career, i) => (
            <motion.button
              key={career.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(career)}
              className="card-cyber text-left cursor-pointer"
            >
              <CareerIcon name={career.icon} color={career.iconColor} />
              <h3 className="text-base font-bold text-foreground mb-2">{career.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{career.shortDesc}</p>
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
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <CareerIcon name={selected.icon} color={selected.iconColor} />
                <h3 className="text-2xl font-bold text-foreground">{selected.title}</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  {selected.description.map((p, i) => (
                    <p key={i} className="text-sm text-foreground/80 leading-relaxed">{p}</p>
                  ))}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" /> Daily Responsibilities
                  </h4>
                  <ul className="space-y-1">
                    {selected.dailyResponsibilities.map((r, i) => (
                      <li key={i} className="text-sm text-muted-foreground">▸ {r}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.technicalSkills.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.softSkills.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" /> Career Path
                    </h4>
                    <p className="text-xs text-muted-foreground">{selected.careerPath[0]}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" /> Salary Range
                    </h4>
                    <p className="text-xs text-muted-foreground">{selected.salaryRange}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Code Example</h4>
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

export default CareersSection;
