import "@/app/globals/globals.css";

import * as backButtons from "@/app/globals/back-buttons";
import LandingHeader from "@/app/globals/nav-ui";
import GroupProjectsCode from "./grp-page-code";

const linkHome = './';

export default function RenderGroupCode() {
  return (
    <div>
    <LandingHeader />
    <GroupProjectsCode />
    <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </div>
  )
}