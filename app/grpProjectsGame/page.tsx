import React from "react";
import "@/app/globals/nav-ui";


import LandingHeader from "@/app/globals/nav-ui";
import GroupProjectsGame from "./grp-page-game";
import * as backButtons from "@/app/globals/back-buttons";

const linkHome = './';



export default function RenderGroupGame() {
  return (
    <div>
    <LandingHeader />
    <GroupProjectsGame />
    <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Back to Projects"/>
    </div>
  )
}