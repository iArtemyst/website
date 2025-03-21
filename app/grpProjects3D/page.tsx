import React from "react";
import "@/app/globals/nav-ui";


import LandingHeader from "@/app/globals/nav-ui";
import GroupProjects3D from "./grp-page-3d";
import * as backButtons from "@/app/globals/back-buttons";

const linkHome = './';

export default function RenderGroup3D() {
  return (
    <div>
    <LandingHeader />
    <GroupProjects3D />
    <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Back to Projects"/>
    </div>
  )
}