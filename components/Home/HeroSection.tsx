import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import Container from "../Container";

import { useResponsive } from "@/utils/hooks/useResponsive";
import { fontFira, fontSora } from "@/config/fonts";

function HeroSection() {
   const isMobile = useResponsive("xs");

   return (
      <Container className="" id="home">
         <div className="absolute wave left-0 w-screen h-screen overflow-hidden bottom-0 top-0 right-0 " />
         <div className="absolute backdrop-blur-3xl  left-0 w-screen h-screen overflow-hidden bottom-0 top-0 right-0 z-10" />
         <div className="relative z-30">
            <div className=" w-full text-start pl-10 md:pl-32">
               <p className={clsx(fontFira.className, "text-sm md:text-xl  mr-10")}>
                  <TypeAnimation
                     repeat={Infinity}
                     sequence={["Hey There, My Name Is", 1000]}
                     speed={50}
                  />
               </p>
               <div
                  className="flex flex-col lg:flex-row lg:items-center  w-full"
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
               >
                  <div className="flex ">
                     <h2
                        className={clsx(
                           "text-6xl md:text-[6rem] mt-4 text-start font-semibold flex",
                           fontSora.className
                        )}
                        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                     >
                        Haf
                        <motion.span
                           animate={{
                              rotateX: [0, 180, 360, 540],
                           }}
                           style={{
                              transformStyle: "preserve-3d",
                           }}
                           transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                              repeatType: "reverse",
                              repeatDelay: 8,
                              delay: 0.3,
                           }}
                        >
                           i
                        </motion.span>
                        d
                        <motion.span
                           animate={{ opacity: 1, y: "0" }}
                           initial={{ opacity: 0, y: "10px" }}
                           transition={{
                              type: "spring",
                              bounce: 1,
                              duration: 4,
                              delay: 1.8,
                           }}
                        >
                           z
                        </motion.span>
                     </h2>
                     <motion.span
                        animate={{ rotate: "90deg", translateX: "10px" }}
                        className="mt-5"
                        initial={{ translateX: "-56px" }}
                        transition={{
                           duration: 0.8,
                           delay: 0.8,
                           rotate: { repeat: Infinity, duration: 1, repeatDelay: 8 },
                        }}
                     >
                        <Image
                           alt="propller"
                           height={60}
                           src={"/assets/svg/propeller.svg"}
                           width={60}
                        />
                     </motion.span>
                  </div>
                  <span
                     className={clsx(fontFira.className, "lg:ml-10 mb-0 self-start mt-4 lg:mt-16")}
                  >
                     <TypeAnimation
                        repeat={Infinity}
                        sequence={["const imA = () => {", 1000]}
                        speed={50}
                     />
                  </span>
               </div>
               <div className="pt-4">
                  <h1
                     className={clsx(
                        "text-end lg:text-start mr-10 lg:mr-inherit text-7xl md:text-[9rem] font-bold",
                        fontSora.className
                     )}
                  >
                     Full{" "}
                     <motion.span
                        animate={{ color: "gray" }}
                        className="w-fit relative z-10 "
                        initial={{ color: "white" }}
                        transition={{
                           duration: 0.5,
                           delay: 2,
                           repeat: Infinity,
                           repeatType: "reverse",
                           repeatDelay: 10,
                        }}
                     >
                        Stack{" "}
                        <motion.span
                           animate={{ left: 0, right: 0, opacity: 1 }}
                           className="h-2 absolute bg-white top-[50%]"
                           initial={{ left: 0, opacity: 0 }}
                           transition={{
                              duration: 1,
                              delay: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              repeatDelay: 10,
                           }}
                        />
                     </motion.span>
                     <motion.span
                        animate={{ left: 0, opacity: 1 }}
                        className="w-fit z-0 relative"
                        initial={{ left: -450, opacity: 0 }}
                        transition={{
                           duration: 1,
                           delay: 3,
                           repeat: Infinity,
                           repeatType: "reverse",
                           repeatDelay: 10,
                        }}
                     >
                        Stress
                     </motion.span>
                  </h1>
               </div>
               <div>
                  <h2
                     className={clsx(
                        "ml-10 lg:ml-inherit text-3xl lg:text-[3rem] font-semibold",
                        fontSora.className
                     )}
                  >
                     Developer
                  </h2>
               </div>
            </div>
            <div className="w-full flex items-center gap-10 mt-20 md:mt-32 justify-center flex-col">
               <p className={clsx("md:text-xl", fontFira.className)}>
                  Want to make me more stressed?
               </p>
               <Button
                  as={Link}
                  className="bg-[#30eee233] border-[#30eee2]"
                  href="#contact"
                  size={isMobile ? "sm" : "md"}
                  variant="bordered"
               >
                  Hire Me
               </Button>
            </div>
         </div>
      </Container>
   );
}

export default HeroSection;
