import React from 'react';

const GreetingComponent = () => {
  return (
       <section className="bg-gray-800">
      <div
        className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-xl font-bold text-white mb-3"
              data-aos="fade-up"
              data-aos-duration="1000">
          Assalamu'alaikum Warahmatullahi Wabarakatuh.
        </h1>
        <p className="text-md sm:text-md lg:text-md font-medium text-white mb-12">
          Dengan memohon rahmat dan ridha Allah swt,
          <br />
          kami bermaksud mengundang Bapak/Ibu/Saudara/Saudari pada acara pernikahan kami
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-auto">
            <p className="text-3xl handwritting font-extrabold text-center tracking-tight text-white sm:text-5xl md:text-6xl mb-2">
              Yenti Siti Nuryaman, S.Ak
            </p>
            <p className="text-lg sm:text-xl lg:text-md font-medium text-white mb-6">
              Putri pertama dari Bapak Maman Suryaman dan Ibu Martiah
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <p className="text-3xl handwritting font-extrabold text-center tracking-tight text-white sm:text-5xl md:text-6xl mb-2">
              Muhammad Fahli Ahyani, S.TP
            </p>
            <p className="text-lg sm:text-xl lg:text-md font-medium text-white mb-6">
              Putra pertama dari Bapak Erwin Setiawan dan Ibu Susy Hambani
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreetingComponent;
