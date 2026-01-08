"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CalendarDays, MapPin, Search as SearchIcon, Users, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SearchField = "location" | "dates" | "guests" | null;

interface SearchProps {
  onClose?: () => void;
  isMobile?: boolean;
}

export function Search({ onClose, isMobile = false }: SearchProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeField, setActiveField] = useState<SearchField>(null);
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [dates, setDates] = useState(searchParams.get("dates") || "");
  const [guests, setGuests] = useState(searchParams.get("guests") || "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (location) params.set("location", location);
    else params.delete("location");
    
    if (dates) params.set("dates", dates);
    else params.delete("dates");
    
    if (guests) params.set("guests", guests);
    else params.delete("guests");
    
    router.push(`/browse?${params.toString()}`, { scroll: false });
    setActiveField(null);
    onClose?.();
  };

  const handleClear = () => {
    setLocation("");
    setDates("");
    setGuests("");
    router.push("/browse", { scroll: false });
    setActiveField(null);
    onClose?.();
  };

  const hasFilters = location || dates || guests;

  // Mobile layout
  if (isMobile) {
    return (
      <div className="space-y-4">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Location</label>
          <button
            onClick={() => setActiveField(activeField === "location" ? null : "location")}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-left transition-colors",
              activeField === "location" ? "border-foreground" : "hover:border-foreground/50"
            )}
          >
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span className="text-foreground">
              {location || "Where to?"}
            </span>
          </button>
          {activeField === "location" && (
            <div className="space-y-3 rounded-lg border border-border bg-white p-4">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, airport, or address"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground focus:ring-1 focus:ring-foreground"
                autoFocus
              />
              <div className="flex flex-wrap gap-2">
                {["Los Angeles, CA", "Miami, FL", "Las Vegas, NV", "New York, NY"].map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setLocation(city);
                      setActiveField(null);
                    }}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted/80"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Dates */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Dates</label>
          <button
            onClick={() => setActiveField(activeField === "dates" ? null : "dates")}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-left transition-colors",
              activeField === "dates" ? "border-foreground" : "hover:border-foreground/50"
            )}
          >
            <CalendarDays className="h-5 w-5 text-muted-foreground" />
            <span className="text-foreground">
              {dates || "Add dates"}
            </span>
          </button>
          {activeField === "dates" && (
            <div className="space-y-3 rounded-lg border border-border bg-white p-4">
              <input
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="e.g. Jan 15 - Jan 18"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground focus:ring-1 focus:ring-foreground"
                autoFocus
              />
              <div className="flex flex-wrap gap-2">
                {["This weekend", "Next week", "This month"].map((period) => (
                  <button
                    key={period}
                    onClick={() => {
                      setDates(period);
                      setActiveField(null);
                    }}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted/80"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Passengers */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Passengers</label>
          <button
            onClick={() => setActiveField(activeField === "guests" ? null : "guests")}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-left transition-colors",
              activeField === "guests" ? "border-foreground" : "hover:border-foreground/50"
            )}
          >
            <Users className="h-5 w-5 text-muted-foreground" />
            <span className="text-foreground">
              {guests || "Add guests"}
            </span>
          </button>
          {activeField === "guests" && (
            <div className="space-y-3 rounded-lg border border-border bg-white p-4">
              <div className="flex items-center justify-center gap-4">
                {["1", "2", "3", "4", "5+"].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setGuests(num);
                      setActiveField(null);
                    }}
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold transition",
                      guests === num
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {hasFilters && (
            <Button
              variant="outline"
              onClick={handleClear}
              className="flex-1"
            >
              Clear
            </Button>
          )}
          <Button
            onClick={handleSearch}
            className="flex-1 bg-rose-500 hover:bg-rose-600"
          >
            <SearchIcon className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center gap-1 rounded-full border border-border bg-white px-2 py-1.5 shadow-md transition hover:shadow-lg">
        {/* Location */}
        <button
          onClick={() => setActiveField(activeField === "location" ? null : "location")}
          className={cn(
            "flex flex-1 items-center gap-2 rounded-full px-3 py-2 text-left text-sm transition-colors lg:px-4",
            activeField === "location" ? "bg-muted" : "hover:bg-muted/50"
          )}
        >
          <MapPin className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-foreground">Location</span>
            <span className="text-muted-foreground truncate">
              {location || "Where to?"}
            </span>
          </div>
        </button>

        <div className="h-8 w-px bg-border" />

        {/* Dates */}
        <button
          onClick={() => setActiveField(activeField === "dates" ? null : "dates")}
          className={cn(
            "flex flex-1 items-center gap-2 rounded-full px-3 py-2 text-left text-sm transition-colors lg:px-4",
            activeField === "dates" ? "bg-muted" : "hover:bg-muted/50"
          )}
        >
          <CalendarDays className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-foreground">Dates</span>
            <span className="text-muted-foreground truncate">
              {dates || "Add dates"}
            </span>
          </div>
        </button>

        <div className="h-8 w-px bg-border" />

        {/* Guests */}
        <button
          onClick={() => setActiveField(activeField === "guests" ? null : "guests")}
          className={cn(
            "flex flex-1 items-center gap-2 rounded-full px-3 py-2 text-left text-sm transition-colors lg:px-4",
            activeField === "guests" ? "bg-muted" : "hover:bg-muted/50"
          )}
        >
          <Users className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-foreground">Passengers</span>
            <span className="text-muted-foreground truncate">
              {guests || "Add guests"}
            </span>
          </div>
        </button>

        {/* Clear button */}
        {hasFilters && (
          <Button
            size="icon"
            variant="ghost"
            onClick={handleClear}
            className="h-8 w-8 flex-shrink-0 rounded-full text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        )}

        {/* Search button */}
        <Button
          size="icon"
          onClick={handleSearch}
          className="h-10 w-10 flex-shrink-0 rounded-full bg-rose-500 text-white shadow-md hover:bg-rose-600"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* Dropdown panels */}
      {activeField && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-border bg-white p-4 shadow-xl">
          {activeField === "location" && (
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Where do you want to pick up?</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, airport, or address"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground focus:ring-1 focus:ring-foreground"
                autoFocus
              />
              <div className="flex flex-wrap gap-2">
                {["Los Angeles, CA", "Miami, FL", "Las Vegas, NV", "New York, NY"].map((city) => (
                  <button
                    key={city}
                    onClick={() => setLocation(city)}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted/80"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeField === "dates" && (
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">When do you need it?</label>
              <input
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="e.g. Jan 15 - Jan 18"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground focus:ring-1 focus:ring-foreground"
                autoFocus
              />
              <div className="flex flex-wrap gap-2">
                {["This weekend", "Next week", "This month"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setDates(period)}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-muted/80"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeField === "guests" && (
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">How many passengers?</label>
              <div className="flex items-center gap-4">
                {["1", "2", "3", "4", "5+"].map((num) => (
                  <button
                    key={num}
                    onClick={() => setGuests(num)}
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold transition",
                      guests === num
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setActiveField(null)}>
              Cancel
            </Button>
            <Button onClick={handleSearch} className="bg-rose-500 hover:bg-rose-600">
              Search
            </Button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {activeField && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setActiveField(null)}
        />
      )}
    </div>
  );
}
