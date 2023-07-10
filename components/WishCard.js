import React from 'react';
import { formatDistanceToNow, format } from 'date-fns';

export default function WishCard({ name, message, createdAt }) {
  const date = new Date(createdAt);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });
  const formattedDate = format(date, 'dd MMMM yyyy');
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4" data-aos="fade-up" data-aos-duration="1000">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{message}</p>
      <p className="text-gray-500 text-sm mt-2">{`${timeAgo} | ${formattedDate}`}</p>
    </div>
  );
}
