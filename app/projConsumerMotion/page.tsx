import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectConsumerMotion from "./conmotion-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpMotion = '../grpProjects2D';

export default function RenderProjConsumerViz() {
  return (
    <>
        <NavUI />
        <ProjectConsumerMotion />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}