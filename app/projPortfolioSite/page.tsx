import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodePortfolio } from "./portfoliosite-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpCode = '../grpProjectsDev';

export default function RenderProjCodePortfolio() {
  return (
    <>
        <NavUI />
        <ProjectCodePortfolio />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Dev"/>
        <SiteFooter />
    </>
  )
}