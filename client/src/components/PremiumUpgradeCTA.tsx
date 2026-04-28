import { Link } from "react-router";
import { Crown, Zap, MessageCircle } from "lucide-react";

interface Props {
  feature: string;
}

export function PremiumUpgradeCTA({ feature }: Props) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mx-auto mb-6">
          <Crown className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">
          Unlock {feature}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Upgrade to Premium to access AI-powered job recommendations, smart matching, and conversational job discovery.
        </p>
        <div className="space-y-3 text-left mb-8">
          {[
            { icon: Zap, text: "Personalized job feed ranked by AI" },
            { icon: MessageCircle, text: "Chat with InternHack AI to find jobs" },
            { icon: Crown, text: "50 AI conversations per day" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
              <Icon className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
        <Link
          to="/student/checkout"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
        >
          <Crown className="w-4 h-4" />
          Upgrade to Premium
        </Link>
      </div>
    </div>
  );
}
