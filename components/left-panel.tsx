"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import Image from "next/image";
import { Loader, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Aetheria from "@/components/aetheria";
import { useStore } from "@/store/useStore";
import { CHAT_STATUS, scenario } from "@/config";
import { UIMessage } from "ai";

export function LeftPanel() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const submittedRef = useRef<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    initialMessages: [
      {
        id: "system-1",
        role: "system",
        content: scenario,
      },
    ],
  });

  const { toast } = useToast();
  const { setData, setUserInput, setStep } = useStore();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = () => {
    setImagePreview(null);
    setFiles(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    submittedRef.current = true;

    handleSubmit(e, {
      experimental_attachments: files,
      allowEmptySubmit: true,
    });
  };

  const onImageIconClick = () => {
    toast({
      description: "Feature will be added in near future.",
      variant: "destructive",
    });
  };

  useEffect(() => {
    if (!submittedRef.current) return;

    // ai success response
    if (status === CHAT_STATUS.ready) {
      const lastAiMessage = messages
        .filter((message: UIMessage) => message.role === "assistant")
        .pop();

      if (lastAiMessage) {
        const data = JSON.parse(lastAiMessage.content);

        if (data) {
          setData(data);
          setUserInput({ text: input, image: imagePreview });
          setStep(2);
        }

        // insufficent input
        else {
          toast({
            title: "Insufficient data",
            description:
              "Please check the provided input and try to be as precise as possible.",
            variant: "destructive",
          });
        }

        submittedRef.current = false;
      }
    }

    if (status === CHAT_STATUS.error) {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });

      submittedRef.current = false;
    }
  }, [status]);

  return (
    <>
      <div className="mb-8">
        <Aetheria />
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold leading-tight">
          Your story,
          <br />
          Bottled!
        </h1>
      </div>

      <p className="text-md text-[16px] mb-6">
        Put in any type of info as ingredients for your personal sent.
      </p>

      <form onSubmit={handleFormSubmit}>
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Summer holiday, Fresh morning Incense, Breeze, ..."
          className="min-h-[120px] text-gray-600 border-gray-300 rounded-md mb-8 resize-none"
        />

        <div className="mb-8">
          <p className="text-md text-[16px] mb-4">
            Upload the photo of the moment
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="flex flex-col items-center opacity-50">
              <div className="w-full h-auto max-w-[60px] aspect-square rounded-full flex items-center justify-center mb-2 overflow-hidden cursor-pointer">
                <Image
                  src="images/color.svg"
                  alt="Color icon"
                  width={60}
                  height={60}
                  className="w-full h-full"
                  priority
                  onClick={onImageIconClick}
                />
              </div>
              <span className="text-sm">Color</span>
            </div>

            <div className="flex flex-col items-center opacity-50">
              <div className="w-full h-auto max-w-[60px] aspect-square rounded-full flex items-center justify-center mb-2 overflow-hidden cursor-pointer">
                <Image
                  src="images/music.svg"
                  alt="Music icon"
                  width={60}
                  height={60}
                  className="w-full h-full"
                  priority
                  onClick={onImageIconClick}
                />
              </div>
              <span className="text-sm">Music</span>
            </div>

            <div className="flex flex-col items-center opacity-50">
              <div className="w-full h-auto max-w-[60px] aspect-square rounded-full flex items-center justify-center mb-2 overflow-hidden cursor-pointer">
                <Image
                  src="images/location.svg"
                  alt="Location icon"
                  width={60}
                  height={60}
                  className="w-full h-full"
                  priority
                  onClick={onImageIconClick}
                />
              </div>
              <span className="text-sm">Location</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full h-auto max-w-[60px] aspect-square rounded-full flex items-center justify-center mb-2 relative overflow-hidden">
                {imagePreview ? (
                  <>
                    <Image
                      src={imagePreview || "/placeholder.svg"}
                      alt="Uploaded photo"
                      width={60}
                      height={60}
                      className="w-full h-full rounded-full"
                    />
                    <button
                      onClick={resetImage}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </>
                ) : (
                  <label className="cursor-pointer">
                    <Image
                      src="images/photo.svg"
                      alt="Photo icon"
                      width={60}
                      height={60}
                      className="w-full h-full"
                      priority
                    />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                    />
                  </label>
                )}
              </div>
              <span className="text-sm">Photo</span>
            </div>

            <div className="flex flex-col items-center opacity-50">
              <div className="w-full h-auto max-w-[60px] aspect-square rounded-full bg-gray-200 flex items-center justify-center mb-2 overflow-hidden cursor-pointer">
                <Image
                  src="images/person.svg"
                  alt="Person icon"
                  width={60}
                  height={60}
                  className="w-full h-full"
                  priority
                  onClick={onImageIconClick}
                />
              </div>
              <span className="text-sm">Celebrity</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <button
            type="submit"
            className="w-full p-4 bg-indigo-600 text-white rounded-md text-lg font-medium disabled:opacity-75"
            disabled={
              status === CHAT_STATUS.streaming ||
              (!input.trim() && !files) ||
              submittedRef.current
            }
          >
            {status === CHAT_STATUS.streaming || submittedRef.current ? (
              <span className="flex justify-center items-center">
                <Loader className="mr-2 animate-spin" size={24} />
                Generating...
              </span>
            ) : (
              "Start generating"
            )}
          </button>
          <a
            href="/aetheria.pdf"
            download="aetheria"
            className="text-indigo-600 text-left"
          >
            First, I want to know more &gt;
          </a>
        </div>
      </form>
    </>
  );
}
