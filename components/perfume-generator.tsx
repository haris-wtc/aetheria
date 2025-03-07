import { LeftPanel } from "@/components/left-panel";
import { RightPanel } from "@/components/right-panel";

export default function PerfumeGenerator() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative">
      {/* Left Panel */}
      <div className="w-full lg:w-1/3 lg:min-w-[428px] p-6 lg:p-8 flex flex-col lg:bg-[#FEFAF3]">
        <LeftPanel />
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-2/3 relative lg:static">
        <RightPanel />
      </div>
    </div>
  );
}
