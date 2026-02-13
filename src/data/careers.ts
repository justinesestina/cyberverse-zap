export interface Career {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  shortDesc: string;
  description: string[];
  dailyResponsibilities: string[];
  technicalSkills: string[];
  softSkills: string[];
  careerPath: string[];
  salaryRange: string;
  code: string;
  codeLanguage: string;
  codeExplanation: string;
}

export const careers: Career[] = [
  {
    id: "ethical-hacker",
    title: "Ethical Hacker",
    icon: "ShieldCheck",
    iconColor: "#00e5ff",
    shortDesc: "Legally break into systems to find and fix vulnerabilities.",
    description: [
      "Ethical Hackers, also known as White Hat Hackers, are authorized security professionals who simulate cyberattacks to identify vulnerabilities in an organization's systems, networks, and applications.",
      "They use the same tools and techniques as malicious hackers but within legal boundaries and with proper authorization. Their findings help organizations strengthen their defenses before real attackers can exploit weaknesses.",
    ],
    dailyResponsibilities: ["Conduct penetration tests", "Write detailed vulnerability reports", "Research new attack vectors", "Collaborate with development teams", "Update security tools and methodologies"],
    technicalSkills: ["Penetration Testing", "Network Security", "Web App Security", "Python/Bash Scripting", "Vulnerability Assessment"],
    softSkills: ["Critical Thinking", "Communication", "Report Writing", "Ethical Judgment", "Persistence"],
    careerPath: ["Junior Pen Tester → Senior Pen Tester → Lead Ethical Hacker → Security Consultant → CISO"],
    salaryRange: "$70,000 – $150,000+",
    code: `// Simulated vulnerability check
function checkForCommonVulns(url) {
  const checks = [
    { name: "SQL Injection", pattern: "'" },
    { name: "XSS", pattern: "<script>" },
    { name: "Open Redirect", pattern: "redirect=" }
  ];
  checks.forEach(check => {
    console.log(\`Testing \${url} for \${check.name}...\`);
  });
  return "Scan complete - review results";
}`,
    codeLanguage: "javascript",
    codeExplanation: "This simulates how ethical hackers check for common web vulnerabilities. In real scenarios, they'd use specialized tools to test for SQL Injection, XSS, and other attack vectors."
  },
  {
    id: "pen-tester",
    title: "Penetration Tester",
    icon: "KeyRound",
    iconColor: "#f97316",
    shortDesc: "Test system defenses by simulating real-world attacks.",
    description: [
      "Penetration Testers specialize in actively testing an organization's security by attempting to breach their defenses. They simulate real-world attack scenarios to evaluate how well security measures hold up.",
      "Unlike general ethical hackers, pen testers follow structured methodologies like OWASP and PTES to ensure comprehensive testing coverage.",
    ],
    dailyResponsibilities: ["Plan and scope penetration tests", "Execute network and web app attacks", "Document findings with evidence", "Present results to stakeholders", "Retest after fixes are applied"],
    technicalSkills: ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "Exploit Development"],
    softSkills: ["Analytical Thinking", "Attention to Detail", "Client Management", "Creativity", "Time Management"],
    careerPath: ["Junior Pen Tester → Pen Tester → Senior Pen Tester → Red Team Lead → Security Director"],
    salaryRange: "$75,000 – $160,000+",
    code: `// Simulated network scan
function networkScan(target) {
  const commonPorts = [21, 22, 80, 443, 3306, 8080];
  const results = commonPorts.map(port => ({
    port,
    service: getServiceName(port),
    status: "checked"
  }));
  return results;
}
function getServiceName(port) {
  const services = { 21:"FTP", 22:"SSH", 80:"HTTP", 443:"HTTPS", 3306:"MySQL", 8080:"Proxy" };
  return services[port] || "Unknown";
}`,
    codeLanguage: "javascript",
    codeExplanation: "This demonstrates how pen testers map out services on a network by identifying which ports are open and what services run on them."
  },
  {
    id: "soc-analyst",
    title: "SOC Analyst",
    icon: "MonitorDot",
    iconColor: "#22c55e",
    shortDesc: "Monitor security systems and respond to threats in real-time.",
    description: [
      "Security Operations Center (SOC) Analysts are the front-line defenders who monitor an organization's security systems 24/7. They analyze alerts, investigate potential threats, and coordinate incident response.",
      "SOC Analysts work in shifts to ensure continuous monitoring and use SIEM tools to correlate events and detect patterns that indicate security incidents.",
    ],
    dailyResponsibilities: ["Monitor SIEM dashboards", "Analyze security alerts", "Triage incidents by severity", "Escalate critical threats", "Document incident timelines"],
    technicalSkills: ["SIEM (Splunk, QRadar)", "Log Analysis", "Threat Detection", "Incident Response", "Network Monitoring"],
    softSkills: ["Vigilance", "Quick Decision-Making", "Teamwork", "Stress Management", "Communication"],
    careerPath: ["SOC Tier 1 → SOC Tier 2 → SOC Tier 3 → SOC Manager → Security Director"],
    salaryRange: "$55,000 – $120,000+",
    code: `// Log filtering simulation
const logs = [
  "Login success - user: admin",
  "Failed login - user: unknown",
  "Unauthorized access attempt",
  "Login success - user: john",
  "Failed login - user: admin (3rd attempt)"
];
const suspicious = logs.filter(log =>
  log.includes("Failed") || log.includes("Unauthorized")
);
console.log("Suspicious activities:", suspicious);`,
    codeLanguage: "javascript",
    codeExplanation: "This simulates how SOC analysts filter through system logs to identify suspicious activities like failed logins and unauthorized access attempts."
  },
  {
    id: "security-analyst",
    title: "Security Analyst",
    icon: "ScanSearch",
    iconColor: "#c084fc",
    shortDesc: "Analyze threats and implement security measures to protect data.",
    description: [
      "Security Analysts assess an organization's security measures, identify weaknesses, and recommend improvements. They analyze security data, monitor systems for breaches, and develop policies to protect digital assets.",
      "They play a strategic role in cybersecurity by evaluating risks, implementing controls, and ensuring compliance with security standards and regulations.",
    ],
    dailyResponsibilities: ["Assess security risks", "Implement security controls", "Review access permissions", "Conduct security training", "Ensure compliance with standards"],
    technicalSkills: ["Risk Assessment", "Security Frameworks (NIST, ISO)", "Firewall Management", "Encryption", "Access Control"],
    softSkills: ["Analytical Skills", "Problem Solving", "Documentation", "Strategic Thinking", "Interpersonal Skills"],
    careerPath: ["Junior Analyst → Security Analyst → Senior Analyst → Security Architect → CISO"],
    salaryRange: "$60,000 – $130,000+",
    code: `// Access control check
function checkAccess(user, resource) {
  const permissions = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"]
  };
  const userPerms = permissions[user.role] || [];
  return userPerms.includes(resource.action)
    ? "Access granted" : "Access denied";
}`,
    codeLanguage: "javascript",
    codeExplanation: "This demonstrates role-based access control (RBAC), a fundamental security concept that analysts implement to ensure users only access what they're authorized to."
  },
  {
    id: "malware-analyst",
    title: "Malware Analyst",
    icon: "Bug",
    iconColor: "#4ade80",
    shortDesc: "Study malicious software to understand and neutralize threats.",
    description: [
      "Malware Analysts reverse-engineer malicious software to understand how it works, what it does, and how to detect and neutralize it. They study viruses, trojans, ransomware, and other forms of malware.",
      "Their analysis helps security teams develop signatures for antivirus software and creates intelligence reports that help organizations defend against specific threats.",
    ],
    dailyResponsibilities: ["Reverse-engineer malware samples", "Create detection signatures", "Write analysis reports", "Monitor malware trends", "Develop automated analysis tools"],
    technicalSkills: ["Reverse Engineering", "Assembly Language", "Sandbox Analysis", "IDA Pro/Ghidra", "Python Scripting"],
    softSkills: ["Patience", "Detail Orientation", "Research Skills", "Technical Writing", "Curiosity"],
    careerPath: ["Junior Analyst → Malware Analyst → Senior Analyst → Threat Research Lead → Director of Threat Intelligence"],
    salaryRange: "$75,000 – $145,000+",
    code: `// File behavior analysis (educational)
function analyzeFileBehavior(file) {
  const suspiciousPatterns = [
    "modifies system files",
    "creates registry entries",
    "connects to unknown servers",
    "encrypts user files"
  ];
  const found = suspiciousPatterns.filter(p =>
    file.behaviors.includes(p)
  );
  return found.length > 0
    ? "Potentially malicious: " + found.join(", ")
    : "No suspicious behavior detected";
}`,
    codeLanguage: "javascript",
    codeExplanation: "This simulates how malware analysts check file behaviors against known malicious patterns. Real analysis involves much deeper inspection using sandboxes and disassemblers."
  },
  {
    id: "forensics",
    title: "Digital Forensics Expert",
    icon: "Fingerprint",
    iconColor: "#94a3b8",
    shortDesc: "Investigate cybercrimes by analyzing digital evidence.",
    description: [
      "Digital Forensics Experts investigate cybercrimes by collecting, preserving, and analyzing digital evidence from computers, networks, and mobile devices. Their work often supports law enforcement investigations.",
      "They must follow strict chain-of-custody procedures to ensure evidence is admissible in court and use specialized tools to recover deleted files, trace network activity, and reconstruct timelines of events.",
    ],
    dailyResponsibilities: ["Collect and preserve digital evidence", "Analyze hard drives and memory", "Recover deleted files", "Create forensic reports", "Testify in court proceedings"],
    technicalSkills: ["EnCase/FTK", "Disk Imaging", "Memory Forensics", "Network Forensics", "Mobile Forensics"],
    softSkills: ["Attention to Detail", "Integrity", "Documentation", "Legal Knowledge", "Objectivity"],
    careerPath: ["Forensic Technician → Forensic Analyst → Senior Forensic Examiner → Forensic Lead → Director of Forensics"],
    salaryRange: "$65,000 – $135,000+",
    code: `// Evidence timeline reconstruction
function buildTimeline(events) {
  return events
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
    .map(event => ({
      time: event.timestamp,
      action: event.description,
      source: event.device
    }));
}`,
    codeLanguage: "javascript",
    codeExplanation: "This shows how forensic experts organize events chronologically to reconstruct what happened during a security incident. Timeline analysis is crucial for understanding attack sequences."
  },
  {
    id: "bug-bounty",
    title: "Bug Bounty Hunter",
    icon: "Trophy",
    iconColor: "#fbbf24",
    shortDesc: "Find and report security bugs in exchange for rewards.",
    description: [
      "Bug Bounty Hunters are independent security researchers who find vulnerabilities in companies' products and services in exchange for monetary rewards. Major companies like Google, Microsoft, and Meta run bug bounty programs.",
      "This career offers great flexibility — hunters can work from anywhere, choose which programs to participate in, and earn significant rewards for critical findings. Top hunters can earn six-figure incomes.",
    ],
    dailyResponsibilities: ["Research target applications", "Hunt for vulnerabilities", "Write detailed bug reports", "Communicate with security teams", "Stay updated on new techniques"],
    technicalSkills: ["Web Security", "API Testing", "Mobile App Security", "Recon Techniques", "Report Writing"],
    softSkills: ["Self-Motivation", "Persistence", "Communication", "Creative Thinking", "Patience"],
    careerPath: ["Beginner Hunter → Intermediate Hunter → Top Hunter → Security Consultant → Start Own Security Firm"],
    salaryRange: "$30,000 – $500,000+ (varies greatly)",
    code: `// Subdomain enumeration simulation
function findSubdomains(domain) {
  const common = ["www", "mail", "api", "dev", "staging", "admin"];
  const found = common.map(sub => \`\${sub}.\${domain}\`);
  console.log("Discovered subdomains:");
  found.forEach(s => console.log("  →", s));
  return found;
}`,
    codeLanguage: "javascript",
    codeExplanation: "This simulates subdomain enumeration, a common reconnaissance technique used by bug bounty hunters to discover hidden parts of a website that might have vulnerabilities."
  },
  {
    id: "incident-responder",
    title: "Incident Responder",
    icon: "Siren",
    iconColor: "#ef4444",
    shortDesc: "Respond to and manage active cybersecurity incidents.",
    description: [
      "Incident Responders are the cybersecurity equivalent of firefighters — they spring into action when a security breach occurs. They contain threats, minimize damage, and restore systems to normal operation.",
      "They work under high pressure and must quickly assess the scope of an incident, coordinate response efforts, and communicate with stakeholders about the situation and resolution progress.",
    ],
    dailyResponsibilities: ["Respond to security incidents", "Contain and eradicate threats", "Conduct post-incident analysis", "Update response playbooks", "Coordinate with teams during crises"],
    technicalSkills: ["Incident Handling", "Malware Removal", "Log Analysis", "Network Forensics", "Crisis Management"],
    softSkills: ["Calm Under Pressure", "Decision Making", "Leadership", "Communication", "Adaptability"],
    careerPath: ["Junior IR Analyst → Incident Responder → Senior IR → IR Manager → Director of Security Operations"],
    salaryRange: "$65,000 – $140,000+",
    code: `// Incident severity classifier
function classifyIncident(incident) {
  const severityMap = {
    "data_breach": "CRITICAL",
    "malware_detected": "HIGH",
    "failed_login_attempts": "MEDIUM",
    "policy_violation": "LOW"
  };
  const severity = severityMap[incident.type] || "UNKNOWN";
  console.log(\`Incident: \${incident.type} → Severity: \${severity}\`);
  return severity;
}`,
    codeLanguage: "javascript",
    codeExplanation: "This demonstrates how incident responders quickly classify security events by severity to prioritize their response efforts. Critical incidents get immediate attention while lower severity events are queued."
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    icon: "Settings",
    iconColor: "#38bdf8",
    shortDesc: "Design and build secure systems and security infrastructure.",
    description: [
      "Security Engineers design, build, and maintain an organization's security infrastructure. They implement security solutions, configure firewalls, set up intrusion detection systems, and automate security processes.",
      "They bridge the gap between security policy and technical implementation, ensuring that security measures are properly integrated into the organization's technology stack.",
    ],
    dailyResponsibilities: ["Design security architecture", "Configure security tools", "Automate security processes", "Manage firewalls and IDS/IPS", "Review and harden systems"],
    technicalSkills: ["Cloud Security (AWS/Azure)", "Infrastructure as Code", "CI/CD Security", "Container Security", "Automation"],
    softSkills: ["Systems Thinking", "Collaboration", "Project Management", "Innovation", "Mentoring"],
    careerPath: ["Junior Security Engineer → Security Engineer → Senior Engineer → Security Architect → VP of Security"],
    salaryRange: "$80,000 – $170,000+",
    code: `// Security headers checker
function checkSecurityHeaders(headers) {
  const required = [
    "Content-Security-Policy",
    "X-Frame-Options",
    "X-Content-Type-Options",
    "Strict-Transport-Security"
  ];
  const missing = required.filter(h => !headers[h]);
  if (missing.length > 0) {
    console.log("Missing headers:", missing);
  } else {
    console.log("All security headers present!");
  }
}`,
    codeLanguage: "javascript",
    codeExplanation: "This checks for essential HTTP security headers that help protect websites from common attacks. Security engineers ensure these headers are properly configured on all web servers."
  },
  {
    id: "threat-intel",
    title: "Threat Intelligence Analyst",
    icon: "Globe",
    iconColor: "#6366f1",
    shortDesc: "Gather and analyze data about emerging cyber threats.",
    description: [
      "Threat Intelligence Analysts collect, analyze, and disseminate information about current and emerging cyber threats. They monitor threat landscapes, track threat actor groups, and provide actionable intelligence to help organizations proactively defend against attacks.",
      "They combine technical analysis with geopolitical context to understand the motivations and capabilities of threat actors, helping organizations prioritize their security investments.",
    ],
    dailyResponsibilities: ["Monitor threat feeds", "Analyze threat actor TTPs", "Produce intelligence reports", "Brief leadership on threats", "Collaborate with industry peers"],
    technicalSkills: ["OSINT", "MITRE ATT&CK Framework", "Threat Modeling", "Data Analysis", "Dark Web Monitoring"],
    softSkills: ["Research Skills", "Critical Analysis", "Writing", "Presentation", "Strategic Thinking"],
    careerPath: ["Junior Analyst → Threat Intel Analyst → Senior Analyst → Threat Intel Manager → Director of Threat Intelligence"],
    salaryRange: "$70,000 – $150,000+",
    code: `// Threat indicator matching
function matchIndicators(networkTraffic, threatDB) {
  const matches = [];
  networkTraffic.forEach(connection => {
    const threat = threatDB.find(t => 
      t.indicator === connection.destination
    );
    if (threat) {
      matches.push({
        connection: connection.destination,
        threatType: threat.type,
        severity: threat.severity
      });
    }
  });
  return matches;
}`,
    codeLanguage: "javascript",
    codeExplanation: "This simulates how threat intelligence analysts match network traffic against known threat indicators (like malicious IP addresses or domains) to detect potential compromises."
  }
];
