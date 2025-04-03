import Image, { StaticImageData } from "next/image";
import '../globals/globals.css';
import React from "react";

import linkLogoZBrush from '../assets/images/softwareSquares/soft_logoSq_160px_00.png';
import linkLogoUnreal from '../assets/images/softwareSquares/soft_logoSq_160px_01.png';
import linkLogoMaxon from '../assets/images/softwareSquares/soft_logoSq_160px_02.png';
import linkLogoHoudini from '../assets/images/softwareSquares/soft_logoSq_160px_03.png';
import linkLogoModo from '../assets/images/softwareSquares/soft_logoSq_160px_04.png';
import linkLogoFigma from '../assets/images/softwareSquares/soft_logoSq_160px_05.png';
import linkLogoC4D from '../assets/images/softwareSquares/soft_logoSq_160px_06.png';
import linkLogoB3D from '../assets/images/softwareSquares/soft_logoSq_160px_07.png';
import linkLogoMaya from '../assets/images/softwareSquares/soft_logoSq_160px_08.png';
import linkLogoSubstance from '../assets/images/softwareSquares/soft_logoSq_160px_09.png';
import linkLogoAdPr from '../assets/images/softwareSquares/soft_logoSq_160px_10.png';
import linkLogoAdPs from '../assets/images/softwareSquares/soft_logoSq_160px_11.png';
import linkLogoAdId from '../assets/images/softwareSquares/soft_logoSq_160px_12.png';
import linkLogoAdAi from '../assets/images/softwareSquares/soft_logoSq_160px_13.png';
import linkLogoAdCc from '../assets/images/softwareSquares/soft_logoSq_160px_14.png';
import linkLogoAdAe from '../assets/images/softwareSquares/soft_logoSq_160px_15.png';
import linkLogo3DS from '../assets/images/softwareSquares/soft_logoSq_160px_16.png';
import linkLogoPlex from '../assets/images/softwareSquares/soft_logoSq_160px_17.png';
import linkLogoSketch from '../assets/images/softwareSquares/soft_logoSq_160px_18.png';
import linkLogoAdAu from '../assets/images/softwareSquares/adobe-audition_logo_160px_00.png';
import linkLogoCSS from '../assets/images/softwareSquares/css_logo_160px_00.png';
import linkLogoHTML from '../assets/images/softwareSquares/html_logo_160px_00.png';
import linkLogoJS from '../assets/images/softwareSquares/js_logo_160px_00.png';
import linkLogoGodot from '../assets/images/softwareSquares/godot_logo_160px_00.png';
import linkLogoNextJS from '../assets/images/softwareSquares/nextjs_logo_160px_00.png';
import linkLogoPython from '../assets/images/softwareSquares/python_logo_160px_00.png';
import linkLogoReact from '../assets/images/softwareSquares/react_logo_160px_00.png';

import imageUX from "../assets/images/aboutPage/thbnl_site-hmpg_02_compressed.png"
import imageAnim from "../assets/images/aboutPage/still-for-website-layout (02099).png"
import imageGame from "../assets/images/aboutPage/4x3_stills_forTechGame_0.png"
import imageAdobe from "../assets/images/aboutPage/lndscp_stills_forMograph_0.png"
import profPhoto from "../assets/images/profile/ey-profile.png"
import { hoverShadow } from "@/tailwind.config";

import * as fonts from "../globals/fonts";
import { CardHoverFX } from "../globals/card-hover-fx";
import * as pages from "@/app/globals/pages-main";
import { GetImage } from "../globals/media";

const Card1Logos: StaticImageData[] = [
    linkLogo3DS,
    linkLogoAdAe,
    linkLogoC4D,
    linkLogoB3D,
    linkLogoMaya,
]

function AboutSection(){
    return (
        <div className="w-[70%] h-auto grid grid-cols-3 gap-[24px] justify-self-center items-center">
            <CardHoverFX bufferZone={0} rotateAmount={10}>
                <div className={` ${hoverShadow} w-auto h-auto col-span-1 relative self-center rounded-full overflow-hidden `} >
                    <div className={`w-auto h-auto aspect-square`}>
                        <GetImage imgLink={profPhoto} imgAlt="Personal Profile Picture"/>
                    </div>
                </div>
            </CardHoverFX>

            <div className={` ${hoverShadow} w-full h-full  col-span-2 content-center relative flex-row self-center rounded-[12px] p-[16px] hover:cursor-pointer`}>
                <div className="text-textLrg text-right text-nowrap text-priColor">
                    <h1 className={fonts.dotoBlack.className}>JACK OF TOO MANY TRADES</h1>
                </div>

                <div className={` ${fonts.dotoBold.className} flex-inline text-right text-priColor text-pretty py-[8px] text-textSml `}>
                    <p>My journey began with a crude animation of a UFO abducting a cow in Microsoft Paint in middle school. I fell in love with the craft and started learning everything I could to become a better artist and creator for a variety of experiences and designs.</p>
                    <p>Currently I work as a Visual Production Artist for clients in multiple industries. I have produced marketing collateral, animations, game assets, simulations, apps and websites, and much more. Whatever the task at hand, I find the tools to get the job done.</p>
                    <p>While the render farm churns through frames, I spend my time developing the game ideas in my head, designing harrowing dungeons and dragons adventures for my friends and family, or when the rain holds out enough, you can find me teeing it up on a local course, trying to improve my handicap.</p>
                </div>

            </div>
        </div>
    )
}

