# Typer

A modern, minimalist typing practice website built with Next.js and Tailwind CSS, inspired by Monkeytype.

## Features

- **Dynamic Typing Engine**: Real-time feedback with character highlighting (correct/incorrect/extra).
- **Timed Modes**: Choose between 30s, 1m, 3m, and 5m practice sessions.
- **Advanced Typing Options**: Toggle capitalization and punctuation for more challenging practice.
- **Smooth Word Display**: Words wrap as complete units, and the display automatically scrolls to keep the active line centered.
- **Dynamic Word Generation**: Uses the `random-words` library to ensure fresh content every session, with automatic appending for long tests.
- **Performance Metrics**: Detailed post-test summary including:
    - **WPM** (Words Per Minute)
    - **Accuracy** (%)
    - **Raw Characters** (Correct/Total)
    - **Error Count**
- **Keyboard Shortcuts**: Press `Esc` at any time to quickly restart the test.
- **Responsive Design**: Minimalist aesthetic with full support for light and dark modes.
- **Focus Detection**: Automatically pauses or prompts to "Click to focus" if the input loses focus.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Word Generation**: [random-words](https://www.npmjs.com/package/random-words)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

© 2026 Typer. All rights reserved. See the Terms of Service in the application footer for more details.
