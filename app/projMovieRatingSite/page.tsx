import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectCodeMovieRatingSite } from "./movierating-proj-pg";

const linkGrpCode = '../grpProjectsDev';

export default function RenderProjCodeMovieRatingSite() {
  return (
    <>
        <NavUI />
        <ProjectCodeMovieRatingSite />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Dev"/>
    </>
  )
}