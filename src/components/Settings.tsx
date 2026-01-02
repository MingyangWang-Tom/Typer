interface SettingsProps {
  timeLimit: number;
  setTimeLimit: (time: number) => void;
  capitalize: boolean;
  setCapitalize: (val: boolean) => void;
  punctuation: boolean;
  setPunctuation: (val: boolean) => void;
  disabled: boolean;
}

const TIME_OPTIONS = [30, 60, 180, 300];

export default function Settings({
  timeLimit,
  setTimeLimit,
  capitalize,
  setCapitalize,
  punctuation,
  setPunctuation,
  disabled
}: SettingsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500 transition-opacity duration-300 ${disabled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex items-center gap-4 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg p-1">
        {TIME_OPTIONS.map((time) => (
          <button
            key={time}
            onClick={() => setTimeLimit(time)}
            className={`px-3 py-1 rounded-md transition-all ${timeLimit === time ? 'bg-yellow-500 text-zinc-900' : 'hover:text-zinc-800 dark:hover:text-zinc-200'}`}
          >
            {time < 60 ? `${time}s` : `${time / 60}m`}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg p-1">
        <button
          onClick={() => setCapitalize(!capitalize)}
          className={`px-3 py-1 rounded-md transition-all ${capitalize ? 'bg-yellow-500 text-zinc-900' : 'hover:text-zinc-800 dark:hover:text-zinc-200'}`}
        >
          Capitalize
        </button>
        <button
          onClick={() => setPunctuation(!punctuation)}
          className={`px-3 py-1 rounded-md transition-all ${punctuation ? 'bg-yellow-500 text-zinc-900' : 'hover:text-zinc-800 dark:hover:text-zinc-200'}`}
        >
          Punctuation
        </button>
      </div>
    </div>
  );
}
