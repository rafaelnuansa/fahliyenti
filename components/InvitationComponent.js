import { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { FaEnvelopeOpenText } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InvitationComponent({ onOpenInvitation }) {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("to") || "Tamu";
    setGuestName(name);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-md py-10 h-full">
        <div
          className="w-100"
          data-aos="fade"
          data-aos-duration="1000"
        >
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_4p4x21lt.json"
            style={{ height: "auto", width: "100%" }}
          >
            <Controls visible={false} />
          </Player>
        </div>
        <div
          className="mb-5 flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="relative rounded-full px-3 font-bold leading-6 text-gray-600 text-uppercase text-sm sm:text-base">
            You are invited to the wedding of
          </div>
        </div>
        <div className="text-center">
          <h1
            className="text-7xl font-bold tracking-tight text-gray-800 handwritting"
            data-aos="fade"
            data-aos-duration="1000"
          >
            Yenti & Fahli
          </h1>
          <p
            className="text-base sm:text-lg leading-8 text-gray-600 font-bold handwritting"
            data-aos="fade"
            data-aos-duration="1000"
          >
            14 / 08 / 23
          </p>
          <p
            className="text-base sm:text-2xl text-gray-600 font-bold handwritting"
            data-aos="fade"
            data-aos-duration="1000"
          >
            to
          </p>
          <p
            className="text-3xl text-gray-600 font-bold handwritting"
            data-aos="fade"
            data-aos-duration="1000"
          >
            {guestName}
          </p>
          <button
            className="mx-auto bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-3 px-5 rounded-lg mt-4 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-zinc-500 flex items-center"
            onClick={onOpenInvitation}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <FaEnvelopeOpenText className="mr-2" />
            <span>Buka Undangan</span>
          </button>
        </div>
      </div>
    </>
  );
}
