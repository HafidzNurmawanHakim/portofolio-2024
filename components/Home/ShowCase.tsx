import clsx from "clsx";

import Container from "../Container";
import Slide from "../Slide";
import GradientText from "../lib/GradientText";
import { useSmoothScroll } from "../SmoothScroll";

import ShowCaseItem from "./ShowCaseItem";

import { fontFira } from "@/config/fonts";
import { useResponsive } from "@/utils/hooks/useResponsive";
import { ShowCaseItems } from "@/config/site";

function ShowCase() {
   const { scrollYProgress } = useSmoothScroll();
   const isMobile = useResponsive("xs");

   return (
      <Container className="max-w-full" id="project">
         <Slide className="mt-[4.5rem]" delay={0.5}>
            <div className="md:my-20">
               <h3 className={clsx(fontFira.className, "text-xl mb-4")}>Bab II</h3>
               <GradientText colors={["from-sky-500 from-30%", "to-emerald-500 to-90% "]}>
                  Show Case
               </GradientText>
            </div>
         </Slide>
         <div className="flex flex-col lg:gap-20">
            <ShowCaseItem
               description={ShowCaseItems.coffeePod.description}
               gitLink={ShowCaseItems.coffeePod.gitLink}
               imageUrl={ShowCaseItems.coffeePod.imageProject}
               inputRange={[1, 0]}
               outputRangeLeft={isMobile ? ["10%", "0%"] : ["50%", "0%"]}
               outputRangeRight={isMobile ? ["0%", "20%"] : ["0%", "50%"]}
               privateProject={ShowCaseItems.coffeePod.privateProject}
               scrollYProgress={scrollYProgress}
               status={ShowCaseItems.coffeePod.status}
               techStack={ShowCaseItems.coffeePod.techStack}
               title={ShowCaseItems.coffeePod.title}
               webLink={ShowCaseItems.coffeePod.webLink}
            />
            <ShowCaseItem
               rtl
               delay={1}
               description={ShowCaseItems.nevermind.description}
               gitLink={ShowCaseItems.nevermind.gitLink}
               imageUrl={ShowCaseItems.nevermind.imageProject}
               inputRange={[0, 1]}
               outputRangeLeft={isMobile ? ["0%", "10%"] : ["0%", "-80%"]}
               outputRangeRight={isMobile ? ["-20%", "0%"] : ["-80%", "0%"]}
               privateProject={ShowCaseItems.nevermind.privateProject}
               scrollYProgress={scrollYProgress}
               status={ShowCaseItems.nevermind.status}
               techStack={ShowCaseItems.nevermind.techStack}
               title={ShowCaseItems.nevermind.title}
               webLink={ShowCaseItems.nevermind.webLink}
            />
            <ShowCaseItem
               description={ShowCaseItems.portofolio.description}
               gitLink={ShowCaseItems.portofolio.gitLink}
               imageUrl={ShowCaseItems.portofolio.imageProject}
               inputRange={[1, 0]}
               outputRangeLeft={isMobile ? ["10%", "0%"] : ["50%", "0%"]}
               outputRangeRight={isMobile ? ["0%", "20%"] : ["0%", "80%"]}
               privateProject={ShowCaseItems.portofolio.privateProject}
               scrollYProgress={scrollYProgress}
               status={ShowCaseItems.portofolio.status}
               techStack={ShowCaseItems.portofolio.techStack}
               title={ShowCaseItems.portofolio.title}
               webLink={ShowCaseItems.portofolio.webLink}
            />
         </div>
      </Container>
   );
}

export default ShowCase;
