import React from "react";
import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import ProjectConsumerMotion from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjConsumerViz() {
  return (
    <>
        <SiteHeader />
        <ProjectConsumerMotion />
        <backButtons.BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}