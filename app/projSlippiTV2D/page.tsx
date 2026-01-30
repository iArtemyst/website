import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodeSlippiTVApp } from "../projSlippiTVApp/slippitv-app-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpCode = '../grpProjects2D';

export default function RenderProjCodeSlippiTV() {
  return (
    <>
        <NavUI />
        <ProjectCodeSlippiTVApp />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}