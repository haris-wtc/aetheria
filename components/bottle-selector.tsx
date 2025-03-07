"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from "@/store/useStore";

type Bottle = {
  id: number;
  size: string;
  price: number;
  image: string;
};

const bottles: Bottle[] = [
  {
    id: 0,
    size: "50ml",
    price: 99,
    image: "/images/bottle1.png",
  },
  {
    id: 1,
    size: "50ml",
    price: 99,
    image: "/images/bottle2.png",
  },
  {
    id: 2,
    size: "50ml",
    price: 99,
    image: "/images/bottle3.png",
  },
];

export default function BottleSelector() {
  const { bottleDesign, setBottleDesign } = useStore();
  const [selectedBottle, setSelectedBottle] = useState<number>(
    bottleDesign.choice ?? 0
  );
  const [bottleLabel, setBottleLabel] = useState<string>(
    bottleDesign.text ?? ""
  );

  useEffect(() => {
    setBottleDesign({ choice: selectedBottle, text: bottleLabel });
  }, [selectedBottle, bottleLabel]);

  return (
    <>
      <div className="mb-8">
        <Label htmlFor="perfume-label" className="block text-sm font-bold mb-3">
          The Label
        </Label>
        <Input
          type="text"
          id="perfume-label"
          placeholder="Give it a name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={bottleLabel}
          onChange={(e) => setBottleLabel(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-bold mb-3">The Bottle</h3>
        <div className="flex gap-4">
          {bottles.map((bottle) => (
            <div
              key={bottle.id}
              className={`relative overflow-hidden border w-[100px] h-[120px] flex flex-col items-center justify-between bg-white cursor-pointer transition-all ${
                selectedBottle === bottle.id
                  ? "border-black border-2"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => setSelectedBottle(bottle.id)}
            >
              <Image
                src={bottle.image || "/placeholder.svg"}
                alt={`Bottle option ${bottle.id}`}
                fill
                priority
              />
              <span className="text-sm absolute bottom-0 right-1">
                {bottle.size}
              </span>
              {bottleDesign.text && selectedBottle === bottle.id && (
                <span className="absolute w-full text-center text-[10px] overflow-hidden p-1 top-1/2 -translate-y-1/2 max-h-full leading-[10px]">
                  {bottleDesign.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
