import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border border-border bg-background overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-foreground/90">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
