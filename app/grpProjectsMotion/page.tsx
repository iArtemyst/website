import "@/app/globals/globals.css";


import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import GroupProjectsMotion from "./grp-page-motion";

const linkHome = './';

export default function RenderGroupMotion() {
  return (
    <div>
    <NavUI />
    <GroupProjectsMotion />
    <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </div>
  )
} 