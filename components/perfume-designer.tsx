import PerfumeComposition from "@/components/perfume-composition";
import BottleSelector from "@/components/bottle-selector";
import PerfumeIngredients from "@/components/perfume-ingredients";
import PerfumeInputOptions from "@/components/perfume-input-options";
import PerfumeInputText from "@/components/perfume-input-text";
import GoToReviewBtn from "@/components/go-to-review-btn";
import PerfumeLegend from "@/components/perfume-legend";
import Aetheria from "@/components/aetheria";

export default function PerfumeDesigner() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Column */}
      <div className="w-full md:w-1/3 md:min-w-[428px] p-6 lg:p-8 flex flex-col bg-[#FEFAF3]">
        <div className="mb-8">
          <Aetheria />
        </div>

        <PerfumeIngredients />

        <PerfumeInputOptions />

        <PerfumeInputText />

        <BottleSelector />

        <GoToReviewBtn />
      </div>

      {/* Right Column */}
      <div className="w-full md:w-2/3 p-8 md:p-12">
        <div className="m-auto max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
              The composition of your perfume:
            </h2>
            <p className="text-gray-700">
              Hover over your perfume to learn about what is in your bottle?
            </p>
          </div>

          <PerfumeComposition showNotesInfo={true} />

          <div className="mt-10">
            <PerfumeLegend />
          </div>
        </div>
      </div>
    </div>
  );
}
