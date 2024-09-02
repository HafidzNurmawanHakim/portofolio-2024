"use client";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  ReactNode,
  createContext,
  useContext,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  MotionValue,
} from "framer-motion";

interface SmoothScrollContextProps {
  scrollYProgress: MotionValue<number>;
}

const SmoothScrollContext = createContext<SmoothScrollContextProps | undefined>(
  undefined,
);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
}) => {
  const containerRef = useRef<any>(null);
  const [containerSize, setContainerSize] = useState(0);
  const [pageHeight, setPageHeight] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const body = document.body;
    const size = container.getBoundingClientRect().height;

    console.log({ size });

    // Set ukuran body untuk menjaga scrollbar
    body.style.height = `${size}px`;
    setContainerSize(size);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (Array.isArray(entry.contentBoxSize)) {
          setContainerSize(entry.contentRect.height);
        } else {
          setContainerSize(entry.contentRect.height);
        }
      }
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, [containerRef]);

  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const transform = useTransform(
    scrollYProgress,
    [0, containerSize],
    [0, -containerSize],
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <SmoothScrollContext.Provider value={{ scrollYProgress }}>
      <motion.div ref={containerRef} style={{ y: spring }}>
        {children}
      </motion.div>
      {/* <div style={{ height: pageHeight }} /> */}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = (): SmoothScrollContextProps => {
  const context = useContext(SmoothScrollContext);

  if (!context) {
    throw new Error(
      "useSmoothScroll must be used within a SmoothScrollProvider",
    );
  }

  return context;
};
