"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useState } from "react";
import { UrlObject } from "url";

export default function StyledLink({href, style, className, children}: {href: string | UrlObject, style?: CSSProperties | undefined, className?: string | undefined, children?: React.ReactNode})
{
    let [isRelative, setIsRelative] = useState(false);

    console.log(href);
    useEffect(() => {
        if (typeof href === "string")
        {
            if (href.startsWith("http"))
            {
                setIsRelative(new URL(document.location.href).origin === new URL(href).origin);
            }
            else
            {
                setIsRelative(true);
            }
        }
        else if (typeof href.href === "string")
        {
            if (href.href.startsWith("http"))
            {
                setIsRelative(new URL(document.location.href).origin === new URL(href.href).origin);
            }
            else
            {
                setIsRelative(true);
            }
        }
    }, [isRelative, href]);

    if (!style)
    {
        style = {};
    }
    
    // Disable long press popup and link selection
    style.WebkitTouchCallout = "none";
    style.WebkitUserSelect = "none";

    // draggable: disable dragging the link on mobile
    return <Link href={href} style={style} draggable={false} className={className} target={isRelative ? undefined : "_blank"} rel={isRelative ? undefined : "noopener noreferrer"}>
        {children}
    </Link>
}
