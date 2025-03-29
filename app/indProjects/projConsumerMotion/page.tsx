import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectConsumerMotion from "./proj-layout";

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