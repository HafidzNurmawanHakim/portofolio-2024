import { MutableRefObject } from "react";

export function getRelativeCoordinates(
   event: MouseEvent,
   referenceElement: MutableRefObject<HTMLElement | null> | null
) {
   if (!referenceElement?.current) return null;

   const position = {
      x: event.pageX,
      y: event.pageY,
   };

   const offset = {
      left: referenceElement.current.offsetLeft,
      top: referenceElement.current.offsetTop,
      width: referenceElement.current.clientWidth,
      height: referenceElement.current.clientHeight,
   };

   let reference = referenceElement.current.offsetParent as HTMLElement | null;

   while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent as HTMLElement | null;
   }

   return {
      x: position.x - offset.left,
      y: position.y - offset.top,
      width: offset.width,
      height: offset.height,
      centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
      centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
   };
}
