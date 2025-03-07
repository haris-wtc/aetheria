export interface Ingredient {
  name: string;
  description: string;
  reason: string;
  percentage: string;
  color: string;
}

export interface UserInput {
  text?: string;
  image?: string | null;
}

export interface BottleDesign {
  choice: number;
  text: string;
}

export interface PerfumeSuggestion {
  note: "top" | "middle" | "base";
  ingredients: Ingredient[];
}

export interface Data {
  summary: string;
  perfumeData: PerfumeSuggestion[];
}
