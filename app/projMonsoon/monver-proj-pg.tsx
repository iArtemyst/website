'use client'
//---------------------
import * as bentos from "@/app/globals/bento-boxes";
import "@/app/globals/globals.css";
import * as pages from "@/app/globals/pages-main";
import { MediaType } from "@/app/globals/project-galleries";
import { CheckIfMobileBrowser } from "../globals/mobile-check";
import * as gallery from "@/app/globals/project-galleries";
import { GalleryV2, GalleryV2TopInfoDiv } from "@/app/globals/gallery-v2";

//---------------------
const vidMonsoonVermut = "_3d/_monsoonVermut/monsoonVermut_Clip01.mp4";

const MVimg01 = "_3d/_monsoonVermut/monsoonvermut_stills_00.png";
const MVimg02 = "_3d/_monsoonVermut/monsoonvermut_stills_01.png";
const MVimg03 = "_3d/_monsoonVermut/monsoonvermut_stills_02.png";
const MVimg04 = "_3d/_monsoonVermut/monsoonvermut_stills_03.png";

const MonsoonVermutMedia: gallery.IGalleryMedia[] = [
    {
        assetText: "Monsoon Vermut Release Animation",
        assetMediaLink: vidMonsoonVermut,
        assetMediaType: gallery.MediaType.Video,
        assetStillLink: "",
    },
    {
        assetText: "Monsoon Vermut wine glass render",
        assetMediaLink: MVimg01,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: MVimg01,
    },
    {
        assetText: "Monsoon Vermut desert render",
        assetMediaLink: MVimg02,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: MVimg02,
    },
    {
        assetText: "Monsoon Vermut with cactus render",
        assetMediaLink: MVimg03,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: MVimg03,
    },
    {
        assetText: "Monsoon Vermut group sand render",
        assetMediaLink: MVimg04,
        assetMediaType: gallery.MediaType.Image,
        assetStillLink: MVimg04,
    },
]

//---------------------
const bentoGap = "gap-[12px]";
const titleTextSize= "text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px]";
const paraTextSize = "text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]";

// function BentoBox() {
//     let isMobile = CheckIfMobileBrowser()
//     return (
//         <div className={`${isMobile ? "grid-cols-2" : "grid-cols-2"} ${bentoGap} relative z-0 grid  w-[80%] h-auto justify-self-center rounded-3xl place-content-center gap-x-[12px] my-[8px] sm:my-[12px] md:my-[18px] lg:my-[24px] text-white`}>
//             <bentos.CellMediaOnClick mediaLink={vidMonsoonVermut} mediaType={MediaType.Video} mediaText="Monsoon Vermut Release Animation" cellSpan={`${isMobile ? "col-span-2" : "col-span-2"}`} hoverTextColor="text-textVariant"/>
            
//             <bentos.CellText cellSpan={`${isMobile ? "col-span-2" : "col-span-2"}`}>
//                 <bentos.HeaderText text="Monsoon Vermut" textSize={titleTextSize}/>
//             </bentos.CellText>

//             <bentos.CellText cellSpan={`${isMobile ? "col-span-2" : "col-span-2"}`}>
//                 <bentos.ParagraphText textSize={paraTextSize} text="For the release of a small batch Vermuth company based out of Arizona, I assisted in producing marketing collateral in the form of several social media images and a release video.
//                         For this client I was given the freedom to develop a creative direction and art direct myself to produce the final assets.
//                         I was responsible for modeling the assets, developing the textures and shaders, creating the environment and lighting." />
//             </bentos.CellText>

//             <bentos.CellMediaOnClick mediaLink={MVimg01} mediaType={MediaType.Image} mediaText="Monsoon Vermut wine glass render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

//             <bentos.CellMediaOnClick mediaLink={MVimg02} mediaType={MediaType.Image} mediaText="Monsoon Vermut desert render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

//             <bentos.CellMediaOnClick mediaLink={MVimg03} mediaType={MediaType.Image} mediaText="Monsoon Vermut with cactus render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>

//             <bentos.CellMediaOnClick mediaLink={MVimg04} mediaType={MediaType.Image} mediaText="Monsoon Vermut group sand render" cellSpan="col-span-1" hoverTextColor="text-textVariant"/>
//         </div>
//     )
// }
//---------------------
export function ProjectMonsoonVermutPage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-y-scroll">
            <div className={`place-self-center self-start place-items-center w-full flex flex-col h-fit md:h-auto gap-0 md:gap-[12px]`}>
                <GalleryV2TopInfoDiv 
                    projTitle="Monsoon Vermut Marketing Collateral" 
                    projSummary={`For the release of a small batch Vermuth company based out of Arizona, I assisted in producing marketing collateral in the form of several social media images and a release video.
                        For this client I was given the freedom to develop a creative direction and art direct myself to produce the final assets.
                        I was responsible for modeling the assets, developing the textures and shaders, creating the environment and lighting.`} 
                    projOtherDetails="CLIENT | LEAD ANIMATOR & 3D DESIGNER"/>
                <GalleryV2 mediaGallery={MonsoonVermutMedia}/>
            </div>
        </pages.GroupProjectPage>
    )
}