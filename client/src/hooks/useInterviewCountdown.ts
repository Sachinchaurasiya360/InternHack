import { useEffect, useState, useCallback } from "react";

export function useInterviewCountdown(targetDate: string) {
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

  const [timeLeft, setTimeLeft] = useState(() => calculate());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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