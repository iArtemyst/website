import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectDartPubPage from "./dartpub-proj-pg";

const linkGrpGame = '../grpProjects3D';


function RenderProjDartPub() {
  return (
    <>
        <NavUI />
        <ProjectDartPubPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjDartPub;