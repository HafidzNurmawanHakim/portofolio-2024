import Container from "../Container";
import { motion } from "framer-motion";
import GradientText from "../lib/GradientText";
import Image from "next/image";
import CardAbout1 from "./CardAbout1";
import CardSkill from "./CardSkill";
import clsx from "clsx";
import { fontFira } from "@/config/fonts";

function AboutSection() {
   return (
      <Container id="about" className="">
         <div className="absolute top-0 left-0 mt-[4.5rem] right-0 bottom-0 bg-gradient-to-t from-background from-10% via-transparent via-90% z-30"></div>
         <div className="flex left-0 z-10 absolute gap-10 top-0 mt-[4.5rem]">
            <svg
               width="954"
               height="933"
               viewBox="0 0 954 933"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <motion.path
                  d="M1 -10C13.8483 87 9.56555 183.5 97.6684 236C185.771 288.5 319.108 316.818 415.206 341C623.838 393.5 752.322 471 801.268 529.5C850.214 588 885.088 646.5 900.383 731C914.863 810.993 914.455 832.5 914.455 914.5C914.455 923.092 914.455 936.5 914.455 936.5"
                  stroke="transparent"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.001, stroke: "transparent" }}
                  whileInView={{ pathLength: 1, stroke: "#30eee233" }}
                  transition={{ duration: 4, yoyo: Infinity, ease: "easeInOut", delay: 2 }}
               />
               <motion.path
                  d="M169.251 -10C182.1 87 177.817 183.5 265.92 236C354.023 288.5 507.23 325.171 600.588 365C814.727 456.356 867.956 558 867.956 558C891.817 595.5 943.211 706.5 948.105 804C952.161 884.795 953 887 953 930.5"
                  stroke="transparent"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.001, stroke: "transparent" }}
                  whileInView={{ pathLength: 1, stroke: "#30eee233" }}
                  transition={{ duration: 4, yoyo: Infinity, ease: "easeInOut", delay: 1 }}
               />
            </svg>
            <svg
               width="896"
               height="933"
               viewBox="0 0 896 933"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <motion.path
                  d="M895 -3C882.921 93.9488 886.947 190.398 804.118 242.87C721.288 295.342 595.932 323.646 505.586 347.815C309.442 400.287 188.649 477.746 142.632 536.215C96.6158 594.684 63.8292 653.153 49.449 737.609C35.836 817.559 36.2193 839.055 36.2193 921.012C36.2193 929.599 36.2193 943 36.2193 943"
                  stroke="transparent"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.001, stroke: "transparent" }}
                  whileInView={{ pathLength: 1, stroke: "#30eee233" }}
                  transition={{ duration: 4, yoyo: Infinity, ease: "easeInOut", delay: 2 }}
               />
               <motion.path
                  d="M737.873 -3C725.793 93.948 729.819 190.396 646.986 242.868C564.152 295.34 420.108 331.992 332.334 371.799C131.002 463.106 80.957 564.696 80.957 564.696C58.523 602.176 10.2034 713.116 5.60158 810.564C1.78815 891.316 0.999719 886.523 0.999719 930"
                  stroke="transparent"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.001, stroke: "transparent" }}
                  whileInView={{ pathLength: 1, stroke: "#30eee233" }}
                  transition={{ duration: 4, yoyo: Infinity, ease: "easeInOut", delay: 1 }}
               />
            </svg>
         </div>
         <div className="relative z-40 ">
            <h3 className={clsx(fontFira.className, "text-xl mb-4")}>Bab I</h3>
            <GradientText colors={["from-sky-500 from-30%", "to-emerald-500 to-90%"]}>
               About Me
            </GradientText>
            <section className="max-w-6xl mt-6 lg:mt-20 mx-auto p-10">
               <div className="flex flex-col gap-4 lg:grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="row-span-2">
                     <Image
                        src={"/assets/images/me.webp"}
                        alt=""
                        width={600}
                        height={800}
                        sizes="600px"
                        className="grayscale hover:grayscale-0 rounded-xl transition-all duration-600 bg-gradient-to-r from-background-700 to-background-900 rounded-sm"
                     />
                  </div>
                  <CardAbout1 />
                  <div className="col-start-2 row-start-2">
                     <CardSkill />
                  </div>
               </div>
            </section>
         </div>
      </Container>
   );
}

export default AboutSection;
