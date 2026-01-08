"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Car,
  Clock,
  Flag,
  Gauge,
  Wind,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

export const CATEGORY_ITEMS = [
  { label: "All", icon: Car },
  { label: "Supercars", icon: Gauge },
  { label: "SUVs", icon: Car },
  { label: "Electric", icon: Zap },
  { label: "Convertible", icon: Wind },
  { label: "Classic", icon: Clock },
  { label: "Track Day", icon: Flag },
] as const;

export function Categories() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="sticky top-20 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="horizontal-scroll mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-6 py-3 md:px-10 lg:px-12">
        {CATEGORY_ITEMS.map((category) => (
          <button
            key={category.label}
            onClick={() => handleCategoryClick(category.label)}
            className={cn(
              "flex shrink-0 cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              "hover:bg-muted",
              activeCategory === category.label
                ? "bg-foreground text-background shadow-sm"
                : "text-foreground/70"
            )}
            aria-pressed={activeCategory === category.label}
          >
            <category.icon className="h-4 w-4" />
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
