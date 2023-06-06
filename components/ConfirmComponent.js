import React from 'react';

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
        <h2 className="sm:text-5xl md:text-6xl font-bold mb-4 handwritting text-center">Konfirmasi Kehadiran</h2>
        <div className="flex justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleConfirmationYenti}
          >
            Kabari Yenti
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleConfirmationFahli}
          >
            Kabari Fahli
          </button>
        </div>
      </div>

      
    </div>
  );
}
