import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectMedAnims from "./proj-layout";

const linkGrp3D = '../grpProjects3D';


function RenderProjMedAnim() {
  return (
    <>
        <NavUI />
        <ProjectMedAnims />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjMedAnim;