import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import EESDevicesProjectPage from "./eesDevices-proj-pg";
import { SiteFooter } from "@/app/globals/footer";

const linkGrp3D = '../grpProjects3D';


function RenderProjMedAnim() {
  return (
    <>
        <NavUI />
        <EESDevicesProjectPage />
        <BackButtonRSticky backLink={linkGrp3D} buttonText="Back to 3D"/>
        <SiteFooter />
    </>
  )
}

export default RenderProjMedAnim;