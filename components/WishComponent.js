import React, { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import WishCard from "./WishCard";

export default function WishComponent() {
  const initialWishLimit = 3; // Batas awal jumlah wish yang ditampilkan
  const [wishLimit, setWishLimit] = useState(initialWishLimit); // State untuk melacak jumlah wish yang ditampilkan
  const [showForm, setShowForm] = useState(false); // State untuk menampilkan/menyembunyikan form

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
        {!showForm && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              onClick={makeWish}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <RiPencilLine className="mr-2" />
              Make a Wish
            </button>
          </div>
        )}
        {showForm && (
          <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-duration="1000">
            {/* Tambahkan dialog form di sini */}
            <form>
              {/* Isi dengan elemen input, textarea, dll. sesuai kebutuhan */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
