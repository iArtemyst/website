import "@/app/globals/globals.css";

import SiteHeader from "@/app/globals/nav-ui";
import HorrorHousesPage from "./proj-layout";
const linkGrp3D = '../grpProjects3D';

import * as backButtons from "@/app/globals/back-buttons";

function RenderProjHorrorHouse() {
  return (
    <>
        <SiteHeader />
        <HorrorHousesPage />
        <backButtons.BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjHorrorHouse;