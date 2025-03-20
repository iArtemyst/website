'use client'
//---------------------
import React, { useState } from "react";
import "@/app/globals/globals.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
//---------------------
import vidHH01 from "@/app/assets/videos/_projects/HH_FNAF_Overlay.mp4";
import vidHH02 from "@/app/assets/videos/_projects/HH_Halloween_Overlay.mp4";
import vidHH03 from "@/app/assets/videos/_projects/HH_Midsommar_Overlay.mp4";
//---------------------
import HHImage01 from "@/app/assets/images/_projects/hh_still_0.png";
import HHImage02 from "@/app/assets/images/_projects/hh_still_1.png";
import HHImage03 from "@/app/assets/images/_projects/hh_still_2.png";
//---------------------
import { CardHoverFX } from "@/app/globals/card-hover-fx";
import * as fonts from "@/app/globals/fonts";
//---------------------
export interface ImageData
{
    imageDescription: string,
    projectImage: StaticImageData,
}
export interface VideoData
{
    projectVideo: string,
}

function PopulateProjectInfo({ProjectTitle = "Proj Title", ProjectDes = "Proj Description"}: {ProjectTitle:String, ProjectDes:String}) {
    let [Visibility, setVisibility] = useState(true);

    function HandleSwitch() {       
        setVisibility(!Visibility);
    }

    function VisibleButton({buttonText = "Hide"}: {buttonText:String}) {
        return (
            <button onClick={HandleSwitch} className="flex h-fit w-fit absolute rounded-full right-0 bottom-0 m-[1em] shadow-[3px_3px_6px_#00000010,-3px_-3px_6px_#ffffff20] hover:shadow-[inset_3px_3px_6px_#00000015,inset_-3px_-3px_6px_#ffffff30] active:shadow-[inset_4px_4px_8px_#00000020,inset_-4px_-4px_8px_#ffffff40] hover:cursor-pointer">
                <p className={`${fonts.bebasNeue.className} px-4 py-1 text-nowrap w-auto h-auto`}>{buttonText}</p>
            </button>
        )
    }

    function ProjInfo({ProjTitle = "Proj Title", ProjDes = "Proj Description"}: {ProjTitle:String, ProjDes:String}) {
        return (
            <div>
                <div className="relative w-full h-auto text-right">
                    <div className="w-full h-auto text-textLrg text-nowrap">
                        <h1 id="projTitle" className={`${fonts.bebasNeue.className}`}>{ProjTitle}</h1>
                    </div>
                    <div className="w-full h-auto text-textSml text-right text-pretty">
                        <p id="projText" className={`${fonts.poppins.className}`}>{ProjDes}</p>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className={`relative transition-all duration-500 mb-[4em] ${Visibility ? "ml-[2em]" : "-ml-[12em]"}`}>
            <div className="relative flex-row w-[18em] h-full content-end">

                <div className= {`absolute right-0 bottom-0 flex-row transition-all duration-500 content-end mr-[2em] mb-[4em]  ${Visibility ? "opacity-100" : "opacity-0"}`}>
                    <ProjInfo ProjTitle={ProjectTitle} ProjDes={ProjectDes}/>
                </div>
                <VisibleButton buttonText={Visibility ? "Hide" : "Show"}/>

            </div>
        </div>
    )
}

function ImageCard({ imageDescription = "Default Description", projectImage, projectImageAlt = "", setImage, index, isSelected}:{imageDescription:String, projectImage:StaticImageData, projectImageAlt:string, setImage:((x: StaticImageData, i: number) => void), index: number, isSelected: boolean}) {
        return (
        <div className={`static px-2 py-2`}>
            <button onClick={() => setImage(projectImage, index)} className={`group px-0 rounded-[1.5em] h-[100px] w-[100px] flex-shrink-0 relative overflow-hidden hover:z-10
            transition-all duration-200 shadow-[3px_3px_6px_#00000020,-3px_-3px_6px_#ffffff30]
            hover:shadow-[2px_2px_4px_#00000020,-2px_-2px_4px_#ffffff30] hover:cursor-pointer hover:scale-[98%] 
            active:scale-[95%] active:shadow-[1px_1px_2px_#00000030,-1px_-1px_2px_#ffffff40] active:cursor-pointer ${isSelected ? "border-4 border-red-500" : ""}`}>
                <Image 
                    src={projectImage}
                    alt={projectImageAlt}
                    className="w-auto h-[100px] object-cover rounded-[1em]"
                    >
                </Image>
                <div className="absolute left-0 bottom-0 text-xs text-middle w-full h-auto mb-1">
                    <p className="text-priColor text-balance text-textSml/[1.5em] opacity-0 group-hover:opacity-100 duration-200 transition-all drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        {imageDescription}
                    </p>
                </div>
            </button>
        </div>
    )
}

function SideBarImages({imageCardData}:{imageCardData: ImageData[]}) {
    let [currentImage, setCurrentImage] = useState(HHImage01)
    let [selectedImageIndex, setSelectedImageIndex] = useState(-1)
    
    return (
        <div className="relative content-center w-auto h-full mr-8 flex-row">
            {
                imageCardData.map((data, i) => {
                    return <ImageCard imageDescription={data.imageDescription} projectImage={data.projectImage} projectImageAlt="" isSelected={i == selectedImageIndex} index={i} key={i}
                                setImage=
                                {
                                    (img: StaticImageData, index: number) => {
                                        setCurrentImage(img)
                                        setSelectedImageIndex(index)
                                    }
                                }
                            />
                })
            }
        </div>
    )
}

function VideoCard({vidLink, setVideo, index, isSelected}:{vidLink:string, setVideo:((x:string, i:number) => void), index:number, isSelected:boolean}) {
    return (
        <div className="w-full h-auto justify-items-center content-center">
            <video src={vidLink} width="100%" height="auto" autoPlay muted loop/>
        </div>
    )
}

function SelectedItem({vidCardData}:{vidCardData: VideoData[]}) {
    let [currentVideo, setCurrentVideo] = useState(vidHH01)
    let [selectedVideoIndex, setSelectedVideoIndex] = useState(-1)
    
    return (
        <div>
            {
                vidCardData.map((data, i) => {
                    return <VideoCard vidLink={data.projectVideo} index={i} isSelected={i == selectedVideoIndex} setVideo=
                        {
                            (vid: string, index: number) => 
                            {
                                setCurrentVideo(vid)
                                setSelectedVideoIndex(index)
                            }
                        }
                    />
                })
            }
        </div>
    )
}

function ProjectGallery({imageCardData, vidCardData}: {imageCardData: ImageData[], vidCardData: VideoData[]}) {
    let [currentImage, setCurrentImage] = useState(HHImage01)
    let [selectedImageIndex, setSelectedImageIndex] = useState(-1)
    let [currentVideo, setCurrentVideo] = useState(vidHH01)
    let [selectedVideoIndex, setSelectedVideoIndex] = useState(-1)

    return (
        <div className="relative h-dvh w-full flex justify-items-center content-center">
            <SelectedItem vidCardData={vidCardData}  />
            <SideBarImages imageCardData={imageCardData}/>
        </div>
    )
}

export default function NewAboutPage() {
    const cardData: ImageData[] = [
        {
            imageDescription: "Five Nights at Freddy's Pizzaria",
            projectImage: HHImage01,
        },
        {
            imageDescription: "Halloween House",
            projectImage: HHImage02,
        },
        {
            imageDescription: "Midsommar Yellow Tent",
            projectImage: HHImage03,
        },
    ]

    const selectionData: VideoData[] =[
        {
            projectVideo: vidHH01,
        },
        {
            projectVideo: vidHH02,
        },
        {
            projectVideo: vidHH03,
        }
    ]

    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 overflow-clip no-scrollbar flex">
            <PopulateProjectInfo ProjectTitle="Horror Houses" ProjectDes="Test Description, more to follow later"/>
            <ProjectGallery vidCardData={selectionData} imageCardData={cardData}/>
        </div>
    )
}