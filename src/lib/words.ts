import { generate } from 'random-words';

export interface WordOptions {
  capitalize?: boolean;
  includePunctuation?: boolean;
}

export function generateWordsList(count: number = 50, options: WordOptions = {}): string[] {
  const words = generate(count) as string[];
  const punctuations = [".", ",", "!", "?", ";", ":"];

  return words.map((word, index) => {
    let processedWord = word;

    if (options.capitalize) {
      if (index === 0 || Math.random() > 0.5) {
        processedWord = processedWord.charAt(0).toUpperCase() + processedWord.slice(1);
      }
    }

    if (options.includePunctuation && Math.random() > 0.5) {
      const punc = punctuations[Math.floor(Math.random() * punctuations.length)];
      processedWord += punc;
    }

    return processedWord;
  });
}
