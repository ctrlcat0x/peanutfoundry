"use client";

import * as React from "react";
import {
  PaintbrushVertical,
  Skull,
  Star,
  Zap,
  Palette,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <PaintbrushVertical className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("gruvbox-hard")}
          className="flex items-center gap-2"
        >
          <Palette className="h-4 w-4 text-amber-600" />
          <span>Gruvbox Hard</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("halloween")}
          className="flex items-center gap-2"
        >
          <Skull className="h-4 w-4 text-orange-500" />
          <span>Halloween</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("tokyo-night")}
          className="flex items-center gap-2"
        >
          <Star className="h-4 w-4 text-purple-400" />
          <span>Tokyo Night</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dracula")}
          className="flex items-center gap-2"
        >
          <Zap className="h-4 w-4 text-purple-500" />
          <span>Dracula</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
