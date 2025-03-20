import React from "react";
import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import Project1Page from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpMotion = '../grpProjectsMotion';



function RenderProjDDRMelee() {
  return (
    <>
        <SiteHeader />
        <Project1Page />
        <backButtons.BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}

export default RenderProjDDRMelee;