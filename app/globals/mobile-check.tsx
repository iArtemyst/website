'use client'

import { useState, useEffect } from "react";

export function CheckIfMobileBrowser() {
    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function HandleMobileSwitch() {     
            if (window.innerWidth <= 768)
            {
                if (!isMobile){
                    setIsMobile(true)
                }
            }
            else
            {
                if (isMobile) {
                    setIsMobile(false)
                }
            }
        };

        // window.onload = HandleMobileSwitch;
        //window.addEventListener('pageshow', HandleMobileSwitch);
        window.addEventListener("resize", HandleMobileSwitch);
        HandleMobileSwitch();

        return () => window.removeEventListener("resize", HandleMobileSwitch);
    }, [isMobile]);

    return isMobile
}
