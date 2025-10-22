import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import MakinoProjectPage from "./makino-proj-pg";
const linkGrp3D = '../grpProjects3D';

export default function RenderProjMedAnim() {
  return (
    <>
        <NavUI />
        <MakinoProjectPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
    </>
  )
}
