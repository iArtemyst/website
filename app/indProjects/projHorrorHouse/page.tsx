import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import HorrorHousesPage from "./horrorhouses-proj-pg";

const linkGrp3D = '../grpProjects3D';


function RenderProjHorrorHouse() {
  return (
    <>
        <NavUI />
        <HorrorHousesPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}

export default RenderProjHorrorHouse;