import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import ProjectCodePortfolio from "./proj-layout";

const linkGrpCode = '../grpProjectsCode';

export default function RenderProjCodePortfolio() {
  return (
    <>
        <NavUI />
        <ProjectCodePortfolio />
        <BackButtonRSticky backLink={linkGrpCode} buttonText="Back to Code"/>
    </>
  )
}