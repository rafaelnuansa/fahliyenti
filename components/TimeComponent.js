import Image from "next/image";
import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
export default function TimeComponent() {

  return (
    <>
      <div
        className="slots"
        style={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: "center",
          justifyContent: "center"
        }}
      ></div>

      <div
        id="schedule"
        className="relative overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center tracking-tight text-pink-800 sm:text-4xl md:text-4xl">
            Waktu Pernikahan
          </h2>
          <div className="max-w-3xl mx-auto mt-16 relative">
            <div className="absolute transform -translate-x-1/2 bg-gray-400 h-full"></div>
            <div className="mt-6 text-gray-300">

              <div className="flex justify-center">

                <>
                  <Image
                    src="/ring.png"
                    alt="Ring"
                    width={100}
                    height={100}
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center">
                  <h3 className="text-8xl font-bold mr-4 text-gray-600">14</h3>
                  <AiOutlineCalendar className="h-8 w-8 text-gray-600" />
                </div>
              </div>

              <div className="flex justify-center text-center">
                <span className="text-gray-600 font-bold text-3xl">Agustus, 2023</span>
              </div>
              <div className="flex justify-center text-center mt-1">
              <AiOutlineClockCircle className="mt-1 mr-1" color="gray-600"/>  <span className="text-gray-600 font-bold">Akad Nikah: 08.00 WIB</span>
              </div>
              <div className="flex justify-center text-center">
              <AiOutlineClockCircle className="mt-1 mr-1" color="gray"/> <span className="text-gray-600 font-bold">Resepsi: 11.00 WIB - Selesai</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
