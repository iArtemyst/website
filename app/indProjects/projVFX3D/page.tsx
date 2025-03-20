import React from "react";
import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import ProjectVFXPage from "../projVFX/proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrp3D = '../grpProjects3D';


function RenderProjVFX() {
  return (
    <>
        <SiteHeader />
        <ProjectVFXPage />
        <backButtons.BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjVFX;