import React, { useEffect } from "react";
import Head from "next/head";
import NavbarComponent from "./NavbarComponent";
import AudioPlayer from "./AudioPlayer";

export default function Layout({ children }) {
  useEffect(() => {
    // Mulai pemutaran audio saat halaman dimuat
    const audioPlayer = document.getElementById("audio-player");
    if (audioPlayer) {
      audioPlayer.play();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Yenti & Fahli Wedding Invitation</title>
        <meta name="description" content="Undangan Pernikahan Yenti & Fahli" />
        <meta name="keywords" content="Invitation, Wedding, Wedding Invitation" />
      </Head>
      <main>{children}</main>
      <NavbarComponent />
      <AudioPlayer autoPlay={true} />
      
    </>
  );
}
