import React from "react";

export default function TimeComponent() {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl handwritting font-extrabold text-center tracking-tight text-white sm:text-5xl md:text-6xl">
          Waktu Pernikahan
        </h2>
        <div className="max-w-3xl mx-auto text-center flex flex-col sm:flex-row justify-between items-center">
          <div className="mt-6 text-xl font-semibold text-gray-300">
            <p>Senin, 14 Agustus 2023</p>
          </div>
          <div className="mt-6 text-xl font-semibold text-gray-300">
            <p>Akad Nikah: 09.00 WIB</p>
          </div>
          <div className="mt-6 text-xl font-semibold text-gray-300">
            <p>Resepsi: 11.00 - 15.00 WIB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
