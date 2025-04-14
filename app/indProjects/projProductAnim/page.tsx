import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectProdAnimPage from "./prodanim-proj-pg";
const linkGrp3D = '../grpProjects3D';

export default function RenderProjMedAnim() {
  return (
    <>
        <NavUI />
        <ProjectProdAnimPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}
