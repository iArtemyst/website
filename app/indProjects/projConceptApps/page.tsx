import React from "react";
import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import ProjectConceptApps from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjConceptApps() {
  return (
    <>
        <SiteHeader />
        <ProjectConceptApps />
        <backButtons.BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}