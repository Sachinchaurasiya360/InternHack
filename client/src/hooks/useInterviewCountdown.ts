import { useCallback, useEffect, useState } from "react";

export function useInterviewCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
  } | null>(null);

  const calculate = useCallback(() => {
    const difference =
      new Date(targetDate).getTime() - Date.now();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
    };
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculate());

    const interval = setInterval(() => {
      const updated = calculate();

      setTimeLeft(updated);

      if (!updated) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [calculate]);

  return timeLeft;
}
