import React from "react";
import "@/app/globals/globals.css";


import LandingHeader from "@/app/globals/nav-ui";
import GroupProjectsMotion from "./grp-page-motion";
import * as backButtons from "@/app/globals/back-buttons";

const linkHome = './';

export default function RenderGroupMotion() {
  return (
    <div>
    <LandingHeader />
    <GroupProjectsMotion />
    <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Back to Projects"/>
    </div>
  )
} 