import React from "react";
import "../globals/globals.css";

import NewAboutPage from "./about-design";
import AboutSection from "./section-about";
import SiteHeader from "../globals/nav-ui";

function RenderAboutPage() {
  return (
    <>
      <SiteHeader />
      {/* <AboutSection /> */}
      <NewAboutPage />
    </>
  )
}

export default RenderAboutPage;