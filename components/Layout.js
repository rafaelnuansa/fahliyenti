import React, { useEffect } from "react";
import Head from "next/head";
import NavbarComponent from "./NavbarComponent";
import AudioPlayer from "./AudioPlayer";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  useEffect(() => {
    // Mulai pemutaran audio saat halaman dimuat
    const audioPlayer = document.getElementById("audio-player");
    if (audioPlayer) {
      audioPlayer.play();
    }
  }, []);

  const router = useRouter();
  const currentURL = router.asPath;

  return (
    <>
      <Head>
        <title>Yenti & Fahli Wedding Invitation</title>
        <meta name="description" content="Undangan Pernikahan Yenti & Fahli" />
        <meta name="keywords" content="Invitation, Wedding, Wedding Invitation" />
        <meta property="twitter:image" content="/bg1.jpg"></meta>
        <meta property="twitter:card" content="/bg1.jpg"></meta>
        <meta property="og:image" content="/bg1.jpg"></meta>
        <meta property="og:title" content="Undangan Pernikahan Yenti & Fahli"></meta>
        <meta property="og:description" content="Undangan Pernikahan Yenti & Fahli" />
        <meta property="og:url" content={currentURL}></meta>
      </Head>
      <main>{children}</main>
      <NavbarComponent />
      <AudioPlayer autoPlay={true} />
      
    </>
  );
}
