import { Shield, Github, Globe, Facebook } from "lucide-react";

const navLinks = [
  { label: "Hacker Hats", href: "#hacker-hats" },
  { label: "Careers", href: "#careers" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Quiz", href: "#quiz" },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/justine.sestina", label: "Facebook" },
  { icon: <Globe className="w-5 h-5" />, href: "https://juztinesestina.vercel.app/", label: "Portfolio" },
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/justinesestina", label: "GitHub" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-display text-sm font-bold text-gradient-cyber">CyberVerse Explorer</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              An educational platform designed for students curious about cybersecurity. Learn about hacker types, explore career paths, and take your first step into digital security.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-8">
          <div className="p-4 rounded-lg bg-muted/30 border border-border mb-6">
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              ⚠️ <strong className="text-foreground">Educational Disclaimer:</strong> This website is created for educational and awareness purposes only. It does not promote illegal hacking. All code examples are simplified and safe for learning.
            </p>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Created by <span className="text-foreground font-medium">Justine Ragaza</span> · © {new Date().getFullYear()} CyberVerse Explorer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
