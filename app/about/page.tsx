import React from "react";
import "../globals/globals.css";

import NewAboutPage from "./about-design";
import AboutSection from "./section-about";
import SiteHeader from "../globals/nav-ui";
import * as backButtons from "@/app/globals/back-buttons";

const linkHome = './';

export default function RenderAboutPage() {
  return (
    <>
      <SiteHeader />
      <AboutSection />
      {/* <NewAboutPage /> */}
      <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </>
  )
}
