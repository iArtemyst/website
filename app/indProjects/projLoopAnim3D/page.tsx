import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectLoopAnims from "../projLoopAnim/loopanim-proj-pg";

const linkGrp3D = '../grpProjects3D';

function RenderProjLoopAnim() {
  return (
    <>
        <NavUI />
        <ProjectLoopAnims />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjLoopAnim;