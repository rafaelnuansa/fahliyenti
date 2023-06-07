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
  return (
    <>
        <Layout>
          <HeroComponent />
          <GreetingComponent />
          <TimeComponent />
          <LocationComponent />
          <ConfirmComponent />
          <WishComponent />
        </Layout>
    
    </>
  );
}
