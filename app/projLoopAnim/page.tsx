import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectLoopAnims from "./loopanim-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpMotion = '../grpProjects2D';

function RenderProjLoopAnim() {
  return (
    <>
        <NavUI />
        <ProjectLoopAnims />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}

export default RenderProjLoopAnim;