"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCodeIcon, UserIcon } from "../icons";
import clsx from "clsx";
import { fontFira, fontSora } from "@/config/fonts";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import { useResponsive } from "@/utils/hooks/useResponsive";

const data = [
   {
      image: "/assets/images/javascript.png",
      desc: "Javascript",
   },
   {
      image: "/assets/images/typescript.png",
      desc: "Typescript",
   },
   {
      image: "/assets/images/react.png",
      desc: "React",
   },
   {
      image: "assets/svg/next.svg",
      desc: "Next",
   },
   {
      image: "/assets/images/css.png",
      desc: "CSS",
   },
   {
      image: "assets/svg/sass.svg",
      desc: "Sass",
   },
   {
      image: "/assets/images/tailwind.png",
      desc: "Tailwind",
   },
   {
      image: "/assets/images/bootstrap.png",
      desc: "Bootstrap",
   },
   {
      image: "/assets/images/antd.png",
      desc: "Ant Design",
   },
   {
      image: "/assets/images/express.png",
      desc: "Express",
   },
   {
      image: "/assets/images/nestjs.png",
      desc: "Nest Js",
   },
   {
      image: "/assets/images/python.png",
      desc: "Python",
   },
   {
      image: "/assets/images/django.png",
      desc: "Django",
   },
   {
      image: "/assets/images/github.png",
      desc: "Git",
   },
   {
      image: "/assets/images/postman.png",
      desc: "Postman",
   },
];

function CardSkill() {
   const isMobile = useResponsive("xs");

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
         <CardHeader
            className={clsx(fontFira.className, "justify-center text-sm lg:text-xl gap-4 py-6")}
         >
            <MessageCodeIcon size={isMobile ? 24 : 32} /> Technologies I love to build with
         </CardHeader>
         <CardBody className={clsx("px-4 lg:px-10  text-gray-400 bg-default shadow-lg")}>
            <div className="flex flex-wrap gap-2 lg:gap-4 text-xl flex-row">
               {data.map((item) => (
                  <Chip
                     size={isMobile ? "sm" : "md"}
                     key={item.desc}
                     className="px-3 bg-background"
                     startContent={
                        <Image
                           width={10}
                           height={10}
                           alt="icons"
                           className="w-4"
                           sizes="120px"
                           src={item.image}
                        />
                     }
                  >
                     {item.desc}
                  </Chip>
               ))}
            </div>
         </CardBody>
      </Card>
   );
}

export default CardSkill;
