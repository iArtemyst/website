import "@/app/globals/globals.css";


import * as backButtons from "@/app/globals/back-buttons";
import LandingHeader from "@/app/globals/nav-ui";
import GroupProjectsMotion from "./grp-page-motion";

const linkHome = './';

export default function RenderGroupMotion() {
  return (
    <div>
    <LandingHeader />
    <GroupProjectsMotion />
    <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </div>
  )
} 