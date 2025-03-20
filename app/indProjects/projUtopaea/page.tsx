import React from "react";
import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import ProjectUtopaeaPage from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpGame = '../grpProjectsGame';

function RenderProjUtopaea() {
  return (
    <>
        <SiteHeader />
        <ProjectUtopaeaPage />
        <backButtons.BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjUtopaea;