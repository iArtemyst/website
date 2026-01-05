import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { FoxsukeVideoPage } from "./foxsukevideo-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrp3D = '../grpProjects3D';

export default function RenderProjFoxsukeVideo() {
  return (
    <>
        <NavUI />
        <FoxsukeVideoPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
        <SiteFooter />
    </>
  )
}