function LogoSquare({photoLink}: {photoLink: StaticImageData}) {
    return(
            <Image 
            src={photoLink}
            alt=""
            width="40"
            height="40"
            className="object-fill rounded-xl p-1"
            />
    )
}

function AboutSkillCard({CardTitle = "Card Title", CardImg, CardDescript = "Card Description", CardLogos, CardColor = ""}: 
    {CardTitle:String, CardImg:StaticImageData, CardDescript:String, CardLogos: StaticImageData[], CardColor:String}) {

    function SoftwareSection() {
        return (
            <div className="relative flex-col w-full h-auto">
                <div className="relative text-left h-auto w-auto font-normal mt-2 text-medium">
                    <h1 className={fonts.bebasNeue.className}>SOFTWARE</h1>
                </div>

                <div className="relative flex flex-row justify-evenly w-full h-auto">
                    {
                        CardLogos.map((logo: StaticImageData, i: number) => <LogoSquare key={i} photoLink={logo}/>)
                    }
                </div>
            </div>
        )
    }

    return(
        <div className={`w-fit h-fit -mx-[125px] z-0 hover:z-10 hover:-translate-y-[125px] transition-all duration-500`}>
            <CardHoverFX bufferZone={10} rotateAmount={10}>
                <div className={`w-fit h-fit rounded-[2em] bg-opacity-30 backdrop-blur-lg ${CardColor}`}>
                    <div className="
                        relative 
                        w-[300px]
                        h-[400px]
                        flex
                        text-secColor 
                        rounded-3xl
                        px-4 
                        py-2  
                        hover:z-10
                        hover:cursor-pointer
                        transition-all
                        duration-250"
                        >
                        <div className="w-full h-auto flex flex-col justify-evenly">
                            <div className="relative text-left h-auto w-full text-2xl font-semibold pt-3 pb-0">
                                <h1 className={fonts.bebasNeue.className}>{CardTitle}</h1>
                            </div>

                            <div className="relative w-full h-[30%]">
                                <Image 
                                src={CardImg}
                                alt=""
                                className="object-cover rounded-3xl w-full h-full"
                                />
                            </div>

                            <div className="flex flex-col flex-grow w-full h-auto justify-center mt-2">
                                <div className="">
                                    <div className="relative text-left h-auto w-auto text-medium font-normal">
                                        <h1 className={fonts.bebasNeue.className}>Description</h1>
                                    </div>
                                    <div className="relative text-left h-auto w-auto text-[.75rem] font-normal">
                                        <p className={fonts.poppins.className}>{CardDescript}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <SoftwareSection />
                        </div>
                    </div>
                </div>
            </CardHoverFX>
        </div>
        
    )
}

function SkillCardSection() {
    return (
        <div className="flex flex-row relative h-auto w-[90%] max-w-[1440px] justify-evenly justify-self-center translate-y-[50px]">
            {/* <Draggable axis="both" defaultPosition={{x:0, y:0}}> */}
                <AboutSkillCard CardTitle="Adobe" CardDescript="I have used adobe soooo much" CardImg={imageAdobe} 
                                CardLogos={[linkLogoAdAe, linkLogoAdAi, linkLogoAdPs, linkLogoAdAi, linkLogoAdId, linkLogoAdAu]} CardColor="bg-blue-700"/>
            {/* </Draggable> */}

                <AboutSkillCard CardTitle="3D Production" CardDescript="I do a lot of stuff in 3D" CardImg={imageAnim} 
                                CardLogos={[linkLogoB3D, linkLogoC4D, linkLogo3DS, linkLogoMaya, linkLogoModo, linkLogoUnreal]} CardColor="bg-violet-700"/>

                <AboutSkillCard CardTitle="Game Asset Creation" CardDescript="I can take a model from start to game ready!" CardImg={imageGame} 
                                CardLogos={[linkLogoUnreal, linkLogoB3D, linkLogoSubstance, linkLogoZBrush, linkLogoGodot, linkLogoHoudini]} CardColor="bg-green-700"/>

                <AboutSkillCard CardTitle="Experience Design" CardDescript="User Interfaces, Coding Websites, and creating good experiences" CardImg={imageUX} 
                                CardLogos={[linkLogoFigma, linkLogoSketch, linkLogoNextJS, linkLogoHTML, linkLogoJS, linkLogoReact]} CardColor="bg-red-700"/>

        </div>
    )
}

export function AboutMePage() {
    return (
        <pages.GroupProjectPage overflowStyle="overflow-hidden">
                <AboutSection />
                <SkillCardSection />
        </pages.GroupProjectPage>
    );
}