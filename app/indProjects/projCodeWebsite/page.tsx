import React from "react";
import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import ProjectCodePortfolio from "./proj-layout";
import * as backButtons from "@/app/globals/back-buttons";

const linkGrpCode = '../grpProjectsCode';

export default function RenderProjCodePortfolio() {
  return (
    <>
        <SiteHeader />
        <ProjectCodePortfolio />
        <backButtons.BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Code"/>
    </>
  )
}