import Image from "next/image";
import { useStore } from "@/store/useStore";

const PerfumeInputOptions = () => {
  const { userInput } = useStore();

  if (!userInput?.image) return null;

  return (
    <div className="flex gap-3 mb-8">
      <div className="w-full h-auto max-w-[60px] aspect-square rounded-full flex items-center justify-center mb-2 relative overflow-hidden">
        <Image
          src={userInput.image!}
          alt="Uploaded photo"
          width={60}
          height={60}
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default PerfumeInputOptions;
