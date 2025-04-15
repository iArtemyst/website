'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as pages from "@/app/globals/pages-main";
import * as gallery from "@/app/globals/project-galleries";
import { MediaType } from "@/app/globals/project-galleries";
import { LazyVideo } from "@/app/globals/lazy-video";

const imgPubDart01 = "_3d/_pubDart/pubDart_img_05.jpg";
const imgPubDart04 = "_3d/_pubDart/pubDart_img_03.png";
const imgPubDart05 = "_3d/_pubDart/pubDart_img_04.png";
const vidPubDart01 = "_3d/_pubDart/pubDart_vid_00.mp4";
const vidPubDart02 = "_3d/_pubDart/pubDart_vid_01.mp4";
const vidPubDart03 = "_3d/_pubDart/pubDart_vid_02.mp4";
const vidPubDart04 = "_3d/_pubDart/pubDart_vid_03.mp4";
const vidPubDart05 = "_3d/_pubDart/pubDart_vid_04.mp4";

const bentoGap = "gap-[12px]";
const titleTextSize= "text-[24px]";
const paraTextSize = "text-[12px]";

const cell01Media: bentos.IPopupMedia = {
    assetMediaLink: imgPubDart05,
    assetText: "test",
}

function BentoBoxA() {
    return (
        <div className={`${bentoGap} grid grid-cols-2 w-[80%] justify-self-center text-textVariant`}>
                <bentos.CellText cellSpan="col-span-2">
                    <bentos.HeaderText text="Game Ready Darts and Pub Assets" textSize={titleTextSize}/>
                </bentos.CellText>

                <div className="col-span-2 grid grid-cols-3 hover:z-20">
                    <bentos.CellMediaOnClick mediaLink={imgPubDart04} mediaType={MediaType.Image} mediaText="Pub Scene Render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                    <bentos.CellMediaOnClick mediaLink={imgPubDart05} mediaType={MediaType.Image} mediaText="Pub Scene Wireframe" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                    <bentos.CellMediaOnClick mediaLink={imgPubDart01} mediaType={MediaType.Image} mediaText="Photo from the Pub" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                </div>
                
                <bentos.CellText cellSpan="col-span-2">
                    <bentos.ParagraphText textSize={paraTextSize} text="This project is inspired by a local pub that I visited to play darts with friends.
                        I challenged myself to make these models completely game ready, from consistent low quality polys, to UV unwrapping and texture baking.
                        All modeling, UVing, shader development, and texture baking was done in Blender 3D." />
                </bentos.CellText>

                <bentos.CellMediaOnClick mediaLink={vidPubDart01} mediaType={MediaType.Video} mediaText="Environment Models and Maps" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={vidPubDart03} mediaType={MediaType.Video} mediaText="Dartboard Housing Model and Maps" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={vidPubDart04} mediaType={MediaType.Video} mediaText="Table and Chairs Model and Maps" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
                <bentos.CellMediaOnClick mediaLink={vidPubDart05} mediaType={MediaType.Video} mediaText="Dartboard and Darts Model and Maps" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
        </div>
    )
}

function MainVideoBox({videoLink}: {videoLink: string}) {
    return (
        <div className="group">
            <div className="relative w-[80%] h-[auto] justify-self-center rounded-[24px] overflow-hidden shadow-[0px_0px_8px_#FFFFFF90] group-hover:shadow-[0px_0px_16px_#FFFFFF45] z-0 group-hover:z-10">
                <LazyVideo src={videoLink} controls={true} autoplay={true} muted={true} loop={true} className={"self-center"} />
            </div>
        </div>
    )
}

export default function ProjectDartPubPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className="grid grid-cols-1 gap-[24px]">
                <MainVideoBox videoLink={vidPubDart02}/>
                <BentoBoxA />
            </div>
        </pages.GroupProjectPage>
    )
}
