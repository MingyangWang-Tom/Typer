interface StatsProps {
  wpm: number;
  accuracy: number;
  totalChars: number;
  correctChars: number;
  errors: number;
  timeTaken: number;
  onRestart: () => void;
}

export default function Stats({
  wpm,
  accuracy,
  totalChars,
  correctChars,
  errors,
  timeTaken,
  onRestart
}: StatsProps) {
  return (
    <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">wpm</span>
          <span className="text-6xl font-black text-yellow-500 leading-none">{wpm}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">acc</span>
          <span className="text-6xl font-black text-yellow-500 leading-none">{accuracy}%</span>
        </div>
        <div className="flex flex-col justify-end">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">time</span>
          <span className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">{timeTaken}s</span>
        </div>
        <div className="flex flex-col justify-end">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">characters</span>
          <span className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            {correctChars}/{totalChars} ({errors} errors)
          </span>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRestart();
          }}
          className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
          Restart
        </button>
      </div>
    </div>
  );
}
