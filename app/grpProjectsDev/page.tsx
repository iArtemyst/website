import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import GroupProjectsCode from "./grp-page-dev";
import { SiteFooter } from "@/app/globals/footer";

const linkHome = './';

export default function RenderGroupCode() {
  return (
    <>
      <NavUI />
      <GroupProjectsCode />
      <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
      <SiteFooter />
    </>
  )
}