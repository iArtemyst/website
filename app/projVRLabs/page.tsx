import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectVRLabs } from "./vrlabs-proj-pg";

const linkGrp3D = '../grpProjects3D';

export default function RenderProjVRLabEnvironments() {
  return (
    <>
        <NavUI />
        <ProjectVRLabs />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}