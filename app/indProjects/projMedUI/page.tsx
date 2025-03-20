import React from "react";
import "@/app/globals/globals.css"

import SiteHeader from "@/app/globals/nav-ui";
import ProjectMedMotion from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjMedMotion() {
  return (
    <>
        <SiteHeader />
        <ProjectMedMotion />
        <backButtons.BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}