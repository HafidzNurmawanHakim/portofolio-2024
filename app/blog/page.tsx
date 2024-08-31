import { title } from "@/components/primitives";
import CustomCursor from "../../components/lib/CustomCursor";

export default function BlogPage() {
   return (
      <div>
         <h1 className={title()}>
            <CustomCursor />
         </h1>
      </div>
   );
}
