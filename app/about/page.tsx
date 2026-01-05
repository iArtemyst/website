import React from "react";
import "@/app/globals/globals.css";

import { AboutMePage } from "@/app/about/aboutme-pg";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { SiteFooter } from "@/app/globals/footer";

const linkHome = './';

export default function RenderAboutPage() {
  return (
    <>
      <NavUI />
      <AboutMePage />
      <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
      <SiteFooter />
    </>
  )
}
