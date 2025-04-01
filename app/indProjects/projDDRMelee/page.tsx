import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { DDRMeleePage } from "./ddrmelee-proj-pg";

const linkGrpMotion = '../grpProjectsMotion';



function RenderProjDDRMelee() {
  return (
    <>
        <NavUI />
        <DDRMeleePage />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}

export default RenderProjDDRMelee;