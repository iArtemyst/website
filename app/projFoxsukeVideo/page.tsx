import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { FoxsukeVideoPage } from "./foxsukevideo-proj-pg";

const linkGrpMotion = '../grpProjectsMotion';

export default function RenderProjFoxsukeVideo() {
  return (
    <>
        <NavUI />
        <FoxsukeVideoPage />
        <BackButtonRSticky backLink={linkGrpMotion} buttonText="Back to Motion UI"/>
    </>
  )
}