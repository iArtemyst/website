import "@/app/globals/nav-ui";


import * as backButtons from "@/app/globals/back-buttons";
import LandingHeader from "@/app/globals/nav-ui";
import GroupProjects3D from "./grp-page-3d";

const linkHome = './';

export default function RenderGroup3D() {
  return (
    <div>
    <LandingHeader />
    <GroupProjects3D />
    <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </div>
  )
}