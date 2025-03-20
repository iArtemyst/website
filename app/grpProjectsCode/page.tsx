import React from "react";
import "@/app/globals/globals.css";

import LandingHeader from "@/app/globals/nav-ui";
import GroupProjectsCode from "./grp-page-code";
import * as backButtons from "@/app/globals/back-buttons";

const linkHome = './';

export default function RenderGroupCode() {
  return (
    <div>
    <LandingHeader />
    <GroupProjectsCode />
    <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Back to Projects"/>
    </div>
  )
}