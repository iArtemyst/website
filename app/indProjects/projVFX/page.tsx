import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectVFXPage from "./vfx-proj-pg";

const linkGrpGame = '../grpProjectsGame';

function RenderProjVFX() {
  return (
    <>
        <NavUI />
        <ProjectVFXPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjVFX;