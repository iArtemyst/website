import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectProcMatPage from "./proj-layout";

const linkGrpGame = '../grpProjectsGame';



function RenderProjProcMat() {
  return (
    <>
        <SiteHeader />
        <ProjectProcMatPage />
        <backButtons.BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjProcMat;