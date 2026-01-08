"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ListingCard } from "@/components/listings/ListingCard";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";

const CARS_PER_PAGE = 15;

// Shuffle array using Fisher-Yates algorithm with a seed
function shuffleArray<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentSeed = seed;
  
  // Simple seeded random number generator
  const seededRandom = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function ListingsGrid() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const location = searchParams.get("location");
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  
  // Use a fixed seed for consistent shuffle across server and client
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Shuffle cars with a fixed seed for "All" view - consistent across server/client
  const shuffledCars = useMemo(() => shuffleArray(cars, 12345), []);

  // Use shuffled cars for "All", original order for specific categories
  // Only apply shuffle on client to avoid hydration mismatch
  const baseCars = (!category || category === "All") && isClient ? shuffledCars : cars;

  // Filter cars
  const filteredCars = baseCars.filter((car) => {
    if (category && category !== "All" && car.category !== category) {
      return false;
    }
    if (location && !car.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Pagination calculations
  const totalCars = filteredCars.length;
  const totalPages = Math.ceil(totalCars / CARS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARS_PER_PAGE;
  const endIndex = startIndex + CARS_PER_PAGE;
  const paginatedCars = filteredCars.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", newPage.toString());
    }
    router.push(`?${params.toString()}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Results count */}
      <div className="col-span-full mb-2">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(endIndex, totalCars)} of {totalCars} vehicles
        </p>
      </div>

      {/* Car grid */}
      {paginatedCars.length === 0 ? (
        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
          <p className="text-lg font-semibold text-foreground">No cars found</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your filters or search criteria
          </p>
        </div>
      ) : (
        paginatedCars.map((car) => (
          <ListingCard key={car.id} data={car} />
        ))
      )}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="col-span-full mt-8 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-10 w-10 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "ghost"}
                size="icon"
                onClick={() => handlePageChange(page)}
                className={`h-10 w-10 rounded-full ${
                  page === currentPage
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "hover:bg-muted"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
}

export default function BrowsePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 lg:px-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Suspense fallback={<div className="col-span-full py-20 text-center text-muted-foreground">Loading...</div>}>
          <ListingsGrid />
        </Suspense>
      </div>
    </main>
  );
}
