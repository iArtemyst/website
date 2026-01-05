import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import HorrorHousesPage from "./horrorhouses-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrp3D = '../grpProjects3D';

function RenderProjHorrorHouse() {
  return (
    <>
        <NavUI />
        <HorrorHousesPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
        <SiteFooter />
    </>
  )
}

export default RenderProjHorrorHouse;