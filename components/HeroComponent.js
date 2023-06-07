import React, { useState, useEffect } from "react";

export default function HeroComponent() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    // Waktu target countdown (9 pagi pada tanggal 14 Agustus 2023)
    const targetDate = new Date("2023-08-14T09:00:00");

    // Update countdown setiap detik
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      // Hitung sisa waktu dalam hari, jam, menit, dan detik
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Format countdown
      const countdownText = `${days}:${hours}:${minutes}:${seconds}`;

      // Set countdown pada state
      setCountdown(countdownText);

      // Hentikan interval jika countdown telah selesai
      if (timeRemaining < 0) {
        clearInterval(interval);
        setCountdown("Countdown Selesai");
      }
    }, 1000);

    // Hentikan interval saat komponen unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-container" id="welcome">
      <div
        className="hero-bg"
        style={{
          backgroundImage: "url('/bg1.jpg')",
        }}
      ></div>
      <div className="hero-content">
        <div className="mb-5 flex justify-center">
          <div className="relative text-white rounded-full px-3 py-1 font-bold leading-6 text-gray-600 animate-fade-in">
            Hello, We Are Getting Married
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-8xl text-white font-bold tracking-tight text-gray-800 handwritting animate-fade-in">
            Yenti & Fahli
          </h1>
          <p className="text-lg text-white leading-8 text-gray-600 font-bold animate-fade-in">
            Senin, 14 Agustus 2023
          </p>
          <div className="text-4xl text-white mt-4 flex items-center text-gray-600 justify-center font-bold gap-x-6 animate-pulse">
            {countdown}
          </div>
          <div className="text-xl text-white mt-2 text-gray-600 font-bold animate-fade-in">
            Hari Jam Menit Detik
          </div>
        </div>
      </div>
    </div>
  );
}
