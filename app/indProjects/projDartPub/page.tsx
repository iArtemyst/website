import React from "react";
import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import ProjectDartPubPage from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpGame = '../grpProjectsGame';


function RenderProjDartPub() {
  return (
    <>
        <SiteHeader />
        <ProjectDartPubPage />
        <backButtons.BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjDartPub;