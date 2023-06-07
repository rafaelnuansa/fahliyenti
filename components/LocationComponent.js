import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationComponent() {
  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/place/villa+27/@-6.661218,106.858498,16z/data=!4m6!3m5!1s0x2e69c8fbe689dd45:0xb66accd4c1e84eec!8m2!3d-6.6612181!4d106.8584977!16s%2Fg%2F11b8tws6wd?hl=id&entry=ttu",
      "_blank"
    );
  };

  return (
    <section id="location" className="bg-pink-100 py-8" data-aos="fade-up" data-aos-duration="1000">
    <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold text-center tracking-tight text-zinc-800 sm:text-4xl md:text-4xl">
        Lokasi Pernikahan
      </h2>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.253674163073!2d106.85630831429719!3d-6.661199067947791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c8fbe689dd45%3A0xb66accd4c1e84eec!2sVilla%2027!5e0!3m2!1sen!2sid!4v1563528797926!5m2!1sen!2sid"
          width="100%"
          height="450"
          className="rounded-lg"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex justify-center items-center mt-8" data-aos="zoom-in" data-aos-duration="1000">
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 flex items-center"
          onClick={openGoogleMaps}
        >
          <FaMapMarkerAlt className="mr-2" />
          <span>Menuju Lokasi</span>
        </button>
      </div>
    </div>
  </section>
  );
}
