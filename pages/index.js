import React, { useState, useEffect } from "react";
import HeroComponent from "@/components/HeroComponent";
import NavbarComponent from "@/components/NavbarComponent";
import InvitationComponent from "@/components/InvitationComponent";
import Head from "next/head";

export default function Home() {
  const [isInvitationVisible, setIsInvitationVisible] = useState(true);
  const [countdown, setCountdown] = useState("");
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  useEffect(() => {
    if (isSongPlaying) {
      const audioElement = new Audio("/marryyou.mp3");
      audioElement.loop = true;
      audioElement.play();
    }
  }, [isSongPlaying]);

  const handleOpenInvitation = () => {
    setIsInvitationVisible(false);
    setIsSongPlaying(true);
  };

  return (
    <>
      <Head>
        <title>Yenti & Fahli Wedding Invitation</title>
        <meta name="description" content="Undangan Pernikahan Yenti & Fahli" />
        <meta name="keywords" content="Invitation, Wedding, Wedding Invitation" />
      </Head>
      {isInvitationVisible ? (
        <div className={`invitation-wrapper ${isInvitationVisible ? "fade-in" : ""}`}>
          <InvitationComponent onOpenInvitation={handleOpenInvitation} />
        </div>
      ) : (
        <>
          <HeroComponent />
          <NavbarComponent />
        </>
      )}
    </>
  );
}
