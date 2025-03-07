import { create } from "zustand";
import { Review } from "@/lib/contentful/types";
import { BottleDesign, Data, PerfumeSuggestion, UserInput } from "@/lib/types";

interface PerfumeState {
  userInput: UserInput;
  setUserInput: (data: UserInput) => void;
  data: Data;
  setData: (data: Data) => void;
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;

  // step 2
  bottleDesign: BottleDesign;
  setBottleDesign: (data: BottleDesign) => void;

  reset: () => void;
  step: number;
  setStep: (step: number) => void;
  suggestedIngredients: () => PerfumeSuggestion[];
  summary: () => string;
}

const initialState = {
  userInput: { text: "", image: "" },
  data: { summary: "", perfumeData: [] },
  bottleDesign: { choice: 0, text: "" },
  step: 1,
  reviews: [],
};

export const useStore = create<PerfumeState>()((set, get) => ({
  userInput: { text: "", image: "" },
  setUserInput: (data) =>
    set({ userInput: { text: data.text ?? "", image: data.image ?? "" } }),
  data: { summary: "", perfumeData: [] },
  setData: (data: Data) => set({ data }),
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
  bottleDesign: { choice: 0, text: "" },
  setBottleDesign: (data) =>
    set({
      bottleDesign: { choice: data.choice ?? 0, text: data.text ?? "" },
    }),
  reset: () => {
    set(initialState);
  },
  step: 1,
  setStep: (step) => set({ step }),
  suggestedIngredients: () => get().data?.perfumeData || [],
  summary: () => get().data?.summary || "",
}));
