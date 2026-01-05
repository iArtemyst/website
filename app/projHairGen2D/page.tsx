import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { StubbleGenPage } from "../projHairGenerator/hairgen-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrp2D = '../grpProjects2D';

export default function RenderProjHairGeneratorPage() {
  return (
    <>
        <NavUI />
        <StubbleGenPage />
        <BackButtonRSticky backLink={linkGrp2D} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}