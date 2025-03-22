import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectProcMatPage from "../projProcMat/proj-layout";

const linkGrp3D = '../grpProjects3D';

function RenderProjProcMat() {
  return (
    <>
        <SiteHeader />
        <ProjectProcMatPage />
        <backButtons.BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjProcMat;