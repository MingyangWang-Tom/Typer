"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-md transition-all cursor-pointer ${theme === 'light' ? 'bg-yellow-500 text-zinc-900' : 'hover:text-zinc-800 dark:hover:text-zinc-200 text-zinc-500'}`}
        title="Light Mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-md transition-all cursor-pointer ${theme === 'dark' ? 'bg-yellow-500 text-zinc-900' : 'hover:text-zinc-800 dark:hover:text-zinc-200 text-zinc-500'}`}
        title="Dark Mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-md transition-all cursor-pointer ${theme === 'system' ? 'bg-yellow-500 text-zinc-900' : 'hover:text-zinc-800 dark:hover:text-zinc-200 text-zinc-500'}`}
        title="System Preference"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      </button>
    </div>
  );
}
