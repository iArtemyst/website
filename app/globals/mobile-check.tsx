import React, { useState, useEffect } from "react";

// function CheckIfMobileDevice() {
//     const [mobile, setMobile] = useState<boolean>(false);
//     const [width, setWidth] = useState<number>(window.innerWidth);
    
//     function HandleMobileCheck() {
//         if (width <= 768) {
//             setMobile(true);
//             } 
//         else {
//             setMobile(false);
//         }
//     }

//     function handleWindowSizeChange() {
//         setWidth(window.innerWidth)
//         HandleMobileCheck
//         console.log(mobile);
//     }
    
//     useEffect(() => {
//         window.addEventListener('resize', handleWindowSizeChange,)
//         return () => {
//             window.removeEventListener('resize', handleWindowSizeChange)
//             }
//         }, []);
// }

//-----------------------------

// export function PlssWorkMobileChecker () {
//     const handleWindowSizeChange = () => {
//         const [mobile, setMobile] = useState(window.innerWidth <= 500);
        
//         setMobile(window.innerWidth <= 500);
//         }
    
//     useEffect(() => {
//         window.addEventListener('resize', handleWindowSizeChange);
//         return () => {
//             window.removeEventListener('resize', handleWindowSizeChange);
//         }
//     }, []);
// }

//-----------------------------

export function CheckIfMobileBrowser() {
    let [isMobile, setIsMobile] = useState(false);

    function HandleMobileSwitch() {      
        window.innerWidth <= 768 ?
        setIsMobile(true):
        setIsMobile(false)
    };

    useEffect(() => {
        window.addEventListener('resize', HandleMobileSwitch);
    }, []);
    
    return isMobile
}

//-----------------------------

// export function CheckForMobile03() {
//     let [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const userAgent = navigator.userAgent;
//         const mobileCheck = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
//         setIsMobile(mobileCheck);
//     }, []);
    
//     return isMobile;
// }

