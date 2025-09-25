import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectHackverse } from "./hackverse-proj-pg";

const linkGrp2D = '../grpProjects2D';

export default function RenderProjCodeBingoBoard() {
  return (
    <>
        <NavUI />
        <ProjectHackverse />
        <BackButtonRSticky backLink={linkGrp2D} buttonText="Back to 2D"/>
    </>
  )
}