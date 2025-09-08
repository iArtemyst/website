import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { FoxsukePage } from "./foxsuke-proj-pg";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjFoxsuke() {
  return (
    <>
        <NavUI />
        <FoxsukePage />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}