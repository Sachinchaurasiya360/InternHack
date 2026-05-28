import { useEffect, useState } from "react";

function calculateTimeLeft(targetDate: string) {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
  };
}

export function useInterviewCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetDate));

    const interval = setInterval(() => {
      const updated = calculateTimeLeft(targetDate);

      setTimeLeft(updated);

      if (!updated) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}