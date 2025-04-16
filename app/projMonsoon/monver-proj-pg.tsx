'use client'
//---------------------
import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import "@/app/globals/globals.css";
import { LazyVideo } from "@/app/globals/lazy-video";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "../globals/mobile-check";

//---------------------
const vidMonsoonVermut = "_3d/_monsoonVermut/monsoonVermut_Clip01.mp4";

const MVimg01 = "_3d/_monsoonVermut/monsoonvermut_stills_00.png";
const MVimg02 = "_3d/_monsoonVermut/monsoonvermut_stills_01.png";
const MVimg03 = "_3d/_monsoonVermut/monsoonvermut_stills_02.png";
const MVimg04 = "_3d/_monsoonVermut/monsoonvermut_stills_03.png";

//---------------------
const bentoGap = "gap-[12px]";
const titleTextSize= "text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]";
const paraTextSize = "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]";

function BentoBox() {
    return (
        <div className={`${CheckIfMobileBrowser() ? "grid-cols-2" : "grid-cols-2"} ${bentoGap} relative z-0 grid  w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-x-[12px] my-[8px] sm:my-[12px] md:my-[18px] lg:my-[24px] text-white`}>
            <bentos.CellMediaOnClick mediaLink={vidMonsoonVermut} mediaType={MediaType.Video} mediaText="Monsoon Vermut Release Animation" cellSpan={`${CheckIfMobileBrowser() ? "col-span-2" : "col-span-2"}`} hoverTextColor="text-textVariant"/>
            
            <bentos.CellText cellSpan={`${CheckIfMobileBrowser() ? "col-span-2" : "col-span-2"}`}>
                <bentos.HeaderText text="Monsoon Vermut" textSize={titleTextSize}/>
            </bentos.CellText>

            <bentos.CellText cellSpan={`${CheckIfMobileBrowser() ? "col-span-2" : "col-span-2"}`}>
                <bentos.ParagraphText textSize={paraTextSize} text="For the release of a small batch Vermuth company based out of Arizona, I assisted in producing marketing collateral in the form of several social media images and a release video.
                        For this client I was given the freedom to develop a creative direction and art direct myself to produce the final assets.
                        I was responsible for modeling the assets, developing the textures and shaders, creating the environment and lighting." />
            </bentos.CellText>

            <bentos.CellMediaOnClick mediaLink={MVimg01} mediaType={MediaType.Image} mediaText="Monsoon Vermut wine glass render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={MVimg02} mediaType={MediaType.Image} mediaText="Monsoon Vermut desert render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={MVimg03} mediaType={MediaType.Image} mediaText="Monsoon Vermut with cactus render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

            <bentos.CellMediaOnClick mediaLink={MVimg04} mediaType={MediaType.Image} mediaText="Monsoon Vermut group sand render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
        </div>
    )
}
//---------------------
export function ProjectMonsoonVermutPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`grid grid-cols-1 gap-[12px] place-content-center`}>
                <BentoBox />
            </div>
        </pages.GroupProjectPage>
    )
}