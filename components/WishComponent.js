import React, { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import WishCard from "./WishCard";

export default function WishComponent() {
  const initialWishLimit = 3; // Batas awal jumlah wish yang ditampilkan
  const [wishLimit, setWishLimit] = useState(initialWishLimit); // State untuk melacak jumlah wish yang ditampilkan
  const [showForm, setShowForm] = useState(false); // State untuk menampilkan/menyembunyikan form
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Daftar wish
  const wishes = [
    {
      name: "Dickun Cobul",
      message: "Congratulations on your wedding!",
      createdAt: "2023-05-20",
    },
    {
      name: "Ghayung Segs",
      message: "Wishing you a lifetime of love and happiness.",
      createdAt: "2023-05-22",
    },
    {
      name: "Krayyyyy",
      message: "May your journey together be filled with joy and harmony.",
      createdAt: "2023-05-25",
    },
    {
      name: "Sanbasori",
      message: "Sansss.",
      createdAt: "2023-05-25",
    },
  ];

  // Fungsi untuk menampilkan lebih banyak wish
  const loadMoreWishes = () => {
    setWishLimit(wishLimit + initialWishLimit);
  };

  // Fungsi untuk membuat wish baru
  const makeWish = () => {
    setShowForm(true);
  };

  // Fungsi untuk menghandle perubahan nilai input nama
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Fungsi untuk menghandle perubahan nilai input pesan
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Fungsi untuk mengirim wish
  const sendWish = (event) => {
    event.preventDefault();
    // Implementasi logika untuk mengirim wish baru
    console.log("Send Wish:", name, message);
    // Reset nilai input
    setName("");
    setMessage("");
    // Sembunyikan form
    setShowForm(false);
  };

  return (
    <section
      id="wish"
      className="bg-gray-100 px-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Latest Wishes &amp; Comments
        </h2>
        <div className="grid gap-6">
          {wishes.slice(0, wishLimit).map((wish, index) => (
            <WishCard
              key={index}
              name={wish.name}
              message={wish.message}
              createdAt={wish.createdAt}
              data-aos="fade-left"
              data-aos-duration="1000"
            />
          ))}
        </div>
        {wishLimit < wishes.length && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              onClick={loadMoreWishes}
            >
              Load More
            </button>
          </div>
        )}
        <div className="flex justify-center mt-8">
          {!showForm ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              onClick={makeWish}
            >
              <RiPencilLine className="mr-2" />
              Make a Wish
            </button>
          ) : (
            <form onSubmit={sendWish} className="max-w mx-auto">
            <div className="grid flex-col items-center">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleNameChange}
                className="bg-white border-2 border-gray-300 rounded py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={handleMessageChange}
                className="bg-white border-2 border-gray-300 rounded py-2 px-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
          
          )}
        </div>
      </div>
    </section>
  );
}
