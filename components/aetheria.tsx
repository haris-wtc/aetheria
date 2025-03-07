import { ArrowLeft } from "lucide-react";
import { useStore } from "@/store/useStore";

const Aetheria = () => {
  const { step, setStep } = useStore();

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setStep(1);
  };

  const onBackHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (step === 1) return;

    setStep(step - 1);
  };

  return (
    <div className="flex gap-3 justify-between">
      <a
        href="#"
        className="text-xl font-medium no-underline"
        onClick={onClickHandler}
      >
        Aetheria
      </a>
      {step > 1 && (
        <a
          href="#"
          className="text-xl font-medium no-underline"
          onClick={onBackHandler}
        >
          <ArrowLeft />
        </a>
      )}
    </div>
  );
};

export default Aetheria;
