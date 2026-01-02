import TypingTest from "@/components/TypingTest";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-mono transition-colors duration-300">
      <main className="flex-1 w-full flex flex-col items-center justify-center p-4 max-w-4xl mx-auto">
        <TypingTest />
      </main>
      <Footer />
    </div>
  );
}

