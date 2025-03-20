import React from "react";
import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import ProjectVFXPage from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpGame = '../grpProjectsGame';

function RenderProjVFX() {
  return (
    <>
        <SiteHeader />
        <ProjectVFXPage />
        <backButtons.BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjVFX;