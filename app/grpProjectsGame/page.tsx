import "@/app/globals/nav-ui";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import GroupProjectsGame from "./grp-page-game";
import { SiteFooter } from "@/app/globals/footer";

const linkHome = './';

export default function RenderGroupGame() {
  return (
    <>
      <NavUI />
      <GroupProjectsGame />
      <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
      <SiteFooter />
    </>
  )
}