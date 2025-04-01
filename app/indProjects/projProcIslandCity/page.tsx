import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { IslandCityPage } from "./islandcity-proj-pg";

const linkGrpGame = '../grpProjectsGame';

function RenderProjIslandCity() {
  return (
    <>
        <NavUI />
        <IslandCityPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}

export default RenderProjIslandCity;