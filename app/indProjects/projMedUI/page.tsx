import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectMedMotion from "./proj-layout";

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