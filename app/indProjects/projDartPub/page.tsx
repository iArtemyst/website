import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectDartPubPage from "./proj-layout";

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