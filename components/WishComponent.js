import React, { useState } from "react";

export default function WishComponent() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan nama dan pesan yang dikirim
    console.log("Nama:", name);
    console.log("Pesan:", message);
    // Reset form
    setName("");
    setMessage("");
  };

  return (
    <div className="w-100">

<div className="max-w-md mx-auto py-10 mb-10">
      <h2 className="sm:text-5xl md:text-6xl font-bold text-center mb-4 handwritting text-center">Form Ucapan</h2>
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nama
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Masukkan nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Pesan
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Tulis pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
