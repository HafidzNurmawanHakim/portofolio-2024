"use client";
import React, {
   useRef,
   useState,
   useLayoutEffect,
   ReactNode,
   createContext,
   useContext,
   useEffect,
   useCallback,
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
   const containerRef = useRef<any>(null);
   const [containerSize, setContainerSize] = useState(0);
   const [pageHeight, setPageHeight] = useState<number>(0);

   const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
         setContainerSize(entry.contentRect.height);
      }
   }, []);

   // observe when browser is resizing
   useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => resizePageHeight(entries));
      if (containerRef.current) {
         resizeObserver.observe(containerRef.current);
      }
      return () => resizeObserver.disconnect();
   }, [containerRef, resizePageHeight]);

   const { scrollY, scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end end"],
   });

   const transform = useTransform(scrollY, [0, containerSize], [0, -containerSize]);
   const physics = { damping: 15, mass: 0.27, stiffness: 55 };
   const spring = useSpring(transform, physics);

   return (
      <SmoothScrollContext.Provider value={{ scrollYProgress }}>
         <motion.div ref={containerRef} style={{ y: spring }} className="scroll-container">
            {children}
         </motion.div>
         <div style={{ height: containerSize }} />
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
