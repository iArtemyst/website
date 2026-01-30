import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodePortfolio } from "../projPortfolioSite/portfoliosite-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpCode = '../grpProjects2D';

export default function RenderProjCodePortfolio() {
  return (
    <>
        <NavUI />
        <ProjectCodePortfolio />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}