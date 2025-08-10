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
      {/* Radial gradient for the container to give a faded look */}
      <div>
      <Hero/>
      <PortfolioContainer setActiveComponent={setActiveComponent}/>
      <MyProjects setActiveComponent={setActiveComponent}/>
      
      </div>

      {/* <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]bg-black"></div> */}
      {/* <p
        className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
      </p> */}
    </div>
  );
}
