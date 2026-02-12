export interface QuizQuestion {
  question: string;
  options: { text: string; scores: Record<string, number> }[];
}

export interface QuizResult {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Do you prefer defending systems or testing them for weaknesses?",
    options: [
      { text: "Defending and monitoring systems", scores: { "soc-analyst": 2, "security-engineer": 2, "incident-responder": 1 } },
      { text: "Breaking in to find flaws", scores: { "ethical-hacker": 2, "pen-tester": 2, "bug-bounty": 1 } },
      { text: "Analyzing threats from a distance", scores: { "threat-intel": 2, "security-analyst": 1, "malware-analyst": 1 } },
      { text: "Investigating after an attack", scores: { "forensics": 2, "incident-responder": 1, "malware-analyst": 1 } },
    ]
  },
  {
    question: "What kind of work environment excites you most?",
    options: [
      { text: "A 24/7 operations center with real-time alerts", scores: { "soc-analyst": 2, "incident-responder": 2 } },
      { text: "Independent research and freelance work", scores: { "bug-bounty": 2, "threat-intel": 1, "malware-analyst": 1 } },
      { text: "Building and architecting secure systems", scores: { "security-engineer": 2, "security-analyst": 1 } },
      { text: "A forensic lab analyzing evidence", scores: { "forensics": 2, "malware-analyst": 1 } },
    ]
  },
  {
    question: "Which skill sounds most interesting to develop?",
    options: [
      { text: "Reverse engineering and code analysis", scores: { "malware-analyst": 2, "pen-tester": 1, "forensics": 1 } },
      { text: "Network monitoring and log analysis", scores: { "soc-analyst": 2, "security-analyst": 1, "incident-responder": 1 } },
      { text: "Exploit development and vulnerability research", scores: { "ethical-hacker": 2, "pen-tester": 2, "bug-bounty": 1 } },
      { text: "Security architecture and automation", scores: { "security-engineer": 2, "security-analyst": 1 } },
    ]
  },
  {
    question: "How do you handle high-pressure situations?",
    options: [
      { text: "I thrive under pressure and act fast", scores: { "incident-responder": 2, "soc-analyst": 1 } },
      { text: "I prefer methodical, careful analysis", scores: { "forensics": 2, "malware-analyst": 2, "threat-intel": 1 } },
      { text: "I enjoy the thrill of the hunt", scores: { "bug-bounty": 2, "ethical-hacker": 1, "pen-tester": 1 } },
      { text: "I like planning and preventing issues proactively", scores: { "security-engineer": 2, "security-analyst": 2 } },
    ]
  },
  {
    question: "What motivates you most in cybersecurity?",
    options: [
      { text: "Earning bounties and recognition", scores: { "bug-bounty": 2, "ethical-hacker": 1 } },
      { text: "Protecting people and organizations", scores: { "soc-analyst": 1, "security-engineer": 2, "incident-responder": 1 } },
      { text: "Solving complex technical puzzles", scores: { "malware-analyst": 2, "forensics": 1, "pen-tester": 1 } },
      { text: "Understanding the bigger threat landscape", scores: { "threat-intel": 2, "security-analyst": 1 } },
    ]
  }
];

export const quizResults: Record<string, QuizResult> = {
  "ethical-hacker": { id: "ethical-hacker", title: "Ethical Hacker", description: "You love finding weaknesses and thinking like an attacker — but for good! Your curiosity and persistence make you a natural at breaking into systems to make them stronger.", icon: "🛡️" },
  "pen-tester": { id: "pen-tester", title: "Penetration Tester", description: "You excel at structured attack simulations and love following methodologies to systematically uncover vulnerabilities. Your attention to detail makes you great at thorough testing.", icon: "🔓" },
  "soc-analyst": { id: "soc-analyst", title: "SOC Analyst", description: "You're alert, quick-thinking, and thrive in fast-paced environments. Monitoring systems and catching threats in real-time is your calling.", icon: "📊" },
  "security-analyst": { id: "security-analyst", title: "Security Analyst", description: "You think strategically about security and love analyzing risks to build stronger defenses. Your planning skills help organizations stay ahead of threats.", icon: "🔍" },
  "malware-analyst": { id: "malware-analyst", title: "Malware Analyst", description: "You're fascinated by how things work at a deep level. Reverse engineering malicious code and understanding threat mechanics is your superpower.", icon: "🦠" },
  "forensics": { id: "forensics", title: "Digital Forensics Expert", description: "You have a detective's mindset — patient, methodical, and detail-oriented. Uncovering digital evidence and piecing together what happened is your strength.", icon: "🔬" },
  "bug-bounty": { id: "bug-bounty", title: "Bug Bounty Hunter", description: "You're self-motivated, creative, and love the freedom of independent work. Finding bugs others miss and earning rewards drives you.", icon: "🏆" },
  "incident-responder": { id: "incident-responder", title: "Incident Responder", description: "You stay calm under fire and make quick decisions when it matters most. Leading the charge during security crises is where you shine.", icon: "🚨" },
  "security-engineer": { id: "security-engineer", title: "Security Engineer", description: "You love building things and making them secure from the ground up. Your technical skills and systems thinking make you excellent at security architecture.", icon: "⚙️" },
  "threat-intel": { id: "threat-intel", title: "Threat Intelligence Analyst", description: "You see the big picture and love connecting dots across the threat landscape. Your research and analytical skills help organizations stay ahead of emerging threats.", icon: "🌐" },
};
