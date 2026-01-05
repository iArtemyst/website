import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectLoopAnims from "../projLoopAnim/loopanim-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrp3D = '../grpProjects3D';

function RenderProjLoopAnim() {
  return (
    <>
        <NavUI />
        <ProjectLoopAnims />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
        <SiteFooter />
    </>
  )
}

export default RenderProjLoopAnim;