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
         console.log({ first: scrollRef.current });
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
         <motion.div ref={scrollRef} style={{ y: spring }} className="max-h-max">
            {children}
         </motion.div>
         {/* <div style={{ height: pageHeight }} /> */}
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
