'use client'

import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";

const vidProcMat01 = "_game/_procmats/procmats_loop_00.mp4";
const vidProcMat02 = "_game/_procmats/procmats_loop_01.mp4";
const vidProcMat03 = "_game/_procmats/procmats_loop_02.mp4";
const vidProcMat04 = "_game/_procmats/procmats_loop_03.mp4";
const vidProcMat05 = "_game/_procmats/procmats_loop_04.mp4";
const vidProcMat06 = "_game/_procmats/procmats_loop_05.mp4";
const vidProcMat07 = "_game/_procmats/procmats_loop_06.mp4";
const vidProcMat08 = "_game/_procmats/procmats_loop_07.mp4";
const vidProcMat09 = "_game/_procmats/procmats_loop_08.mp4";
const vidProcMat10 = "_game/_procmats/procmats_loop_09.mp4";

interface IVideoWithTitle {
    vidLink: string,
    vidTitle: string,
    hoverColor: string,
}

function BentoBoxA() {
    const cellData: IVideoWithTitle[] = [
        { 
            vidLink: vidProcMat01,
            vidTitle: "Asphalt Material",
            hoverColor: "text-textColor",
        },
        { 
            vidLink: vidProcMat02,
            vidTitle: "Green Bark and Wood Material",
            hoverColor: "text-textVariant",
        },
        { 
            vidLink: vidProcMat03,
            vidTitle: "White Bark and Wood Material",
            hoverColor: "text-textVariant",
        },
        { 
            vidLink: vidProcMat04,
            vidTitle: "Brick Material",
            hoverColor: "text-textVariant",
        },
        { 
            vidLink: vidProcMat05,
            vidTitle: "Refractive Glass Material",
            hoverColor: "text-textVariant",
        },
        { 
            vidLink: vidProcMat06,
            vidTitle: "Snow and Ice Material",
            hoverColor: "text-textColor",
        },
        { 
            vidLink: vidProcMat07,
            vidTitle: "Lava Material",
            hoverColor: "text-textColor",
        },
        { 
            vidLink: vidProcMat08,
            vidTitle: "Worn Metal Material",
            hoverColor: "text-textColor",
        },
        { 
            vidLink: vidProcMat09,
            vidTitle: "Quartz Rock Material",
            hoverColor: "text-textVariant",
        },
        { 
            vidLink: vidProcMat10,
            vidTitle: "Sand Dunes Material",
            hoverColor: "text-textVariant",
        },
    ]

    function VideoCell({link, vidTitle="", hoverColor}: {link: string, vidTitle: string, hoverColor: string}) {
        return (
            <div>
                <bentos.CellMediaOnClick mediaLink={link} mediaType={MediaType.Video} mediaText={vidTitle} cellSpan="col-span-1" hoverTextColor={hoverColor}/>
                <p className={`absolute left-[50%] -translate-x-[50%] w-[80%] bottom-0 my-[4px] md:my-[12px] text-[10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] text-balance text-center text-white transition-all duration-400 drop-shadow-[0px_0px_8px_#000000] ${fonts.dotoBlack.className}`}>
                    {vidTitle}
                </p>
            </div>
        )
    }

    return (
        <div className="relative z-0 grid grid-cols-2 xl:grid-cols-3 w-[80%] h-auto justify-self-center rounded-3xl place-content-center hover:z-20 gap-[12px] text-white hover:cursor-pointer">
            {
                cellData.map((data, i) => <VideoCell link={data.vidLink} vidTitle={data.vidTitle} hoverColor={data.hoverColor} key={i}/>)
            }
        </div>
    )
}

export default function ProjectProcMatPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <bentos.ProjectDetailTextTop
                TitleText="PROCEDUAL MATERIALS" 
                MoreText="Creating a library of reusable materials and shaders, with detailed parameters for adjusting the materials to future scenes. For a deeper look at the nodes behind these materials, please visit my Artstation Page."/>
            <BentoBoxA />
        </pages.GroupProjectPage>
    )
}
