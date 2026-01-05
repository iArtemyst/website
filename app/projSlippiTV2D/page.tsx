import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodeSlippiTV } from "../projSlippiTV/slippitv-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpCode = '../grpProjects2D';

export default function RenderProjCodeSlippiTV() {
  return (
    <>
        <NavUI />
        <ProjectCodeSlippiTV />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}