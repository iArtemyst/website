import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import StubbleGenPage from "./proj-layout";

const linkGrpGame = '../grpProjectsGame';

function RenderProjHairGeneratorPage() {
  return (
    <>
        <SiteHeader />
        <StubbleGenPage />
        <backButtons.BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjHairGeneratorPage;