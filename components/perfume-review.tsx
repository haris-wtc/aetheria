"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PerfumeComposition from "@/components/perfume-composition";
import Aetheria from "@/components/aetheria";
import SuccessMessage from "@/components/success-message";
import { useStore } from "@/store/useStore";

export function PerfumeReview() {
  const { setStep } = useStore();
  const [shippingInfo, setShippingInfo] = useState({
    place: "",
    streetName: "",
    title: "Ms",
    name: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const { place, streetName, name } = shippingInfo;
    setIsFormValid(place !== "" && streetName !== "" && name !== "");
  }, [shippingInfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleTitleChange = (value: string) => {
    setShippingInfo((prev) => ({ ...prev, title: value }));
  };

  const onSubmitHandler = () => {
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 md:min-w-[428px] p-6 lg:p-8 flex flex-col">
        <div className="mb-8">
          <Aetheria />
        </div>

        <div className="mb-8">
          <h2 className="text-sm font-bold mb-4">Your story</h2>
          <p className="mb-4">
            Thank you for capturing this personal story in a bottle.
          </p>
          <p className="mb-4">
            It deserves a beautiful label and place in your life.
          </p>
          <p>This beautiful present will be shipped within 6 working days.</p>
        </div>

        <div className="mt-8 flex justify-center">
          <PerfumeComposition />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-6 lg:p-8 flex flex-col bg-[#FEFAF3]">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-[24px] font-bold mb-8">Your story, Bottled!</h2>

          <div className="mb-8">
            <div className="flex justify-between py-2">
              <span>Total price of the perfume</span>
              <span className="font-medium">€ 119.99</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Discount applied</span>
              <span className="font-medium">€ 10.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Tax estimation</span>
              <span className="font-medium">€ 2.00</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-200 mt-2 pt-2">
              <span className="font-semibold">Total costs</span>
              <span className="font-semibold">€ 111.99</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-4">Shipping address</h3>

            <div className="mb-4">
              <RadioGroup
                value={shippingInfo.title}
                onValueChange={handleTitleChange}
                className="flex gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Ms" id="ms" />
                  <Label htmlFor="ms">Ms</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Mr" id="mr" />
                  <Label htmlFor="mr">Mr</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mb-4">
              <Input
                id="name"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                className="mt-1"
                required
                placeholder="First & Last name"
              />
            </div>

            <div className="mb-4">
              <Input
                id="place"
                name="place"
                value={shippingInfo.place}
                onChange={handleInputChange}
                className="mt-1"
                required
                placeholder="Place"
              />
            </div>

            <div className="mb-4">
              <Input
                id="streetName"
                name="streetName"
                value={shippingInfo.streetName}
                onChange={handleInputChange}
                className="mt-1"
                required
                placeholder="Street name"
              />
            </div>

            <div className="flex flex-col items-start gap-4 mt-12">
              <a
                href="#"
                className="text-indigo-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(2);
                }}
              >
                Review & Edit
              </a>
              {!submitted ? (
                <button
                  className="p-4 bg-indigo-600 text-white rounded-md text-lg font-medium disabled:opacity-75"
                  disabled={!isFormValid}
                  onClick={onSubmitHandler}
                >
                  Proceed to Checkout
                </button>
              ) : (
                <SuccessMessage />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
