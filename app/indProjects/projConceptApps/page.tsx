import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectConceptApps from "./proj-layout";

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