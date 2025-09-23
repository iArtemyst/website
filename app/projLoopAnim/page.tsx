import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectLoopAnims from "./loopanim-proj-pg";

const linkGrpMotion = '../grpProjects2D';

function RenderProjLoopAnim() {
  return (
    <>
        <NavUI />
        <ProjectLoopAnims />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to 2D"/>
    </>
  )
}

export default RenderProjLoopAnim;