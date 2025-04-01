import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import StubbleGenPage from "@/app/indProjects/projHairGenerator/hairgen-proj-pg";

const linkGrpGame = '../grpProjectsGame';

export default function RenderProjHairGeneratorPage() {
  return (
    <>
        <NavUI />
        <StubbleGenPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}