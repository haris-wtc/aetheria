import { useStore } from "@/store/useStore";

const PerfumeIngredients = () => {
  const { suggestedIngredients } = useStore();

  const getAllIngredients = () => {
    return suggestedIngredients()
      .reduce(
        (acc: any, current) => [
          ...acc,
          ...(current?.ingredients && Array.isArray(current.ingredients)
            ? current.ingredients.map((ingredient) => ingredient.name)
            : []),
        ],
        []
      )
      .join(", ");
  };

  return (
    <div className="mb-8">
      <h3 className="font-bold mb-3">Ingredient list:</h3>
      <p className="text-gray-400">{getAllIngredients()}</p>
    </div>
  );
};

export default PerfumeIngredients;
