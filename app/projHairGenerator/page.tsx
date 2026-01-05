import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { StubbleGenPage } from "./hairgen-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpGame = '../grpProjectsDev';

export default function RenderProjHairGeneratorPage() {
  return (
    <>
        <NavUI />
        <StubbleGenPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Dev"/>
        <SiteFooter />
    </>
  )
}