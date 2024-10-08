import clsx from "clsx";
import React, { forwardRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, id }, ref) => {
    return (
      <section
        className="-mt-[73px] pt-32 md:pt-40 text-center min-h-screen max-w-screen overflow-hidden relative"
        id={id}
      >
        <div ref={ref} className={clsx("container mx-auto", className)}>
          {children}
        </div>
      </section>
    );
  },
);

Container.displayName = "Container";

export default Container;
