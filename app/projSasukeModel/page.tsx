import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { SasukeModelPage } from "./sasukemodel-proj-pg";

const linkGrp3D = '../grpProjects3D';

export default function RenderProjSasukeModel() {
  return (
    <>
        <NavUI />
        <SasukeModelPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}