import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type SlideProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  triggerByButton?: boolean;
  trigger?: boolean;
};

export default function Slide({
  children,
  delay = 0,
  className,
  direction = "right",
  triggerByButton = false,
  trigger,
}: SlideProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && !triggerByButton) {
      controls.start("visible");
    }
  }, [isInView, controls, triggerByButton]);

  useEffect(() => {
    if (triggerByButton && trigger) {
      controls.start("visible");
    }
  }, [trigger, controls, triggerByButton]);

  const variants = {
    hidden: {
      opacity: 0,
      translateX: direction === "left" ? -90 : direction === "right" ? 90 : 0,
      translateY: direction === "up" ? -90 : direction === "down" ? 90 : 0,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        className={className}
        initial="hidden"
        transition={{
          type: "spring",
          duration: 0.6,
          damping: 8,
          delay,
          stiffness: 100,
        }}
        variants={variants}
      >
        {children}
      </motion.div>
    </>
  );
}
