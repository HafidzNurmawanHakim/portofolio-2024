import { useEffect, useLayoutEffect } from "react";
import { useMotionValue } from "framer-motion";
import {
  ScrollState,
  Tracker,
} from "@14islands/r3f-scroll-rig/dist/src/hooks/useTrackerTypes";
import { useScrollbar } from "@14islands/r3f-scroll-rig";

/**
 * Return a Framer Motion value bound to a tracker scrollState
 * @param {Tracker} tracker scroll-rig tracker instance
 * @param {string} prop scrollState prop to bind
 */
function useTrackerMotionValue(tracker: Tracker, prop = "progress") {
  const progress = useMotionValue(0);
  const { onScroll } = useScrollbar();

  useLayoutEffect(() => {
    // set initial progress
    progress.set(tracker.scrollState[prop as keyof ScrollState] as number);
  }, [progress, tracker, prop]);

  useEffect(() => {
    // update progress on scroll
    return onScroll(() => {
      progress.set(tracker.scrollState[prop as keyof ScrollState] as number);
    });
  }, [tracker, progress, onScroll, prop]);

  return progress;
}

export default useTrackerMotionValue;
