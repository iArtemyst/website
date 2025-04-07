import * as React from "react"
import "@/app/globals/globals.css";


import { priColor } from "@/tailwind.config";

export function ArtstationSVG({fill="#CACACA"}) {
  return (
    <svg
      viewBox="0 0 209 196"
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="100%"
      fill={priColor}
    >
      <path
        d="M51.4 123.3h65.4l12.3 21.3H69.8c-4.1 0-7.7-2.4-9.5-5.9l-8.9-15.4zm105.8.1c0 2.4-.5 3.6-2.1 6.4l-8.5 14.7-53.7-93h18.4c4.1 0 7.6 2.3 9.4 5.7l34.8 60.4c1.1 1.7 1.7 3.7 1.7 5.8zm-49.1-15.3H60.2l24-41.5 23.9 41.5z"
        transform="translate(-90.725 -85.288) scale(1.86984)"
      />
    </svg>
  )
}
