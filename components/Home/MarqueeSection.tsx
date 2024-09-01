import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import React from "react";
import Marquee from "../lib/Marquee";
import Image from "next/image";
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
      image: "/assets/svg/next.svg",
      desc: "Next",
   },
   {
      image: "/assets/images/css.png",
      desc: "CSS",
   },
   {
      image: "/assets/svg/sass.svg",
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

function MarqueeSection() {
   return (
      <SmoothScrollbar>
         {(bind) => (
            <div {...bind}>
               <Marquee reverse>
                  {data.map((slide, index) => (
                     <div key={index} className="relative w-20 h-20 mx-6">
                        <Image fill alt="icons" className="w-10" src={slide.image} />
                     </div>
                  ))}
               </Marquee>
               <Marquee>
                  <h2>Turning ideas into reality</h2>
               </Marquee>
               <Marquee reverse>
                  <h2>I don't have a Team, I am the Team!</h2>
               </Marquee>
            </div>
         )}
      </SmoothScrollbar>
   );
}

export default MarqueeSection;
