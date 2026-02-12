import whiteHat from "@/assets/white-hat.png";
import blackHat from "@/assets/black-hat.png";
import greyHat from "@/assets/grey-hat.png";
import blueHat from "@/assets/blue-hat.png";
import redHat from "@/assets/red-hat.png";
import greenHat from "@/assets/green-hat.png";

export interface HackerHat {
  id: string;
  name: string;
  color: string;
  glowClass: string;
  image: string;
  shortDesc: string;
  description: string[];
  responsibilities: string[];
  ethicalPosition: string;
  ethicalLabel: "Legal" | "Illegal" | "Mixed";
  skills: string[];
  difficulty: number; // 1-5
  code: string;
  codeLanguage: string;
  codeExplanation: string;
}

export const hackerHats: HackerHat[] = [
  {
    id: "white",
    name: "White Hat Hacker",
    color: "#00e5ff",
    glowClass: "shadow-[0_0_25px_hsl(185_100%_50%/0.4)]",
    image: whiteHat,
    shortDesc: "Ethical hackers who protect systems and find vulnerabilities legally.",
    description: [
      "White Hat Hackers are cybersecurity professionals who use their skills to protect organizations from cyber threats. They are the 'good guys' of the hacking world, working within legal boundaries to identify and fix security vulnerabilities before malicious hackers can exploit them.",
      "These ethical hackers are often employed by companies, government agencies, or work as independent consultants. They perform authorized penetration testing, security audits, and vulnerability assessments to strengthen an organization's security posture.",
      "White Hat Hackers follow a strict code of ethics and always obtain proper authorization before testing any system. Their work is crucial in today's digital landscape, where cyber threats are constantly evolving."
    ],
    responsibilities: [
      "Conduct authorized penetration testing",
      "Perform security audits and assessments",
      "Report vulnerabilities to organizations",
      "Develop security patches and solutions",
      "Train staff on security best practices"
    ],
    ethicalPosition: "Fully legal and authorized. White Hat Hackers always work with permission and follow ethical guidelines.",
    ethicalLabel: "Legal",
    skills: ["Network Security", "Penetration Testing", "Programming", "Cryptography", "Risk Assessment"],
    difficulty: 4,
    code: `function checkPasswordStrength(password) {
  if (password.length < 8) {
    return "Weak Password";
  }
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  
  const score = [hasUpper, hasLower, hasNumber, hasSpecial]
    .filter(Boolean).length;
  
  if (score >= 4) return "Very Strong Password";
  if (score >= 3) return "Strong Password";
  if (score >= 2) return "Medium Password";
  return "Weak Password";
}`,
    codeLanguage: "javascript",
    codeExplanation: "This function evaluates password strength by checking for length, uppercase/lowercase letters, numbers, and special characters. It's a common security tool that White Hat Hackers use to help users create more secure passwords. The function returns a rating based on how many criteria the password meets."
  },
  {
    id: "black",
    name: "Black Hat Hacker",
    color: "#cc3333",
    glowClass: "shadow-[0_0_25px_hsl(0_70%_40%/0.4)]",
    image: blackHat,
    shortDesc: "Malicious hackers who exploit systems for personal gain illegally.",
    description: [
      "Black Hat Hackers are individuals who break into computer systems without authorization for personal gain, financial profit, or to cause damage. Their activities are illegal and can result in severe criminal penalties including imprisonment.",
      "These hackers exploit vulnerabilities in software, networks, and human behavior to steal data, install malware, commit fraud, or disrupt services. They often operate in the dark web and use sophisticated techniques to avoid detection.",
      "Understanding Black Hat tactics is crucial for cybersecurity professionals. By studying how malicious hackers think and operate, defenders can better protect systems and anticipate potential attacks. This knowledge is used defensively, never offensively."
    ],
    responsibilities: [
      "Exploit system vulnerabilities (illegal)",
      "Steal sensitive data and credentials",
      "Deploy malware and ransomware",
      "Conduct phishing campaigns",
      "Sell exploits on the dark web"
    ],
    ethicalPosition: "Completely illegal. Black Hat activities violate computer crime laws worldwide and carry serious criminal penalties.",
    ethicalLabel: "Illegal",
    skills: ["Exploit Development", "Social Engineering", "Malware Creation", "Network Intrusion", "Anonymization"],
    difficulty: 5,
    code: `<!-- Phishing Awareness Example -->
<!-- This shows what a fake login page looks like -->
<!-- NEVER create real phishing pages! -->
<form action="#" onsubmit="return false;">
  <input type="text" placeholder="Username" />
  <input type="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>
<!-- Real phishing pages steal your data! -->
<!-- Always check the URL before logging in -->`,
    codeLanguage: "html",
    codeExplanation: "This is an educational example showing what a phishing form looks like. Real phishing pages are designed to trick users into entering their credentials on fake websites. Always verify the URL in your browser's address bar before entering any login information. This example is intentionally non-functional to prevent misuse."
  },
  {
    id: "grey",
    name: "Grey Hat Hacker",
    color: "#9ca3af",
    glowClass: "shadow-[0_0_25px_hsl(220_10%_60%/0.4)]",
    image: greyHat,
    shortDesc: "Hackers who find vulnerabilities without permission but don't exploit them maliciously.",
    description: [
      "Grey Hat Hackers operate in the moral middle ground between White and Black Hat Hackers. They may break into systems without authorization, but unlike Black Hats, they don't have malicious intent. Instead, they often report vulnerabilities to the affected organizations.",
      "While their intentions may be good, Grey Hat Hacking is still technically illegal because they access systems without permission. Some Grey Hats publicly disclose vulnerabilities to pressure companies into fixing them, which can be controversial.",
      "Many Grey Hats eventually transition to White Hat roles, using their skills in authorized settings. The cybersecurity community generally encourages Grey Hats to pursue legal avenues like bug bounty programs to channel their skills productively."
    ],
    responsibilities: [
      "Find vulnerabilities without authorization",
      "Report bugs to organizations (sometimes)",
      "Publicly disclose security flaws",
      "Test systems out of curiosity",
      "Advocate for better security practices"
    ],
    ethicalPosition: "Legally questionable. While intentions may be good, unauthorized access is still illegal in most jurisdictions.",
    ethicalLabel: "Mixed",
    skills: ["Vulnerability Research", "Web Application Testing", "Code Analysis", "Networking", "Problem Solving"],
    difficulty: 3,
    code: `function validateInput(input) {
  // Check for empty input
  if (input.trim() === "") {
    return "Input cannot be empty";
  }
  
  // Check for potentially dangerous characters
  const dangerous = /[<>'";&|]/.test(input);
  if (dangerous) {
    return "Suspicious characters detected!";
  }
  
  return "Valid input";
}`,
    codeLanguage: "javascript",
    codeExplanation: "This input validation function checks for empty strings and potentially dangerous characters that could be used in injection attacks. Grey Hat Hackers often discover that websites fail to validate user input properly, making them vulnerable to attacks like Cross-Site Scripting (XSS) or SQL Injection."
  },
  {
    id: "blue",
    name: "Blue Hat Hacker",
    color: "#3b82f6",
    glowClass: "shadow-[0_0_25px_hsl(210_100%_55%/0.4)]",
    image: blueHat,
    shortDesc: "External security testers invited to find bugs before product launches.",
    description: [
      "Blue Hat Hackers are external security professionals who are invited by organizations to test their systems before a product launch or major update. They act as a fresh set of eyes, finding vulnerabilities that internal teams might have missed.",
      "The term originated from Microsoft's 'BlueHat' security conferences, where external hackers were invited to test Microsoft products. Today, Blue Hat refers broadly to any authorized external tester who helps improve security.",
      "Blue Hat Hackers combine the curiosity of Grey Hats with the legal authorization of White Hats. They bring diverse perspectives and techniques that complement an organization's internal security team."
    ],
    responsibilities: [
      "Test systems before product launches",
      "Identify overlooked vulnerabilities",
      "Provide external security perspective",
      "Validate security patches and fixes",
      "Collaborate with internal security teams"
    ],
    ethicalPosition: "Legal when authorized. Blue Hat Hackers work with explicit permission from organizations.",
    ethicalLabel: "Legal",
    skills: ["Bug Hunting", "Software Testing", "Security Analysis", "Report Writing", "Authentication Testing"],
    difficulty: 3,
    code: `function validateLogin(username, password) {
  // Check for empty fields
  if (!username || !password) {
    return "Invalid login attempt";
  }
  
  // Check minimum length requirements
  if (username.length < 3 || password.length < 8) {
    return "Credentials too short";
  }
  
  // Sanitize input (prevent injection)
  const sanitized = username.replace(/[^a-zA-Z0-9]/g, "");
  
  return "Login data received for: " + sanitized;
}`,
    codeLanguage: "javascript",
    codeExplanation: "This login validation function demonstrates several security checks that Blue Hat Hackers test: verifying that fields aren't empty, enforcing minimum length requirements, and sanitizing input to prevent injection attacks. Blue Hats would test these functions to ensure they properly reject malicious inputs."
  },
  {
    id: "red",
    name: "Red Hat Hacker",
    color: "#ef4444",
    glowClass: "shadow-[0_0_25px_hsl(0_90%_55%/0.4)]",
    image: redHat,
    shortDesc: "Aggressive defenders who actively hunt and shut down Black Hat hackers.",
    description: [
      "Red Hat Hackers are the vigilantes of the cybersecurity world. Unlike White Hats who report vulnerabilities through proper channels, Red Hats take a more aggressive approach by actively seeking out and neutralizing Black Hat Hackers.",
      "They use similar techniques as Black Hats but direct them against malicious actors. This can include tracking down hackers, disrupting their infrastructure, or even launching counter-attacks to disable their systems.",
      "While their goal of stopping cybercrime is noble, their methods can sometimes cross legal boundaries. The cybersecurity community has mixed opinions about Red Hat tactics, as taking the law into one's own hands can have unintended consequences."
    ],
    responsibilities: [
      "Hunt down malicious hackers",
      "Disrupt Black Hat operations",
      "Monitor dark web activities",
      "Counter-attack malicious infrastructure",
      "Protect vulnerable targets proactively"
    ],
    ethicalPosition: "Legally complex. While intentions are protective, aggressive counter-hacking may violate laws.",
    ethicalLabel: "Mixed",
    skills: ["Offensive Security", "Threat Hunting", "Digital Forensics", "Counter-Intelligence", "Advanced Networking"],
    difficulty: 5,
    code: `function simulateScan() {
  const ports = [80, 443, 8080, 3000, 22, 21];
  const results = [];
  
  ports.forEach(port => {
    // Simulate checking if a port is open
    const isOpen = Math.random() > 0.5;
    const status = isOpen ? "OPEN" : "CLOSED";
    results.push({ port, status });
    console.log(\`Port \${port}: \${status}\`);
  });
  
  return results;
}`,
    codeLanguage: "javascript",
    codeExplanation: "This simulated port scanner demonstrates how security professionals check which ports are open on a system. In real life, open ports can be entry points for attackers. Red Hat Hackers use similar scanning techniques to identify vulnerable systems being targeted by Black Hats. This simulation uses random values instead of real network scanning."
  },
  {
    id: "green",
    name: "Green Hat Hacker",
    color: "#22c55e",
    glowClass: "shadow-[0_0_25px_hsl(140_80%_50%/0.4)]",
    image: greenHat,
    shortDesc: "Beginners eager to learn cybersecurity and grow their skills.",
    description: [
      "Green Hat Hackers are newcomers to the cybersecurity world who are eager to learn and develop their skills. They are beginners who are passionate about hacking and security but haven't yet developed advanced expertise.",
      "Unlike script kiddies who use tools without understanding them, Green Hats actively seek to learn the fundamentals. They study networking, programming, and security concepts to build a strong foundation for their future careers.",
      "The cybersecurity community generally welcomes Green Hats and encourages their growth through mentorship, online resources, and practice platforms like Capture The Flag (CTF) competitions. Many of today's top security professionals started as Green Hats."
    ],
    responsibilities: [
      "Learn cybersecurity fundamentals",
      "Practice on legal platforms (CTFs)",
      "Study networking and programming",
      "Follow security news and trends",
      "Build a portfolio of skills"
    ],
    ethicalPosition: "Legal when learning through proper channels. Green Hats should only practice on authorized platforms.",
    ethicalLabel: "Legal",
    skills: ["Basic Networking", "Linux Basics", "Scripting", "Security Concepts", "Continuous Learning"],
    difficulty: 1,
    code: `// Beginner Security Tips Checker
const securityTips = [
  "Use strong, unique passwords",
  "Enable two-factor authentication",
  "Keep software updated",
  "Don't click suspicious links",
  "Use a password manager"
];

securityTips.forEach((tip, index) => {
  console.log(\`Tip #\${index + 1}: \${tip}\`);
});

console.log("Stay safe online! 🔒");`,
    codeLanguage: "javascript",
    codeExplanation: "This simple script displays essential security tips that every beginner should follow. Green Hat Hackers start their journey by learning these fundamental practices. The code uses a basic array and loop — concepts that form the foundation of programming knowledge needed in cybersecurity."
  }
];
