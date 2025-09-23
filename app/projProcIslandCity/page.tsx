import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { IslandCityPage } from "./islandcity-proj-pg";

const linkGrpGame = '../grpProjects3D';

export default function RenderProjIslandCity() {
  return (
    <>
        <NavUI />
        <IslandCityPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to 3D"/>
    </>
  )
}
