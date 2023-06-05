import React, { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function InvitationComponent({ onOpenInvitation }) {
  const [countdown, setCountdown] = useState("");
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    // Mendapatkan query string dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("to") || "Tamu";

    // Set nama tamu pada state
    setGuestName(name);
  }, []);

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
        setCountdown("Acara telah dimulai");
      }
    }, 1000);

    // Hentikan interval saat komponen unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="mx-auto max-w-md pt-0 py-10 h-full">
        <div className="w-100">
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_4p4x21lt.json"
            style={{ height: "auto", width: "100%" }}
          >
            <Controls visible={false} />
          </Player>
        </div>
        <div className="mb-5 flex justify-center">
          <div className="relative rounded-full px-3 font-bold leading-6 text-gray-600 text-uppercase text-sm sm:text-base">
            You are invited to the wedding of
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-8xl font-bold tracking-tight text-gray-800 handwritting">
            Yenti & Fahli
          </h1>
          <p className="text-base sm:text-lg leading-8 text-gray-600 font-bold handwritting">
            14 / 08 / 23
          </p>
          <p className="text-base sm:text-2xl text-gray-600 font-bold handwritting">
            to
          </p>
          <p className="text-3xl text-gray-600 font-bold handwritting">
            {guestName}
          </p>
          <button
            className="bg-slate-600 hover:bg-slate-800 mt-2 text-white font-bold py-2 px-4 rounded"
            onClick={onOpenInvitation}
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </>
  );
}
