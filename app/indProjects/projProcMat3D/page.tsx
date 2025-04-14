import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectProcMatPage from "../projProcMat/proc-mats-proj-pg";

const linkGrp3D = '../grpProjects3D';

export default function RenderProjProcMat() {
  return (
    <>
        <NavUI />
        <ProjectProcMatPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}
