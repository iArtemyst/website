import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectDartPubPage from "../projDartPub/proj-layout";

const linkGrp3D = '../grpProjects3D';

function RenderProjDartPub() {
  return (
    <>
        <SiteHeader />
        <ProjectDartPubPage />
        <backButtons.BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjDartPub;