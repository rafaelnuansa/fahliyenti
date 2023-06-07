import React from 'react';

export default function WishCard({ name, message }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4" data-aos="fade-up" data-aos-duration="1000">
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{message}</p>
  </div>
  );
}
