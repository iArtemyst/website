import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import { ProjectConceptBankApp } from "./bankapp-proj-pg";

const linkGrp2D = '../grpProjects2D';

export default function RenderProjConceptAppBank() {
  return (
    <>
        <NavUI />
        <ProjectConceptBankApp />
        <BackButtonRSticky backLink={linkGrp2D} buttonText="Back to 2D"/>
    </>
  )
}