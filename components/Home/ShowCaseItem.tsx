import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { GithubIcon, LinkIcon, LockIcon } from "../icons";
import Link from "next/link";
import Slide from "../Slide";
import { fontMono } from "@/config/fonts";

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
   const outputRight = useTransform(scrollYProgress, inputRange, outputRangeRight);
   const outputLeft = useTransform(scrollYProgress, inputRange, outputRangeLeft);

   return (
      <div
         className={clsx(
            "w-full flex flex-col  justify-center",
            rtl ? "md:flex-row-reverse" : "md:flex-row"
         )}
      >
         <Slide className="w-full md:w-1/2 py-40" delay={delay} direction={rtl ? "right" : "left"}>
            <motion.div
               transition={{ ease: "easeInOut", type: "inertia" }}
               style={{ translateX: outputLeft }}
            >
               <article className="px-10">
                  <h2 className={clsx("font-sora", "text-2xl")}>{title}</h2>
                  <div className="my-10">
                     <p className={clsx(fontMono.className, "text-left")}>{description}</p>

                     <div className="flex mt-4">
                        <label>Status: {status}</label>
                     </div>

                     <div className="flex gap-4 flex-wrap mt-20">
                        {techStack.map((item) => (
                           <Chip
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
                        <Chip
                           color={
                              status.toLowerCase().includes("development") ? "warning" : "success"
                           }
                           variant="flat"
                        >
                           {status}
                        </Chip>
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
                              className="w-40"
                              startContent={<GithubIcon />}
                              as={Link}
                              href={gitLink}
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
            className="relative mt-20 h-[960px] w-full"
            delay={delay + 0.5}
            direction={rtl ? "right" : "left"}
         >
            <motion.div
               transition={{ ease: "easeInOut", type: "inertia", delay }}
               style={{ translateX: outputRight }}
               className="relative mt-20 h-[960px] w-full"
            >
               <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="1920px"
                  className="rounded-2xl object-cover object-left"
               />
            </motion.div>
         </Slide>
      </div>
   );
};

export default ShowCaseItem;
