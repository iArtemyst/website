import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectProdAnimPage from "./proj-layout";
const linkGrp3D = '../grpProjects3D';

import * as backButtons from "@/app/globals/back-buttons";

function RenderProjMedAnim() {
  return (
    <>
        <NavUI />
        <ProjectProdAnimPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjMedAnim;