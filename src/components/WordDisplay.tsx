import { useEffect, useRef, useState } from "react";

interface WordDisplayProps {
  words: string[];
  userInput: string;
  isFinished: boolean;
  isFocused: boolean;
}

export default function WordDisplay({
  words,
  userInput,
  isFinished,
  isFocused
}: WordDisplayProps) {
  const [translateY, setTranslateY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  let charIndexCounter = 0;

  // Determine which word we are currently on
  const wordsTyped = userInput.split(" ");
  const currentWordIndex = wordsTyped.length - 1;

  useEffect(() => {
    if (isFinished) {
      setTranslateY(0);
      return;
    }

    const currentWordEl = wordRefs.current[currentWordIndex];
    if (currentWordEl && containerRef.current) {
      const wordOffsetTop = currentWordEl.offsetTop;
      const wordHeight = currentWordEl.offsetHeight;
      
      // Calculate how many lines are above. 
      // We want the current word to be on the second line.
      // Line 1: y = 0
      // Line 2: y = wordHeight
      // So if currentWord is on line N (offsetTop), we want to scroll so that 
      // its top is at wordHeight.
      // translateY = wordHeight - wordOffsetTop
      
      // Only scroll if we are past the first line
      if (wordOffsetTop > wordHeight) {
        setTranslateY(wordHeight - wordOffsetTop);
      } else {
        setTranslateY(0);
      }
    }
  }, [currentWordIndex, isFinished]);

  return (
    <div 
      ref={containerRef}
      className={`relative mb-12 h-[145px] text-2xl leading-[1.6] tracking-wide select-none transition-opacity duration-500 overflow-hidden ${isFinished ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}
    >
      {!isFocused && !isFinished && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-[2px]">
          <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">Click to focus</p>
        </div>
      )}
      <div 
        className="flex flex-wrap gap-x-[0.6em] transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        {words.map((word, wordIndex) => {
          const wordChars = word.split("");
          const isLastWord = wordIndex === words.length - 1;
          
          return (
            <div 
              key={wordIndex} 
              ref={el => { wordRefs.current[wordIndex] = el; }}
              className="flex whitespace-nowrap"
            >
              {wordChars.map((char) => {
                const globalIndex = charIndexCounter++;
                let color = "text-zinc-500";
                const isCurrent = globalIndex === userInput.length;
                
                if (globalIndex < userInput.length) {
                  color = userInput[globalIndex] === char ? "text-zinc-900 dark:text-zinc-100" : "text-red-500";
                }

                return (
                  <span key={globalIndex} className={`relative ${color} transition-colors duration-100`}>
                    {isCurrent && !isFinished && (
                      <span className="absolute -left-[1px] top-1 h-6 w-[2px] animate-pulse bg-yellow-500" />
                    )}
                    {char}
                  </span>
                );
              })}
              
              {!isLastWord && (() => {
                const globalIndex = charIndexCounter++;
                let color = "text-zinc-500";
                const isCurrent = globalIndex === userInput.length;
                const char = " ";
                
                if (globalIndex < userInput.length) {
                  color = userInput[globalIndex] === char ? "text-zinc-900 dark:text-zinc-100" : "bg-red-500/30 text-red-500";
                }

                return (
                  <span key={globalIndex} className={`relative ${color} transition-colors duration-100 w-[0.25em]`}>
                    {isCurrent && !isFinished && (
                      <span className="absolute -left-[1px] top-1 h-6 w-[2px] animate-pulse bg-yellow-500" />
                    )}
                    &nbsp;
                  </span>
                );
              })()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
