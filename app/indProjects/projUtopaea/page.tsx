import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectUtopaeaPage } from "./utopaea-proj-pg";

const linkGrpGame = '../grpProjectsGame';

export default function RenderProjUtopaea() {
  return (
    <>
        <NavUI />
        <ProjectUtopaeaPage />
        <BackButtonRSticky backLink={linkGrpGame} buttonText="Back to Game"/>
    </>
  )
}
