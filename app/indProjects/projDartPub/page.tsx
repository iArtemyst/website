import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectDartPubPage from "./proj-layout";

const linkGrpGame = '../grpProjectsGame';


function RenderProjDartPub() {
  return (
    <>
        <NavUI />
        <ProjectDartPubPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjDartPub;