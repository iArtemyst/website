import React from "react";
import "@/app/globals/globals.css"

import SiteHeader from "@/app/globals/nav-ui";
import ProjectLoopAnims from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpMotion = '../grpProjectsMotion';

function RenderProjLoopAnim() {
  return (
    <>
        <SiteHeader />
        <ProjectLoopAnims />
        <backButtons.BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}

export default RenderProjLoopAnim;