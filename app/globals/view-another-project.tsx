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

const titleTextSize= "text-[14px] md:text-[18px] lg:text-[24px]";
const paraTextSize = "text-[10px] md:text-[11px] lg:text-[13px]";

export function ViewAnotherProjectDiv({text, children}:{text:string, children:any}) {
    return (
        <div>
            <div className={`w-fit h-fit justify-self-center my-[1em]`}>
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
        <CardHoverFX bufferZone={20} rotateAmount={120}>
            <div className={`${hoverShadow} w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[420px] h-fit rounded-2xl flex flex-col px-[1em] py-[.75em] place-self-center ${cardColor}`}>
                <StyledLink href={projLink}>
                    <p className={`${titleTextSize} ${fonts.dotoBlack.className} text-center text-nowrap`}>{projTitle}</p>
                    <p className={`${paraTextSize} ${fonts.poppins.className} text-center text-pretty`}>{projDesc}</p>
                    <div className="aspect-[3/2] place-self-center">
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
                                <LazyImageSizer imgAlt={projMediaAltText} imgLink={projMedia} imgSize="w-full h-full rounded-xl"/>
                        }
                    </div>
                </StyledLink>
            </div>
        </CardHoverFX>
    )
}