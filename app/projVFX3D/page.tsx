import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectVFXPage from "../projVFX/vfx-proj-pg";

const linkGrp3D = '../grpProjects3D';

export default function RenderProjVFX() {
  return (
    <>
        <NavUI />
        <ProjectVFXPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}
