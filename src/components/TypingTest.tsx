"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { generateWordsList } from "@/lib/words";
import Header from "./Header";
import Settings from "./Settings";
import WordDisplay from "./WordDisplay";
import Stats from "./Stats";

export default function TypingTest() {
  const [words, setWords] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timeLimit, setTimeLimit] = useState(30);
  const [isFinished, setIsFinished] = useState(false);
  const [totalChars, setTotalChars] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [errors, setErrors] = useState(0);
  const [isFocused, setIsFocused] = useState(true);
  
  // Settings
  const [capitalize, setCapitalize] = useState(false);
  const [punctuation, setPunctuation] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initGame = useCallback(() => {
    const newWords = generateWordsList(100, { capitalize, includePunctuation: punctuation });
    setWords(newWords);
    setUserInput("");
    setStartTime(null);
    setTimeLeft(timeLimit);
    setAccuracy(100);
    setWpm(0);
    setTotalChars(0);
    setCorrectChars(0);
    setErrors(0);
    setIsFinished(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => inputRef.current?.focus(), 0);
  }, [timeLimit, capitalize, punctuation]);

  useEffect(() => {
    initGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (startTime && !isFinished) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, isFinished]);

  // Update stats when finished
  useEffect(() => {
    if (isFinished) {
      const wpmVal = Math.round((correctChars / 5) / (timeLimit / 60));
      setWpm(wpmVal);
      setAccuracy(totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100);
    }
  }, [isFinished, correctChars, totalChars, timeLimit]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (isFinished) return;

    if (!startTime) {
      setStartTime(Date.now());
    }

    // Logic for tracking errors and total chars correctly
    const targetText = words.join(" ");

    if (value.length < userInput.length) {
      // Backspace handled by React state update
    } else {
      const lastChar = value[value.length - 1];
      const targetChar = targetText[value.length - 1];
      if (lastChar !== targetChar) {
        setErrors(prev => prev + 1);
      }
    }

    setUserInput(value);
    
    // Generate more words if we're approaching the end
    if (value.length > targetText.length * 0.7) {
      const moreWords = generateWordsList(50, { capitalize, includePunctuation: punctuation });
      setWords(prev => [...prev, ...moreWords]);
    }

    let correct = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] === targetText[i]) {
        correct++;
      }
    }
    setCorrectChars(correct);
    setTotalChars(Math.max(totalChars, value.length));

    // End if reached the end of text
    if (value.length === targetText.length) {
      setIsFinished(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        initGame();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [initGame]);

  return (
    <div className="w-full max-w-4xl flex flex-col items-center relative">
      <Header timeLeft={timeLeft} isFinished={isFinished} startTime={startTime} />
      
      {!isFinished && (
        <div className="mb-8 relative z-20">
          <Settings 
            timeLimit={timeLimit} 
            setTimeLimit={setTimeLimit} 
            capitalize={capitalize}
            setCapitalize={setCapitalize}
            punctuation={punctuation}
            setPunctuation={setPunctuation}
            disabled={startTime !== null}
          />
        </div>
      )}

      {isFinished ? (
        <div className="relative z-30">
          <Stats 
            wpm={wpm} 
            accuracy={accuracy} 
            totalChars={totalChars} 
            correctChars={correctChars} 
            errors={errors}
            timeTaken={timeLimit - timeLeft}
            onRestart={initGame}
          />
        </div>
      ) : (
        <div onClick={() => inputRef.current?.focus()} className="w-full">
          <WordDisplay 
            words={words} 
            userInput={userInput} 
            isFinished={isFinished} 
            isFocused={isFocused} 
          />
        </div>
      )}

      {!isFinished && (
        <div className="mt-8 flex flex-col items-center gap-6 relative z-30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              initGame();
            }}
            className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all cursor-pointer"
          >
            <div className="rounded-lg p-2 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Restart (Esc)</span>
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        type="text"
        className="absolute inset-0 opacity-0 cursor-default z-10"
        value={userInput}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus
        disabled={isFinished}
      />
    </div>
  );
}
