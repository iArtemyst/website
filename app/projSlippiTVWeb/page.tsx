import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodeSlippiTVWeb } from "./slippitv-web-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpCode = '../grpProjectsDev';

export default function RenderProjCodeSlippiTV() {
  return (
    <>
        <NavUI />
        <ProjectCodeSlippiTVWeb />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Dev"/>
        <SiteFooter />
    </>
  )
}