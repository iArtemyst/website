import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodeSlippiTVApp } from "./slippitv-app-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpCode = '../grpProjectsDev';

export default function RenderProjCodeSlippiTV() {
  return (
    <>
        <NavUI />
        <ProjectCodeSlippiTVApp />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Dev"/>
        <SiteFooter />
    </>
  )
}