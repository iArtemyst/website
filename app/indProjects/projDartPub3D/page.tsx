import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectDartPubPage from "../projDartPub/dartpub-proj-pg";

const linkGrp3D = '../grpProjects3D';

function RenderProjDartPub() {
  return (
    <>
        <NavUI />
        <ProjectDartPubPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjDartPub;