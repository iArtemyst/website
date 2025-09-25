import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectConceptPodcastApp } from "./podcastapp-proj-pg";

const linkGrp2D = '../grpProjects2D';

export default function RenderProjConceptAppPodcast() {
  return (
    <>
        <NavUI />
        <ProjectConceptPodcastApp />
        <BackButtonRSticky backLink={linkGrp2D} buttonText="Back to 2D"/>
    </>
  )
}