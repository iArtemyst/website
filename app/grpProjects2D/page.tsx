import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import GroupProjectsMotion from "./grp-page-2D";

const linkHome = './';

export default function RenderGroupMotion() {
  return (
    <>
      <NavUI />
      <GroupProjectsMotion />
      <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </>
  )
} 