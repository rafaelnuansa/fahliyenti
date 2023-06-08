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
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gray-400 rounded-full flex items-center justify-center h-10 w-10">
                <AiOutlineCalendar size={20} className="text-white" />
              </div>
              <div className="ml-4">
                <span className="text-lg text-gray-400">14 Agustus 2023</span>
              </div>
            </div>
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gray-400 rounded-full flex items-center justify-center h-10 w-10">
                <AiOutlineClockCircle size={20} className="text-white" />
              </div>
              <div className="ml-4">
                <span className="text-lg text-gray-400">
                  Akad Nikah: 09.00 WIB
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-gray-400 rounded-full flex items-center justify-center h-10 w-10">
                <AiOutlineClockCircle size={20} className="text-white" />
              </div>
              <div className="ml-4">
                <span className="text-lg text-gray-400">
                  Resepsi: 11.00 - 15.00 WIB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
