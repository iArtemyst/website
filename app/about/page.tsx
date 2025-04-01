import React from "react";
import "../globals/globals.css";

import NewAboutPage from "./about-design";
import AboutSection from "./section-about";
import { NavUI, BackButtonRSticky } from "../globals/nav-ui";

const linkHome = './';

export default function RenderAboutPage() {
  return (
    <>
      <NavUI />
      <AboutSection />
      <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </>
  )
}
