import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectMedMotion from "./medui-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpMotion = '../grpProjects2D';

export default function RenderProjMedMotion() {
  return (
    <>
        <NavUI />
        <ProjectMedMotion />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}