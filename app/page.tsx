import React from "react";
import "./globals/globals.css";


import NavUI from "./globals/nav-ui";
import LandingMain from "./landing-main";

export default function RenderLandingPage() {
  return (
    <div>
      <NavUI />
      <LandingMain />
    </div>
  )
}
