import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectVFXPage from "./vfx-proj-pg";

const linkGrpGame = '../grpProjectsGame';

function RenderProjVFX() {
  return (
    <>
        <SiteHeader />
        <ProjectVFXPage />
        <backButtons.BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjVFX;