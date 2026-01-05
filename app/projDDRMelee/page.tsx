import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { DDRMeleePage } from "./ddrmelee-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpMotion = '../grpProjects2D';

function RenderProjDDRMelee() {
  return (
    <>
        <NavUI />
        <DDRMeleePage />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to 2D"/>
        <SiteFooter />
    </>
  )
}

export default RenderProjDDRMelee;