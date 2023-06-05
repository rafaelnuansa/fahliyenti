import React, { useState } from "react";
import HeroComponent from "@/components/HeroComponent";
import NavbarComponent from "@/components/NavbarComponent";
import InvitationComponent from "@/components/InvitationComponent";

export default function Home() {
  const [isInvitationVisible, setIsInvitationVisible] = useState(true);
  const [countdown, setCountdown] = useState("");
  const handleOpenInvitation = () => {
    setIsInvitationVisible(false);
  };

  
  return (
    <>
      {isInvitationVisible ? (
        <InvitationComponent onOpenInvitation={handleOpenInvitation} />
      ) : (
        <>
          <HeroComponent />
          <NavbarComponent />
        </>
      )}
    </>
  );
}
