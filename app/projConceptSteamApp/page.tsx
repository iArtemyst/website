import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectConceptSteamRedesign } from "./steamredesign-proj-pg";

const linkGrp2D = '../grpProjects2D';

export default function RenderProjConceptSteamRedesign() {
  return (
    <>
        <NavUI />
        <ProjectConceptSteamRedesign />
        <BackButtonRSticky backLink={linkGrp2D} buttonText="Back to 2D"/>
    </>
  )
}