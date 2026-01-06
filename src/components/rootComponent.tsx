"use client";
import React, { FC } from "react";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import { usePathname } from "next/navigation";
import { LandingPageNavbar } from "./lp/landingPageNavbar";

type Props = {
  children: React.ReactNode;
};

const RootComponent: FC<Props> = ({ children }) => {
  const urlPath = usePathname();
  const isLanding = urlPath.includes("/lp");

  return (
    <div>
      {isLanding ? <LandingPageNavbar /> : <Navbar />}
      {children}
      {!isLanding && <Footer />}
    </div>
  );
};

export default RootComponent;
