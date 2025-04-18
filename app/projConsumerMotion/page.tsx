import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectConsumerMotion from "./conmotion-proj-pg";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjConsumerViz() {
  return (
    <>
        <NavUI />
        <ProjectConsumerMotion />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}