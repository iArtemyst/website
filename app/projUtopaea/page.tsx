import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectUtopaeaPage } from "./utopaea-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrpGame = '../grpProjects3D';

export default function RenderProjUtopaea() {
  return (
    <>
        <NavUI />
        <ProjectUtopaeaPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to 3D"/>
        <SiteFooter />
    </>
  )
}
