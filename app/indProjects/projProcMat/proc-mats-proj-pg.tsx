'use client'

import React from "react";
import "@/app/globals/globals.css";

import * as bentos from "@/app/globals/bento-boxes";
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as fonts from "@/app/globals/fonts";
import * as pages from "@/app/globals/pages-main";

import vidProcMat01 from "@/app/assets/videos/_game/_procmats/procmats_loop_00.mp4";
import vidProcMat02 from "@/app/assets/videos/_game/_procmats/procmats_loop_01.mp4";
import vidProcMat03 from "@/app/assets/videos/_game/_procmats/procmats_loop_02.mp4";
import vidProcMat04 from "@/app/assets/videos/_game/_procmats/procmats_loop_03.mp4";
import vidProcMat05 from "@/app/assets/videos/_game/_procmats/procmats_loop_04.mp4";
import vidProcMat06 from "@/app/assets/videos/_game/_procmats/procmats_loop_05.mp4";
import vidProcMat07 from "@/app/assets/videos/_game/_procmats/procmats_loop_06.mp4";
import vidProcMat08 from "@/app/assets/videos/_game/_procmats/procmats_loop_07.mp4";
import vidProcMat09 from "@/app/assets/videos/_game/_procmats/procmats_loop_08.mp4";
import vidProcMat10 from "@/app/assets/videos/_game/_procmats/procmats_loop_09.mp4";

export interface IVideoWithTitle {
    vidLink: string,
    vidTitle: String,
}

function BentoBoxA() {
    const cellData: IVideoWithTitle[] = [
        { vidLink: vidProcMat01,
            vidTitle: "Asphalt Material",
        },
        { vidLink: vidProcMat02,
            vidTitle: "Green Bark and Wood Material",
        },
        { vidLink: vidProcMat03,
            vidTitle: "White Bark and Wood Material",
        },
        { vidLink: vidProcMat04,
            vidTitle: "Brick Material",
        },
        { vidLink: vidProcMat05,
            vidTitle: "Refractive Glass Material",
        },
        { vidLink: vidProcMat06,
            vidTitle: "Snow and Ice Material",
        },
        { vidLink: vidProcMat07,
            vidTitle: "Lava Material",
        },
        { vidLink: vidProcMat08,
            vidTitle: "Worn Metal Material",
        },
        { vidLink: vidProcMat09,
            vidTitle: "Quartz Rock Material",
        },
        { vidLink: vidProcMat10,
            vidTitle: "Sand Dunes Material",
        },
    ]

    function VideoCell({link, vidTitle=""}:{link:string, vidTitle:String}){
        return (
            <CardHoverFX bufferZone={0} rotateAmount={12}>
                <div className="relative group">
                    <bentos.CellVideo cellVidLink={link} cellSpan="col-span-1"/>
                    <p className={`absolute left-[50%] -translate-x-[50%] w-[80%] bottom-0 my-[4px] md:my-[12px] text-[10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] -translate-y-[12px] text-balance text-center text-white transition-all duration-400 drop-shadow-[0px_0px_8px_#000000] ${fonts.dotoBlack.className}`}>{vidTitle}</p>
                </div>
            </CardHoverFX>
        )
    }

    return (
        <div className="relative z-0 grid grid-cols-2 xl:grid-cols-3 w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-[12px] text-white hover:cursor-pointer">
            {
            cellData.map((data, i) => {
                return <VideoCell link={data.vidLink} vidTitle={data.vidTitle} key={i}/>
            })
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
