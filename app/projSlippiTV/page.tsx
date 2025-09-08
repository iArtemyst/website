import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodeSlippiTV } from "./slippitv-proj-pg";

const linkGrpCode = '../grpProjectsCode';

export default function RenderProjCodeSlippiTV() {
  return (
    <>
        <NavUI />
        <ProjectCodeSlippiTV />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Code"/>
    </>
  )
}