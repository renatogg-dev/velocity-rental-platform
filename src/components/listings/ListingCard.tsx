"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeartButton } from "./HeartButton";
import type { Car } from "@/data/cars";

type ListingCardProps = {
  data: Car;
};

export function ListingCard({ data }: ListingCardProps) {
  return (
    <article className="group space-y-3">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/40">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {data.images.map((src, index) => (
              <CarouselItem key={`${data.id}-${index}`}>
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <Image
                    src={src}
                    alt={`${data.title} photo ${index + 1}`}
                    fill
                    sizes="(min-width: 1280px) 320px, (min-width: 1024px) 280px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    priority={index === 0}
                    unoptimized
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-3 top-1/2 -translate-y-1/2 bg-white/90 text-foreground shadow-sm hover:bg-white" />
          <CarouselNext className="hidden md:flex right-3 top-1/2 -translate-y-1/2 bg-white/90 text-foreground shadow-sm hover:bg-white" />
        </Carousel>
        <HeartButton />
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-base font-semibold text-foreground">
            {data.title}
          </p>
          <p className="text-sm text-muted-foreground">{data.location}</p>
          <p className="text-sm text-foreground">
            <span className="font-semibold">${data.price.toLocaleString()}</span>{" "}
            <span className="text-muted-foreground">/ day</span>
          </p>
        </div>
        <div className="flex items-center gap-1 text-sm font-medium text-foreground">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {data.rating.toFixed(2)}
        </div>
      </div>
    </article>
  );
}
