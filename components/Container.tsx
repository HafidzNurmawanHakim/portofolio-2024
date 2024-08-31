import clsx from "clsx";
import React, { forwardRef } from "react";

interface ContainerProps {
   children: React.ReactNode;
   className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className }, ref) => {
   return (
      <section className="min-h-screen -mt-[73px] pt-32 md:pt-40 text-center max-w-screen overflow-hidden relative">
         <div ref={ref} className={clsx("container mx-auto", className)}>
            {children}
         </div>
      </section>
   );
});

Container.displayName = "Container";

export default Container;
