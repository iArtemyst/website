import "@/app/globals/globals.css";

import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import GroupProjectsCode from "./grp-page-code";

const linkHome = './';

export default function RenderGroupCode() {
  return (
    <div>
    <NavUI />
    <GroupProjectsCode />
    <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </div>
  )
}