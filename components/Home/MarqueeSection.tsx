import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import React from "react";
import Image from "next/image";

import Marquee from "../lib/Marquee";

import { techData } from "@/config/site";
import { isChromeOrFirefox } from "@/utils/helper";

function MarqueeSection() {
   return (
      <SmoothScrollbar enabled={false}>
         {(bind) => (
            <div {...bind}>
               <Marquee reverse>
                  {techData.map((slide, index) => (
                     <div key={index} className="relative w-20 h-20 mx-6">
                        <Image fill alt="icons" sizes="360px" className="w-10" src={slide.image} />
                     </div>
                  ))}
               </Marquee>
               <Marquee>
                  <h2 className="">Turning ideas into reality</h2>
               </Marquee>
               <Marquee reverse>
                  <h2>I don&apos;t have a Team, I am the Team!</h2>
               </Marquee>
            </div>
         )}
      </SmoothScrollbar>
   );
}

export default MarqueeSection;
