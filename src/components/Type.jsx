"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Ideas",
    },
    {
      text: "into",
    },
    {
      text: "Reality",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
