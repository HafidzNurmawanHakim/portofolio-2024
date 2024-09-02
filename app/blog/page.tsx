import CustomCursor from "../../components/lib/CustomCursor";

import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>
        <CustomCursor />
      </h1>
    </div>
  );
}
