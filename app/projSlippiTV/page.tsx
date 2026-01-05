import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodeSlippiTV } from "./slippitv-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpCode = '../grpProjectsDev';

export default function RenderProjCodeSlippiTV() {
  return (
    <>
        <NavUI />
        <ProjectCodeSlippiTV />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Dev"/>
        <SiteFooter />
    </>
  )
}