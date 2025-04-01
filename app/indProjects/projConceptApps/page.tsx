import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectConceptApps from "./conceptapps-proj-pg";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjConceptApps() {
  return (
    <>
        <NavUI />
        <ProjectConceptApps />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}