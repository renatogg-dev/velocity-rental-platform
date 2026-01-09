"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeartButtonProps = {
  className?: string;
};

export function HeartButton({ className }: HeartButtonProps) {
  const [liked, setLiked] = useState(false);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setLiked((prev) => !prev)}
      className={cn(
        "absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-white/80 text-foreground shadow-sm backdrop-blur transition hover:bg-white",
        liked && "text-rose-500",
        className
      )}
      aria-pressed={liked}
      aria-label={liked ? "Unsave listing" : "Save listing"}
    >
      <Heart className="h-5 w-5" fill={liked ? "currentColor" : "none"} />
    </Button>
  );
}
