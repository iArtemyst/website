import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { SasukeModelPage } from "./sasukemodel-proj-pg";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjSasukeModel() {
  return (
    <>
        <NavUI />
        <SasukeModelPage />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}