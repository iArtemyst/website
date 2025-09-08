import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodeBingoBoard } from "./bingoboard-proj-pg";

const linkGrpCode = '../grpProjectsCode';

export default function RenderProjCodeBingoBoard() {
  return (
    <>
        <NavUI />
        <ProjectCodeBingoBoard />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Code"/>
    </>
  )
}