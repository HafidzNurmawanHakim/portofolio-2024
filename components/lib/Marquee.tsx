import React, { useRef, CSSProperties, ReactNode, MutableRefObject, useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useTracker } from "@14islands/r3f-scroll-rig";
import useTrackerMotionValue from "@/utils/hooks/useTrackerMotionValue";
import "@/styles/components/lib/marquee.css";
import "@14islands/r3f-scroll-rig/css";

interface CSSMarqueeProps {
   children: ReactNode;
   reverse?: boolean;
   duration?: number;
   className?: string;
   style?: CSSProperties;
}

const Marquee: React.FC<CSSMarqueeProps> = ({
   children,
   reverse = false,
   duration = 30,
   className = "",
   style = {},
}) => {
   const trackRef = useRef<any>(null);
   const tracker = useTracker(trackRef);
   const progress = useTrackerMotionValue(tracker);
   const x = useTransform(progress, [0, 1], reverse ? ["-20vw", "20vw"] : ["20vw", "-20vw"], {
      clamp: false,
   });

   return (
      <div className={`marqueeWrapper ${className} my-10`} ref={trackRef}>
         <div style={style}>
            <motion.div className={"marquee " + (reverse ? "reverse" : "")} style={{ x }}>
               <div
                  className="marquee__content"
                  style={{ "--duration": `${duration}s` } as CSSProperties}
               >
                  {children}
               </div>
               <div
                  className="marquee__content"
                  style={{ "--duration": `${duration}s` } as CSSProperties}
                  aria-hidden="true"
               >
                  {children}
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default Marquee;
