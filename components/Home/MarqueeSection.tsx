import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import React from "react";
import Image from "next/image";

import Marquee from "../lib/Marquee";

import { techData } from "@/config/site";

function MarqueeSection() {
  return (
    <SmoothScrollbar>
      {(bind) => (
        <div {...bind}>
          <Marquee reverse>
            {techData.map((slide, index) => (
              <div key={index} className="relative w-20 h-20 mx-6">
                <Image fill alt="icons" className="w-10" src={slide.image} />
              </div>
            ))}
          </Marquee>
          <Marquee>
            <h2>Turning ideas into reality</h2>
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
