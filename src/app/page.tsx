import TypingTest from "@/components/TypingTest";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-mono dark:bg-zinc-950 transition-colors duration-300">
      <main className="flex-1 w-full flex flex-col items-center justify-center p-4">
        <TypingTest />
      </main>
      <Footer />
    </div>
  );
}

