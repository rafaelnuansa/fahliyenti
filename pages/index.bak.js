import React, { useState, useEffect } from "react";
import HeroComponent from "@/components/HeroComponent";
import NavbarComponent from "@/components/NavbarComponent";
import InvitationComponent from "@/components/InvitationComponent";
import Head from "next/head";
import TimeComponent from "@/components/TimeComponent";
import LocationComponent from "@/components/LocationComponent";
import ConfirmComponent from "@/components/ConfirmComponent";
import WishComponent from "@/components/WishComponent";
import Layout from "@/components/Layout";
import GreetingComponent from "@/components/GreetingComponent";

export default function Home() {
  const [isInvitationVisible, setIsInvitationVisible] = useState(true);
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
    setIsInvitationVisible(false);
  };
 
  return (
    <>
      {isInvitationVisible && (
        <div
          className={`invitation-wrapper ${
            isInvitationOpened ? "swipe-up" : ""
          }`}
        >
          <InvitationComponent onOpenInvitation={handleOpenInvitation} />
        </div>
      )}
      {!isInvitationVisible && (
        <Layout>
          <HeroComponent />
          <GreetingComponent />
          <TimeComponent />
          <LocationComponent />
          <ConfirmComponent />
          <WishComponent />
        </Layout>
      )}
    </>
  );
}
