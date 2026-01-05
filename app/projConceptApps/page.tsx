import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectConceptApps from "./conceptapps-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpMotion = '../grpProjects2D';

export default function RenderProjConceptApps() {
  return (
    <>
        <NavUI />
        <ProjectConceptApps />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}