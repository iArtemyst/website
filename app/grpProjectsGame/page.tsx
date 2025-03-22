import "@/app/globals/nav-ui";


import * as backButtons from "@/app/globals/back-buttons";
import LandingHeader from "@/app/globals/nav-ui";
import GroupProjectsGame from "./grp-page-game";

const linkHome = './';



export default function RenderGroupGame() {
  return (
    <div>
    <LandingHeader />
    <GroupProjectsGame />
    <backButtons.BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </div>
  )
}