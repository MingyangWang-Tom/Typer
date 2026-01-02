"use client";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">Terms of Service</h2>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            <strong>1. Disclaimer of Liability</strong><br />
            Typer is provided &#34;as is&#34; without any warranties. We are not responsible for any damages or data loss resulting from the use of this website.
          </p>
          <p>
            <strong>2. Usage</strong><br />
            This is a free typing practice tool. Users are expected to use the service responsibly. We reserve the right to modify or terminate the service at any time.
          </p>
          <p>
            <strong>3. Privacy</strong><br />
            We do not collect personal data. Any typing statistics are stored locally in your browser.
          </p>
          <p>
            <strong>4. Accuracy of Content</strong><br />
            While we strive for accuracy, we do not guarantee that the words or metrics provided are error-free.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-yellow-500 text-zinc-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
