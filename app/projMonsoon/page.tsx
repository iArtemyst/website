import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectMonsoonVermutPage } from "./monver-proj-pg";

const linkGrp3D = '../grpProjects3D';

export default function RenderProjMonsoonVermut() {
  return (
    <>
        <NavUI />
        <ProjectMonsoonVermutPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}
