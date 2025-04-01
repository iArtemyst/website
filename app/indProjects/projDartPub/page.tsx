import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectDartPubPage from "./dartpub-proj-pg";

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