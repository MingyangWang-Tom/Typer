"use client";

import { useState, useEffect } from "react";
import TermsModal from "./TermsModal";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to avoid "set-state-in-effect" lint error
    // and ensure it runs after the first render
    const frame = requestAnimationFrame(() => {
      setCurrentYear(new Date().getFullYear());
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  
  return (
    <footer className="w-full py-8 text-zinc-500 text-xs font-mono relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-6">
          <a href="https://github.com/MingyangWang-Tom" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">Github</a>
          <button 
            onClick={() => setShowTerms(true)}
            className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
          >
            Terms
          </button>
        </div>
        <div>
          <span>&copy; {currentYear || "2026"}. All rights reserved.</span>
        </div>
      </div>

      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  );
}
