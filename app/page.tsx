import "./globals/globals.css";

import { NavUI } from "@/app/globals/nav-ui";
import LandingMain from "./landing-main";

export default async function RenderLandingPage() {
  return (
    <>
      <NavUI />
      <LandingMain />
    </>
  )
}
