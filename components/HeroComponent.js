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
    <div>
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="mb-5 flex justify-center">
            <div className="relative rounded-full px-3 py-1 font-bold leading-6 text-gray-600">
              Hello, We Are Getting Married
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-8xl font-bold tracking-tight text-gray-800 handwritting">
              Yenti & Fahli
            </h1>
            <p className="text-lg leading-8 text-gray-600 font-bold">
              Senin, 14 Agustus 2023
            </p>
            <div className="text-4xl mt-4 flex items-center text-gray-600 justify-center font-bold gap-x-6">
              {countdown}
            </div>
            <div className="text-xl mt-2 text-gray-600 font-bold">
              Hari Jam Menit Detik
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
