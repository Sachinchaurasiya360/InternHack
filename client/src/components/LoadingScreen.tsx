import { useMemo } from "react";

const QUOTES = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Your career is a marathon, not a sprint.", author: "Unknown" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Your limitation - it's only your imagination.", author: "Unknown" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
];

export function LoadingScreen({ compact = false }: { compact?: boolean }) {
  const quote = useMemo(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]!, []);

  return (
    <div className={`flex flex-col items-center justify-center ${compact ? "py-16" : "min-h-[60vh]"} gap-5 px-4 animate-in fade-in duration-500`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-full border-3 border-indigo-100 dark:border-indigo-900/40" />
        <div className="absolute inset-0 w-10 h-10 rounded-full border-3 border-transparent border-t-indigo-600 dark:border-t-indigo-400 animate-spin" />
      </div>
      <div className="max-w-sm text-center space-y-1.5">
        <p className="text-sm italic text-gray-500 dark:text-gray-400 leading-relaxed">
          "{quote.text}"
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          - {quote.author}
        </p>
      </div>
    </div>
  );
}
