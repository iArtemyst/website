import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectProcMatPage from "./proc-mats-proj-pg";

const linkGrpGame = '../grpProjects3D';

export default function RenderProjProcMat() {
  return (
    <>
        <NavUI />
        <ProjectProcMatPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to 3D"/>
    </>
  )
}
