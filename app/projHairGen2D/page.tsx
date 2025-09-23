import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { StubbleGenPage } from "../projHairGenerator/hairgen-proj-pg";

const linkGrpGame = '../grpProjects2D';

export default function RenderProjHairGeneratorPage() {
  return (
    <>
        <NavUI />
        <StubbleGenPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to 2D"/>
    </>
  )
}