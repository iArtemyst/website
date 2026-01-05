import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectDartPubPage from "./dartpub-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpGame = '../grpProjects3D';

export default function RenderProjDartPub() {
  return (
    <>
        <NavUI />
        <ProjectDartPubPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to 3D"/>
        <SiteFooter />
    </>
  )
}