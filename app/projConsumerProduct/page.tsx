import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectPageConsumerProducts from "./consumerProduct-proj-pg";
const linkGrp3D = '../grpProjects3D';

export default function RenderProjMedAnim() {
  return (
    <>
        <NavUI />
        <ProjectPageConsumerProducts />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}
