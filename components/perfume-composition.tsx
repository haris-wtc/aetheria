"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";

type Note = {
  name: string;
  percentage: string;
  description: string;
  color: string;
  note: number;
};

interface PerfumeCompositionProps {
  showNotesInfo?: boolean;
}

export default function PerfumeComposition({
  showNotesInfo,
}: PerfumeCompositionProps) {
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const { suggestedIngredients } = useStore();
  const ingredients = suggestedIngredients();

  const allNotes = ingredients.reduce(
    (acc: any, current) => [
      ...acc,
      ...(current?.ingredients && Array.isArray(current.ingredients)
        ? current.ingredients.map((ingredient) => ({
            ...ingredient,
            note: `${current.note} note`,
          }))
        : []),
    ],
    []
  );

  // setting active note before user hover
  useEffect(() => {
    setActiveNote(allNotes[0])
  }, [])

  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      <div className="flex flex-col items-center w-[200px] mx-auto md:mx-0">
        {/* Bottle Cap */}
        <div className="relative w-16 h-8 rounded-t-lg bg-gray-500 z-10"></div>

        {/* Bottle Neck */}
        <div className="relative w-12 h-12 bg-[#e8d3bc] -mt-1"></div>

        {/* Bottle Shoulder - using borders to create the curved shape */}
        <div className="relative w-full flex justify-center">
          <div className="w-12 h-4 bg-[#e8d3bc]"></div>
        </div>
        <div className="relative w-full flex justify-center -mt-1">
          <div className="w-20 h-4 bg-[#e8d3bc] rounded-t-xl"></div>
        </div>
        <div className="relative w-full flex justify-center -mt-1">
          <div className="w-28 h-4 bg-[#e8d3bc] rounded-t-xl"></div>
        </div>

        {/* Bottle Body */}
        <div className="relative w-[160px] min-h-[240px] bg-[#e8d3bc] rounded-b-3xl shadow-md p-3">
          {allNotes.map((note: any, index: number) => (
            <div
              key={index}
              style={{ background: note.color }}
              className="w-full h-5 mb-2 cursor-pointer transition-all hover:opacity-80 hover:translate-x-1"
              onMouseEnter={() => setActiveNote(note)}
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        {activeNote && (
          <>
            <div className="mb-8">
              <h3 className="font-bold capitalize">
                {activeNote.note}
              </h3>
              <p className="mb-2">
                {activeNote.name} {activeNote.percentage}
              </p>
              <p className="text-gray-700">{activeNote.description}</p>
            </div>

            <div className="w-full h-px bg-black mb-8"></div>
          </>
        )}

        {showNotesInfo && (
          <>
            <p className="text-grey-800 mb-5">
              The <strong>top</strong> note is the first scent you smell when
              applying perfume; it’s light and fresh but fades quickly.
            </p>
            <p className="text-grey-800 mb-5">
              The <strong>middle</strong> note, or heart note, emerges after the
              top note fades and forms the main body of the fragrance.{" "}
            </p>
            <p className="text-grey-800 mb-5">
              The <strong>base</strong> note is the longest-lasting scent,
              providing depth and richness as the foundation of the perfume.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
