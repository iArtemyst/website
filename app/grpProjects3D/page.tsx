import "@/app/globals/nav-ui";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import GroupProjects3D from "./grp-page-3d";
import { SiteFooter } from "@/app/globals/footer";

const linkHome = './';

export default function RenderGroup3D() {
  return (
    <>
      <NavUI />
      <GroupProjects3D />
      <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
      <SiteFooter />
    </>
  )
}