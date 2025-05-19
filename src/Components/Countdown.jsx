import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => time.toString().padStart(2, "0");

  return (
    <div className="flex justify-start gap-4 text-white w-full relative">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((unit, idx) => (
        <div
          key={idx}
          className="bg-[#1f2937]  w-full py-4 rounded-md text-center shadow-md"
        >
          <div className="text-4xl font-bold text-blue-400">
            {formatTime(unit.value ?? 0)}
          </div>
          <div className="text-sm text-gray-400 mt-1">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
