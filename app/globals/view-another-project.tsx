'use client'

import "@/app/globals/globals.css";

import { hoverShadow } from "@/tailwind.config";
import { Url } from "next/dist/shared/lib/router/router";
import * as fonts from "./fonts";
import { LazyImageSizer } from "./lazy-image";
import StyledLink from "./styled-link";
import { MediaType } from "./project-galleries";
import { LazyNonHoverVideo } from "./lazy-video";
import { CardHoverFX } from "./card-hover-fx";

const titleTextSize= "text-[13px] md:text-[18px] lg:text-[24px]";
const paraTextSize = "text-[8px] md:text-[11px] lg:text-[13px]";

export function ViewAnotherProjectDiv({text, children}:{text:string, children:any}) {
    return (
        <div className="justify-self-center self-center place-content-center justify-items-center place-items-center flex flex-col">
            <div className={`w-fit h-fit justify-self-center self-center my-[1em]`}>
                <p className={`${fonts.dotoBlack.className} text-[14px] text-textVariant`}>
                    {text}
                </p>
            </div>

            {children}
        </div>
    )
}


export function ViewAnotherProjectCard({projTitle, projDesc, projMedia, projMediaAltText, projLinkMediaType, projLink, cardColor,}:{projTitle:string, projDesc:string, projMedia:string, projMediaAltText:string, projLinkMediaType:MediaType, projLink:Url, cardColor:string}) {
    return (
        <div className="self-center justify-self-center place-self-center w-fit h-fit">
            <CardHoverFX bufferZone={20} rotateAmount={120}>
                <div className={`${hoverShadow} w-[200px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[420px] h-fit rounded-2xl flex flex-col px-[1em] py-[.75em] place-self-center ${cardColor} border-[2px] sm:border-[6px] shadow-[2px_2px_6px_#00000050,-2px_-2px_6px_#ffffff30]`}>
                    <StyledLink href={projLink} className="flex flex-col">
                        <p className={`${titleTextSize} ${fonts.dotoBlack.className} text-center text-nowrap order-1`}>{projTitle}</p>
                        <p className={`${paraTextSize} ${fonts.poppins.className} text-center text-balance pt-[.5em] sm:py-[.125em] order-3`}>{projDesc}</p>
                        <div className="aspect-[3/2] place-self-center order-2 my-[.25em] sm:my-[.5em] rounded-xl overflow-clip">
                            {
                                projLinkMediaType === MediaType.Video ?
                                    <LazyNonHoverVideo 
                                        src={projMedia}
                                        autoplay={true}
                                        controls={false}
                                        muted={true}
                                        loop={true}
                                        /> 
                                :
                                    <LazyImageSizer imgAlt={projMediaAltText} imgLink={projMedia} imgSize="w-full h-full"/>
                            }
                        </div>
                    </StyledLink>
                </div>
            </CardHoverFX>
        </div>
    )
}