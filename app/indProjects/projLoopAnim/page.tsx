import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectLoopAnims from "./proj-layout";

const linkGrpMotion = '../grpProjectsMotion';

function RenderProjLoopAnim() {
  return (
    <>
        <SiteHeader />
        <ProjectLoopAnims />
        <backButtons.BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}

export default RenderProjLoopAnim;