"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { UserIcon } from "../icons";
import clsx from "clsx";
import { fontFira, fontKhula, fontMono, fontSora } from "@/config/fonts";

function CardAbout1() {
   const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
   });

   useEffect(() => {
      const updateMousePosition = (e: any) => {
         setMousePosition({
            x: e.clientX,
            y: e.clientY,
         });
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
         window.removeEventListener("mousemove", updateMousePosition);
      };
   }, []);

   const variants = {
      default: {
         x: mousePosition.x - 1100,
         y: mousePosition.y - 300,
      },
   };
   return (
      <Card className="w-full h-full relative bg-background-900 border-none shadow-none">
         <motion.div
            className="absolute size-20 rounded-full dark-radial "
            variants={variants}
            animate="default"
            transition={{
               x: {
                  duration: 0.3,
                  ease: "linear",
                  repeat: 0,
                  type: "spring",
                  stiffness: 80,
               },
               y: {
                  duration: 0.3,
                  ease: "linear",
                  repeat: 0,
                  type: "spring",
                  stiffness: 80,
               },
               default: {
                  repeat: Infinity,
               },
            }}
         />
         <div className="absolute z-20 w-full h-full top-0 left-0  bg-grid pointer-events-none"></div>
         <CardHeader className={clsx(fontFira.className, "justify-center text-3xl py-6")}>
            Me
         </CardHeader>
         <CardBody className={clsx(fontMono.className, "px-10  text-gray-400")}>
            Im passionate full-stack developer with 4 years of experience. From a young age, im love
            for coding and design has driven him to create innovative and visually stunning
            projects. With a sharp eye for detail, he consistently delivers exceptional and
            memorable experiences.
         </CardBody>
      </Card>
   );
}

export default CardAbout1;
