import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectDartPubPage from "../projDartPub/dartpub-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrp3D = '../grpProjects3D';

function RenderProjDartPub() {
  return (
    <>
        <NavUI />
        <ProjectDartPubPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
        <SiteFooter />
    </>
  )
}

export default RenderProjDartPub;