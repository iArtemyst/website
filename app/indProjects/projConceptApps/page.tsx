import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectConceptApps from "./proj-layout";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjConceptApps() {
  return (
    <>
        <SiteHeader />
        <ProjectConceptApps />
        <backButtons.BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}