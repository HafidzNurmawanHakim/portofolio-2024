import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { GithubIcon, LinkIcon, LockIcon } from "../icons";
import Link from "next/link";
import Slide from "../Slide";
import { fontMono, fontSora } from "@/config/fonts";
import { useResponsive } from "@/utils/hooks/useResponsive";

interface TechStackItem {
   desc: string;
   image: string;
}

interface FeatureSectionProps {
   title: string;
   description: string;
   status: string;
   imageUrl: string;
   scrollYProgress: MotionValue<number>;
   techStack: TechStackItem[];
   delay?: number;
   outputRangeLeft?: Array<number | string>;
   outputRangeRight?: Array<number | string>;
   inputRange?: Array<number>;
   rtl?: boolean;
   privateProject?: boolean;
   gitLink?: string;
   webLink?: string;
}

const ShowCaseItem: React.FC<FeatureSectionProps> = ({
   title,
   description,
   status,
   imageUrl,
   scrollYProgress,
   techStack,
   delay = 0,
   outputRangeRight = ["100%", "0%"],
   outputRangeLeft = ["-100%", "100%"],
   inputRange = [0, 1],
   rtl = false,
   privateProject = false,
   gitLink,
   webLink,
}) => {
   const isMobile = useResponsive("xs");

   const outputRight = useTransform(scrollYProgress, inputRange, outputRangeRight);
   const outputLeft = useTransform(scrollYProgress, inputRange, outputRangeLeft);

   return (
      <div
         className={clsx(
            "w-full flex flex-col lg:pb-40 justify-center max-h-[1300px] lg:max-h-inherit",
            rtl ? "md:flex-row-reverse" : "md:flex-row"
         )}
      >
         <Slide
            className="w-full md:w-1/2 py-20 lg:py-40 "
            delay={delay}
            direction={rtl ? "right" : "left"}
         >
            <motion.div
               transition={{ ease: "easeInOut", type: "inertia" }}
               style={{ translateX: outputLeft }}
            >
               <article className="pl-2 lg:px-10 w-80 lg:w-full">
                  <h2 className={clsx(fontSora.className, " lg:text-2xl")}>{title}</h2>
                  <div className="my-10">
                     <p className={clsx(fontMono.className, "text-tiny md:text-base text-left")}>
                        {description}
                     </p>

                     <div className="flex mt-4 items-center gap-4">
                        <label>Status:</label>
                        <Chip
                           size="sm"
                           color={
                              status.toLowerCase().includes("development") ? "warning" : "success"
                           }
                           variant="flat"
                        >
                           {status}
                        </Chip>
                     </div>

                     <div className="flex gap-4 flex-wrap mt-20">
                        {techStack.map((item) => (
                           <Chip
                              size={isMobile ? "sm" : "md"}
                              key={item.desc}
                              className="px-3 bg-background-900"
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

                     <div className="flex items-center gap-4 mt-10 justify-end">
                        {status.toLowerCase().includes("production") && (
                           <Button
                              color="primary"
                              variant="flat"
                              startContent={<LinkIcon />}
                              as={Link}
                              href={webLink}
                              target="_blank"
                           >
                              Visit
                           </Button>
                        )}
                        {status.toLowerCase().includes("production") && !privateProject ? (
                           <Button
                              startContent={<GithubIcon />}
                              as={Link}
                              href={gitLink}
                              target="_blank"
                           >
                              {privateProject ? "Private" : "Git"}
                           </Button>
                        ) : (
                           <Button
                              className="w-40"
                              startContent={<GithubIcon />}
                              disabled
                              endContent={<LockIcon />}
                           >
                              Private
                           </Button>
                        )}
                     </div>
                  </div>
               </article>
            </motion.div>
         </Slide>
         <Slide
            className="relative lg:mt-20 h-[960px] w-full pointer-events-none"
            delay={delay + 0.5}
            direction={rtl ? "right" : "left"}
         >
            <motion.div
               transition={{ ease: "easeInOut", type: "inertia", delay }}
               style={{ translateX: outputRight }}
               className="relative h-[480px] lg:mt-20 lg:h-[960px] w-full"
            >
               <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="2560px"
                  className="rounded-2xl object-cover object-left"
               />
            </motion.div>
         </Slide>
      </div>
   );
};

export default ShowCaseItem;
