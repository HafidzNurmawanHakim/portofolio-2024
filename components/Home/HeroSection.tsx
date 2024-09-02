import clsx from "clsx";
import Container from "../Container";
import { fontFira, fontSora } from "@/config/fonts";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useResponsive } from "@/utils/hooks/useResponsive";
import { Link } from "@nextui-org/link";

function HeroSection() {
   const isMobile = useResponsive("xs");
   return (
      <Container id="home" className="">
         <div className="absolute wave left-0 max-w-screen h-screen overflow-hidden bottom-0 top-0 right-0"></div>
         <div className="w-full text-start pl-10 md:pl-32">
            <p className={clsx(fontFira.className, "text-sm md:text-xl  mr-10")}>
               <TypeAnimation
                  sequence={["Hey There, My Name Is", 1000]}
                  speed={50}
                  repeat={Infinity}
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
                        transition={{
                           duration: 1,
                           repeat: Infinity,
                           ease: "easeInOut",
                           repeatType: "reverse",
                           repeatDelay: 8,
                           delay: 0.3,
                        }}
                        style={{
                           transformStyle: "preserve-3d",
                        }}
                     >
                        i
                     </motion.span>
                     d
                     <motion.span
                        initial={{ opacity: 0, y: "10px" }}
                        animate={{ opacity: 1, y: "0" }}
                        transition={{ type: "spring", bounce: 1, duration: 4, delay: 1.8 }}
                     >
                        z
                     </motion.span>
                  </h2>
                  <motion.span
                     initial={{ translateX: "-56px" }}
                     animate={{ rotate: "90deg", translateX: "10px" }}
                     transition={{
                        duration: 0.8,
                        delay: 0.8,
                        rotate: { repeat: Infinity, duration: 1, repeatDelay: 8 },
                     }}
                     className="mt-5"
                  >
                     <Image
                        src={"/assets/svg/propeller.svg"}
                        width={60}
                        height={60}
                        alt="propller"
                     />
                  </motion.span>
               </div>
               <span className={clsx(fontFira.className, "lg:ml-10 mb-0 self-start mt-4 lg:mt-16")}>
                  <TypeAnimation
                     sequence={["const imA = () => {", 1000]}
                     speed={50}
                     repeat={Infinity}
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
                     className="w-fit relative z-10 "
                     initial={{ color: "white" }}
                     animate={{ color: "gray" }}
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
                        className="h-2 absolute bg-white top-[50%]"
                        initial={{ left: 0, opacity: 0 }}
                        animate={{ left: 0, right: 0, opacity: 1 }}
                        transition={{
                           duration: 1,
                           delay: 2,
                           repeat: Infinity,
                           repeatType: "reverse",
                           repeatDelay: 10,
                        }}
                     ></motion.span>
                  </motion.span>
                  <motion.span
                     className="w-fit z-0 relative"
                     initial={{ left: -450, opacity: 0 }}
                     animate={{ left: 0, opacity: 1 }}
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
            <p className={clsx("md:text-xl", fontFira.className)}>Want to make me more stressed?</p>
            <Button
               size={isMobile ? "sm" : "md"}
               className="bg-[#30eee233] border-[#30eee2]"
               variant="bordered"
               as={Link}
               href="#contact"
            >
               Hire Me
            </Button>
         </div>
      </Container>
   );
}

export default HeroSection;
