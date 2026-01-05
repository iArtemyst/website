import "./globals/globals.css";

import { NavUI } from "@/app/globals/nav-ui";
import LandingMain from "./landing-main";
import { SiteFooter } from "@/app/globals/footer";

export default async function RenderLandingPage() {
  return (
    <>
      <NavUI />
      <LandingMain />
      <SiteFooter />
    </>
  )
}
