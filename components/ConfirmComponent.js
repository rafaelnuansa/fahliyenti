import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';

export default function ConfirmComponent() {
  const sendMessage = (phoneNumber, message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}&source=&data=`;
    window.open(whatsappLink, '_blank');
  };

  const handleConfirmationYenti = () => {
    const phoneNumber = '6285158733013';
    const message = 'Halo Yenti, saya akan datang di acara pernikahan';
    sendMessage(phoneNumber, message);
  };

  const handleConfirmationFahli = () => {
    const phoneNumber = '6285959586322';
    const message = 'Halo Fahli, saya akan datang di acara pernikahan';
    sendMessage(phoneNumber, message);
  };

  return (
    <div className="flex justify-center items-center h-60">
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Konfirmasi Kehadiran</h2>
        <div className="flex justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 flex items-center"
            onClick={handleConfirmationYenti}
          >
            <AiOutlineMessage className="mr-2" />
            Kabari Yenti
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
            onClick={handleConfirmationFahli}
          >
            <AiOutlineMessage className="mr-2" />
            Kabari Fahli
          </button>
        </div>
      </div>
    </div>
  );
}
