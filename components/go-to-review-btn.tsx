import { useStore } from "@/store/useStore";

const GoToReviewBtn = () => {
  const { setStep } = useStore();

  return (
    <div className="w-full">
      <div className="mt-auto flex flex-col gap-4">
        <button
          className="w-full p-4 bg-indigo-600 text-white rounded-md text-lg font-medium disabled:opacity-75"
          onClick={() => setStep(3)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GoToReviewBtn;
