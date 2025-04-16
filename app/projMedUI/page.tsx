import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectMedMotion from "./medui-proj-pg";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjMedMotion() {
  return (
    <>
        <NavUI />
        <ProjectMedMotion />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}