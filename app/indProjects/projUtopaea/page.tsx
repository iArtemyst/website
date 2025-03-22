import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import ProjectUtopaeaPage from "./proj-layout";

const linkGrpGame = '../grpProjectsGame';

function RenderProjUtopaea() {
  return (
    <>
        <SiteHeader />
        <ProjectUtopaeaPage />
        <backButtons.BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjUtopaea;