import React from "react";
import "../globals/globals.css";

import NewAboutPage from "./about-design";
import { AboutMePage } from "./aboutme-pg";
import { NavUI, BackButtonRSticky } from "../globals/nav-ui";

const linkHome = './';

export default function RenderAboutPage() {
  return (
    <>
      <NavUI />
      <AboutMePage />
      <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </>
  )
}
