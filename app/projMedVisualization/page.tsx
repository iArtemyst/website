import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectMedVisualization from "./medVisualization-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrp3D = '../grpProjects3D';


function RenderProjMedAnim() {
  return (
    <>
        <NavUI />
        <ProjectMedVisualization />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
        <SiteFooter />
    </>
  )
}

export default RenderProjMedAnim;