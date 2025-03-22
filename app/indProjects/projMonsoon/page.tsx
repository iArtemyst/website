import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import ProjectMonsoonVermutPage from "./proj-layout";
const linkGrp3D = '../grpProjects3D';

import * as backButtons from "@/app/globals/back-buttons";

function RenderProjMonsoonVermut() {
  return (
    <>
        <SiteHeader />
        <ProjectMonsoonVermutPage />
        <backButtons.BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjMonsoonVermut;