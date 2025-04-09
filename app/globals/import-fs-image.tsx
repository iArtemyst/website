'use client'

import "@/app/globals/globals.css";
import Image, { StaticImageData } from "next/image";

export default function ImportFSImage({imgLink, imgAlt = "Default Image",}: {imgLink:StaticImageData, imgAlt:string}) {
    return (
        <Image
            loading="lazy"
            src={imgLink}
            alt={imgAlt}
            style={{objectFit: "contain"}}
            className="w-full h-full object-contain"
            />
    )
}