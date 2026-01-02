interface HeaderProps {
  timeLeft: number;
  isFinished: boolean;
  startTime: number | null;
}

export default function Header({ timeLeft, isFinished, startTime }: HeaderProps) {
  return (
    <header className="mb-12 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-200">Typer</h1>
        {!isFinished && startTime && (
          <span className="text-2xl font-bold text-yellow-500 tabular-nums">{timeLeft}s</span>
        )}
      </div>
      {!isFinished && !startTime && (
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-sm font-medium">Click anywhere or start typing</span>
        </div>
      )}
    </header>
  );
}
