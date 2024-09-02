export type SiteConfig = typeof siteConfig;

export const siteConfig = {
   name: "Hafidz Portofolio",
   description: "Make beautiful websites regardless of your design experience.",
   navItems: [
      {
         label: "Home",
         href: "/",
      },
      {
         label: "About",
         href: "#about",
      },
      {
         label: "Project",
         href: "#project",
      },
      {
         label: "Contact",
         href: "#contact",
      },
   ],
   navMenuItems: [
      {
         label: "Home",
         href: "/",
      },
      {
         label: "About",
         href: "#about",
      },
      {
         label: "Project",
         href: "#project",
      },
      {
         label: "Contact",
         href: "#contact",
      },
   ],
   links: {
      github: "https://github.com/hafidznurmawanhakim",
      twitter: "https://twitter.com/getnextui",
      docs: "https://nextui.org",
      discord: "https://discord.gg/9b6yyZKmH4",
      sponsor: "https://patreon.com/jrgarciadev",
   },
};

export const ShowCaseItems = {
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
   portofolio: {
      title: "Hafidz-Portofolio",
      description: `My latest portfolio is built using TypeScript, Next.js, Tailwind CSS and Next UI. The site was designed with a focus on performance and aesthetics, featuring smooth animations using Framer Motion for a more dynamic user experience. This project reflects my expertise in modern front-end development and includes a showcase of some of my best projects.`,
      status: "Production",
      privateProject: false,
      gitLink: "https://github.com/HafidzNurmawanHakim/portofolio-2024",
      webLink: "https://hafidznurmawan-dev.my.id",
      imageProject: "/assets/images/hafidznurmawan.png",
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
            image: "/assets/svg/framer-motion.svg",
            desc: "Framer Motion",
         },
      ],
   },
};

export const techData = [
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
