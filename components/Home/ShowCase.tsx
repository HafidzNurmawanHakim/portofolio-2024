import clsx from "clsx";
import Container from "../Container";
import Slide from "../Slide";
import { fontFira } from "@/config/fonts";
import GradientText from "../lib/GradientText";

import { useSmoothScroll } from "../SmoothScroll";

import ShowCaseItem from "./ShowCaseItem";
import { useResponsive } from "@/utils/hooks/useResponsive";
import { ShowCaseItems } from "@/config/site";

function ShowCase() {
   const { scrollYProgress } = useSmoothScroll();
   const isMobile = useResponsive("xs");

   return (
      <Container id="project" className="max-w-full">
         <Slide delay={0.5} className="mt-[4.5rem]">
            <div className="lg:my-20">
               <h3 className={clsx(fontFira.className, "text-xl mb-4")}>Bab II</h3>
               <GradientText colors={["from-sky-500 from-30%", "to-emerald-500 to-90% "]}>
                  Show Case
               </GradientText>
            </div>
         </Slide>
         <div className="flex flex-col lg:gap-20">
            <ShowCaseItem
               imageUrl={ShowCaseItems.coffeePod.imageProject}
               status={ShowCaseItems.coffeePod.status}
               title={ShowCaseItems.coffeePod.title}
               description={ShowCaseItems.coffeePod.description}
               techStack={ShowCaseItems.coffeePod.techStack}
               scrollYProgress={scrollYProgress}
               outputRangeLeft={["50%", "0%"]}
               outputRangeRight={isMobile ? ["0%", "20%"] : ["0%", "50%"]}
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
               outputRangeLeft={isMobile ? ["0%", "20%"] : ["0%", "-80%"]}
               outputRangeRight={isMobile ? ["-20%", "0%"] : ["-80%", "0%"]}
               inputRange={[0, 1]}
               rtl
               gitLink={ShowCaseItems.nevermind.gitLink}
               webLink={ShowCaseItems.nevermind.webLink}
               privateProject={ShowCaseItems.nevermind.privateProject}
            />
            <ShowCaseItem
               imageUrl={ShowCaseItems.portofolio.imageProject}
               status={ShowCaseItems.portofolio.status}
               title={ShowCaseItems.portofolio.title}
               description={ShowCaseItems.portofolio.description}
               techStack={ShowCaseItems.portofolio.techStack}
               scrollYProgress={scrollYProgress}
               outputRangeLeft={isMobile ? ["20%", "0%"] : ["50%", "0%"]}
               outputRangeRight={isMobile ? ["0%", "20%"] : ["0%", "80%"]}
               inputRange={[1, 0]}
               gitLink={ShowCaseItems.portofolio.gitLink}
               webLink={ShowCaseItems.portofolio.webLink}
               privateProject={ShowCaseItems.portofolio.privateProject}
            />
         </div>
      </Container>
   );
}

export default ShowCase;
