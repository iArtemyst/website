import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import SiteHeader from "@/app/globals/nav-ui";
import IslandCityPage from "./proj-layout";

const linkGrpGame = '../grpProjectsGame';

function RenderProjIslandCity() {
  return (
    <>
        <SiteHeader />
        <IslandCityPage />
        <backButtons.BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjIslandCity;