import Image from "next/image";
import { useStore } from "@/store/useStore";

const PerfumeInputOptions = () => {
  const { summary } = useStore();
  const story = summary();

  if (!story) return null;

  return (
    <div className="mb-8">
      <h3 className="text-sm font-bold mb-2">Your story</h3>
      <p className="text-gray-700">{story}</p>
    </div>
  );
};

export default PerfumeInputOptions;
