"use client";

import { Search as SearchIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Logo } from "./Logo";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import { Button } from "@/components/ui/button";

function MobileSearchModal({ onClose }: { onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 bg-white md:hidden" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 99999 
      }}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b px-4 py-4">
          <h2 className="text-lg font-semibold">Search</h2>
          <button
            onClick={onClose}
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <Search onClose={onClose} isMobile />
        </div>
      </div>
    </div>,
    document.body
  );
}

export function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 md:gap-6 md:px-6 lg:px-10 xl:px-12">
          <Logo />
          
          {/* Desktop Search */}
          <div className="hidden flex-1 min-w-0 justify-center md:flex">
            <Search />
          </div>

          {/* Mobile Search Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowMobileSearch(true)}
            className="md:hidden"
          >
            <SearchIcon className="h-4 w-4 mr-2" />
            Search
          </Button>
          
          <UserMenu />
        </div>
      </header>

      {/* Mobile Search Modal - rendered via portal to body */}
      {showMobileSearch && (
        <MobileSearchModal onClose={() => setShowMobileSearch(false)} />
      )}
    </>
  );
}
