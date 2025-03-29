import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectProcMatPage from "./proc-mats-proj-pg";

const linkGrpGame = '../grpProjectsGame';



function RenderProjProcMat() {
  return (
    <>
        <NavUI />
        <ProjectProcMatPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjProcMat;