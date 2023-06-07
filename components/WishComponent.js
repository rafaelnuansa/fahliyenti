import React from "react";
import WishCard from "./WishCard";

export default function WishComponent() {
  const wishes = [
    { name: "Dickun Cobul", message: "Congratulations on your wedding!" },
    {
      name: "Ghayung Segs",
      message: "Wishing you a lifetime of love and happiness.",
    },
    {
      name: "Krayyyyy",
      message: "May your journey together be filled with joy and harmony.",
    },
  ];

  return (
    <section id="wish" className="bg-gray-100 px-5">
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Latests Wishes &amp; Comments
        </h2>
        <div className="grid gap-6">
          {wishes.map((wish, index) => (
            <WishCard key={index} name={wish.name} message={wish.message} />
          ))}
        </div>
      </div>
    </section>
  );
}
