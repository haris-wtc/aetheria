import { LeftPanel } from "@/components/left-panel";
import { RightPanel } from "@/components/right-panel";

export default function PerfumeGenerator() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 md:min-w-[428px] p-6 lg:p-8 flex flex-col md:bg-[#FEFAF3]">
        <LeftPanel />
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 relative md:static">
        <RightPanel />
      </div>
    </div>
  );
}
