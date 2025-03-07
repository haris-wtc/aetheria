import { useStore } from "@/store/useStore";

const PerfumeLegend = () => {
  const { suggestedIngredients } = useStore();
  const ingredients = suggestedIngredients();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {ingredients.map((noteType) => {
        return (
          <div className="p-4 border rounded-lg" key={noteType.note}>
            <h3 className="text-lg font-medium mb-2">{noteType.note}</h3>
            <ul className="space-y-2">
              {noteType.ingredients.map((ingredient) => {
                return (
                  <li key={ingredient.name} className="flex items-center">
                    <div
                      className="w-4 h-4 mr-2"
                      style={{ backgroundColor: ingredient.color }}
                    ></div>
                    <span>
                      {ingredient.name} ({ingredient.percentage})
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default PerfumeLegend;
