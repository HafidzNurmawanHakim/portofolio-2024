import clsx from "clsx";
import Container from "../Container";
import Slide from "../Slide";
import { fontFira, fontMono, fontSora } from "@/config/fonts";
import GradientText from "../lib/GradientText";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useSmoothScroll } from "../SmoothScroll";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { GithubIcon, LockIcon } from "../icons";
import ShowCaseItem from "./ShowCaseItem";

const ShowCaseItems = {
   coffeePod: {
      title: "Coffee Pod",
      description: `Coffee Pod is an intuitive platform that streamlines coffee shop and food
                           court management. It allows owners to easily update menus, manage hours,
                           and communicate with customers, all from one interface. By enhancing
                           online visibility and simplifying operations, Coffee Pod helps businesses
                           focus on delivering exceptional service and optimizing daily tasks.`,
      status: "Under Development",
      privateProject: true,
      gitLink: "",
      webLink: "",
      imageProject: "/assets/images/coffee-pod_lp.png",
      techStack: [
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
            image: "/assets/images/express.png",
            desc: "Express",
         },
         {
            image: "/assets/images/nestjs.png",
            desc: "Nest Js",
         },
      ],
   },
   nevermind: {
      title: "Nevermind",
      description: `Nevermind is a platform that highlights and supports my freelance work as a fullstack engineer on Upwork. I offer a range of development services, from responsive web apps to robust APIs, reflecting my commitment to excellence and innovation.`,
      status: "Production",
      privateProject: true,
      gitLink: "",
      webLink: "https://nevermind.id",
      imageProject: "/assets/images/nevermind_lp.png",
      techStack: [
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
            image: "/assets/images/express.png",
            desc: "Express",
         },
         {
            image: "/assets/images/nestjs.png",
            desc: "Nest Js",
         },
      ],
   },
};

function ShowCase() {
   const { scrollYProgress } = useSmoothScroll();

   return (
      <Container className="max-w-full">
         <Slide delay={0.5} className="mt-[4.5rem]">
            <div className="my-20">
               <h3 className={clsx(fontFira.className, "text-xl mb-4")}>Bab II</h3>
               <GradientText colors={["from-sky-500 from-30%", "to-emerald-500 to-90% "]}>
                  Show Case
               </GradientText>
            </div>
         </Slide>
         <div className="flex flex-col gap-20">
            <ShowCaseItem
               imageUrl={ShowCaseItems.coffeePod.imageProject}
               status={ShowCaseItems.coffeePod.status}
               title={ShowCaseItems.coffeePod.title}
               description={ShowCaseItems.coffeePod.description}
               techStack={ShowCaseItems.coffeePod.techStack}
               scrollYProgress={scrollYProgress}
               outputRangeLeft={["50%", "0%"]}
               outputRangeRight={["0%", "50%"]}
               inputRange={[1, 0]}
               gitLink={ShowCaseItems.coffeePod.gitLink}
               webLink={ShowCaseItems.coffeePod.webLink}
               privateProject={ShowCaseItems.coffeePod.privateProject}
            />
            <ShowCaseItem
               imageUrl={ShowCaseItems.nevermind.imageProject}
               status={ShowCaseItems.nevermind.status}
               title={ShowCaseItems.nevermind.title}
               description={ShowCaseItems.nevermind.description}
               techStack={ShowCaseItems.nevermind.techStack}
               scrollYProgress={scrollYProgress}
               delay={1}
               outputRangeLeft={["0%", "-80%"]}
               outputRangeRight={["-80%", "0%"]}
               inputRange={[0, 1]}
               rtl
               gitLink={ShowCaseItems.nevermind.gitLink}
               webLink={ShowCaseItems.nevermind.webLink}
               privateProject={ShowCaseItems.nevermind.privateProject}
            />
         </div>
      </Container>
   );
}

export default ShowCase;
