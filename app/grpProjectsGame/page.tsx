import "@/app/globals/nav-ui";


import * as backButtons from "@/app/globals/back-buttons";
import { NavUI, BackButtonRSticky } from "@/app/globals/nav-ui";
import GroupProjectsGame from "./grp-page-game";

const linkHome = './';



export default function RenderGroupGame() {
  return (
    <div>
    <NavUI />
    <GroupProjectsGame />
    <BackButtonRSticky backLink={linkHome} buttonText="Head Back Home"/>
    </div>
  )
}