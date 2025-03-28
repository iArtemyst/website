import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectVFXPage from "../projVFX/vfx-proj-pg";

const linkGrp3D = '../grpProjects3D';


function RenderProjVFX() {
  return (
    <>
        <SiteHeader />
        <ProjectVFXPage />
        <backButtons.BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjVFX;