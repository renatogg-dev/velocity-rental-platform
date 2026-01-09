"use client";

import { Menu, UserRound } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "flex items-center gap-3 rounded-full border border-border bg-white px-3 py-2 text-sm font-medium",
            "shadow-sm transition hover:shadow-md"
          )}
        >
          <Menu className="h-4 w-4" />
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              VC
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 rounded-xl">
        <DropdownMenuLabel className="flex items-center gap-2 text-sm font-semibold">
          <UserRound className="h-4 w-4" />
          Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign up</DropdownMenuItem>
        <DropdownMenuItem>Log in</DropdownMenuItem>
        <DropdownMenuItem>Host your car</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
