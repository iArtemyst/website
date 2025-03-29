import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { DDRMeleePage } from "./proj-layout";

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