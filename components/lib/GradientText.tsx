import clsx from "clsx";
import { FC, ReactNode } from "react";

import { fontSora } from "@/config/fonts";

interface GradientTextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg"; // For different text sizes
  gradientDirection?: "to-r" | "to-l" | "to-t" | "to-b"; // Gradient direction
  colors?: string[]; // Array of colors for the gradient
  theme?: "light" | "dark"; // Theme for light/dark mode gradients
  className?: string;
}

const GradientText: FC<GradientTextProps> = ({
  children,
  size = "md",
  gradientDirection = "to-r",
  colors = ["from-purple-500", "to-pink-500", "to-orange-300"], // Default colors
  theme = "light",
  className,
}) => {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-3xl md:text-5xl",
    lg: "text-4xl md:text-6xl",
  };

  // Construct the gradient class based on the colors provided
  const gradientClasses = clsx(
    `bg-gradient-${gradientDirection}`,
    theme === "light"
      ? colors.map((color) => color).join(" ")
      : colors.map((color) => `dark:${color}`).join(" "),
  );

  return (
    <h2
      className={clsx(
        sizeClasses[size],
        gradientClasses,
        fontSora.className,
        "inline-block font-semibold text-transparent bg-clip-text",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default GradientText;
