import { cn } from "@/lib/utils";
import Hero from "./Hero";
import PortfolioContainer from "./PortFolioCard";
import MyProjects from "./MyProjects";

export function DotBackgroundDemo({setActiveComponent}) {
  return (
    <div
      className="relative flex  w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )} />
      <div>
      <Hero/>
      <PortfolioContainer setActiveComponent={setActiveComponent}/>
      <MyProjects setActiveComponent={setActiveComponent}/>
      </div>
    </div>
  );
}
