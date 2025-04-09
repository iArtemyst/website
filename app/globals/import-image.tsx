'use client'

import "@/app/globals/globals.css";
import Image, { StaticImageData } from "next/image";

export default function ImportImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <Image
            loading="lazy"
            src={imgLink}
            alt={imgAlt}
            style={{objectFit: "cover"}}
            className="w-full h-full"
            />
    )
}