"use client";
import React, {
   useRef,
   useState,
   useCallback,
   useLayoutEffect,
   ReactNode,
   createContext,
   useContext,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useScroll, useTransform, useSpring, motion, MotionValue } from "framer-motion";

interface SmoothScrollContextProps {
   scrollYProgress: MotionValue<number>;
}

const SmoothScrollContext = createContext<SmoothScrollContextProps | undefined>(undefined);

interface SmoothScrollProviderProps {
   children: ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
   const scrollRef = useRef<HTMLDivElement | null>(null);
   const [pageHeight, setPageHeight] = useState<number>(0);

   const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
         setPageHeight(entry.contentRect.height);
      }
   }, []);

   useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
      if (scrollRef.current) {
         resizeObserver.observe(scrollRef.current);
      }
      return () => resizeObserver.disconnect();
   }, [scrollRef, resizePageHeight]);

   const { scrollY, scrollYProgress } = useScroll({
      target: scrollRef,
      offset: ["start end", "end end"],
   });

   const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
   const physics = { damping: 15, mass: 0.27, stiffness: 55 };
   const spring = useSpring(transform, physics);

   return (
      <SmoothScrollContext.Provider value={{ scrollYProgress }}>
         <motion.div ref={scrollRef} style={{ y: spring }} className="scroll-container">
            {children}
         </motion.div>
         <div style={{ height: pageHeight }} />
      </SmoothScrollContext.Provider>
   );
};

export const useSmoothScroll = (): SmoothScrollContextProps => {
   const context = useContext(SmoothScrollContext);
   if (!context) {
      throw new Error("useSmoothScroll must be used within a SmoothScrollProvider");
   }
   return context;
};

// "use client";
// import React, { useRef, useState, useCallback, useLayoutEffect, ReactNode } from "react";
// import ResizeObserver from "resize-observer-polyfill";
// import { useScroll, useTransform, useSpring, motion } from "framer-motion";

// interface SmoothScrollProps {
//    children: ReactNode;
// }

// const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
//    // scroll container
//    const scrollRef = useRef<HTMLDivElement | null>(null);

//    // page scrollable height based on content length
//    const [pageHeight, setPageHeight] = useState<number>(0);

//    // update scrollable height when browser is resizing
//    const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
//       for (let entry of entries) {
//          setPageHeight(entry.contentRect.height);
//       }
//    }, []);

//    // observe when browser is resizing
//    useLayoutEffect(() => {
//       const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
//       if (scrollRef.current) {
//          resizeObserver.observe(scrollRef.current);
//       }
//       return () => resizeObserver.disconnect();
//    }, [scrollRef, resizePageHeight]);

//    const { scrollY, scrollYProgress } = useScroll({
//       target: scrollRef,
//    }); // measures how many pixels user has scrolled vertically
//    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
//    // ... based on current scroll position to translateY the document in a natural way
//    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
//    const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
//    const spring = useSpring(transform, physics); // apply easing to the negative scroll value

//    console.log({ pageHeight, scrollYProgress: scrollYProgress.get() });

//    return (
//       <>
//          <motion.div
//             ref={scrollRef}
//             style={{ y: spring }} // translateY of scroll container using negative scroll value
//             className="scroll-container"
//          >
//             {children}
//          </motion.div>
//          {/* blank div that has a dynamic height based on the content's inherent height */}
//          {/* this is necessary to allow the scroll container to scroll... */}
//          {/* ... using the browser's native scroll bar */}
//          <div style={{ height: pageHeight }} />
//       </>
//    );
// };

// export default SmoothScroll;
