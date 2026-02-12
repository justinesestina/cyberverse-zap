import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Network, Terminal, Code2, ShieldCheck, Compass } from "lucide-react";

const steps = [
  {
    icon: <Network className="w-5 h-5" />,
    title: "Networking Basics",
    topics: ["TCP/IP & OSI Model", "DNS, DHCP, HTTP/HTTPS", "Subnetting & IP Addressing", "Firewalls & Routers"],
    resources: ["CompTIA Network+", "Cisco Networking Academy", "Professor Messer (YouTube)"],
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "Linux Fundamentals",
    topics: ["Command Line Navigation", "File Permissions & Users", "Process Management", "Bash Scripting Basics"],
    resources: ["Linux Journey", "OverTheWire Bandit", "The Linux Command Line (book)"],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Programming",
    topics: ["Python for Security", "Bash Scripting", "JavaScript Basics", "SQL Fundamentals"],
    resources: ["Automate the Boring Stuff (Python)", "freeCodeCamp", "HackerRank"],
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Security Fundamentals",
    topics: ["CIA Triad", "Common Attack Types", "Cryptography Basics", "Security Frameworks"],
    resources: ["CompTIA Security+", "TryHackMe", "Cybrary"],
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "Choose Specialization",
    topics: ["Penetration Testing", "SOC / Blue Team", "Digital Forensics", "Cloud Security"],
    resources: ["HackTheBox", "SANS Training", "Bug Bounty Platforms (HackerOne)"],
  },
];

const RoadmapSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient-cyber">Career Roadmap</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow this 5-step path to launch your cybersecurity career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-primary font-mono">Step {i + 1}</span>
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 ml-14 mt-2 rounded-lg bg-muted/30 border border-border space-y-4">
                        <div>
                          <h4 className="text-xs font-semibold text-foreground mb-2">Key Topics</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.topics.map((t) => (
                              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-foreground mb-2">Beginner Resources</h4>
                          <ul className="space-y-1">
                            {step.resources.map((r) => (
                              <li key={r} className="text-xs text-muted-foreground">→ {r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
