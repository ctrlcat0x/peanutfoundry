"use client";

import * as React from "react";
import {
  PaintbrushVertical,
  Moon,
  Flame,
  Ghost,
  Landmark,
  Droplet,
  Terminal,
  Snowflake,
  Coffee,
  Sun,
  Waves,
  Github,
  MoonStar,
  Sunrise,
  CloudMoon,
  Leaf,
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
          onClick={() => setTheme("rose-pine")}
          className="flex items-center gap-2"
        >
          <Moon className="h-4 w-4 text-pink-400" />
          <span>Rose Pine</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("gruvbox-hard")}
          className="flex items-center gap-2"
        >
          <Flame className="h-4 w-4 text-amber-600" />
          <span>Gruvbox Hard</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("halloween")}
          className="flex items-center gap-2"
        >
          <Ghost className="h-4 w-4 text-orange-500" />
          <span>Halloween</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("tokyo-night")}
          className="flex items-center gap-2"
        >
          <Landmark className="h-4 w-4 text-purple-400" />
          <span>Tokyo Night</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dracula")}
          className="flex items-center gap-2"
        >
          <Droplet className="h-4 w-4 text-pink-500" />
          <span>Dracula</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("one-dark")}
          className="flex items-center gap-2"
        >
          <Terminal className="h-4 w-4 text-blue-400" />
          <span>One Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("nord")}
          className="flex items-center gap-2"
        >
          <Snowflake className="h-4 w-4 text-cyan-400" />
          <span>Nord</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("catppuccin")}
          className="flex items-center gap-2"
        >
          <Coffee className="h-4 w-4 text-fuchsia-400" />
          <span>Catppuccin</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("solarized-dark")}
          className="flex items-center gap-2"
        >
          <Sun className="h-4 w-4 text-yellow-400" />
          <span>Solarized Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("material-ocean")}
          className="flex items-center gap-2"
        >
          <Waves className="h-4 w-4 text-cyan-300" />
          <span>Material Ocean</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("github-dark")}
          className="flex items-center gap-2"
        >
          <Github className="h-4 w-4 text-blue-500" />
          <span>GitHub Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("night-owl")}
          className="flex items-center gap-2"
        >
          <MoonStar className="h-4 w-4 text-blue-400" />
          <span>Night Owl</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("ayu-dark")}
          className="flex items-center gap-2"
        >
          <Sunrise className="h-4 w-4 text-yellow-400" />
          <span>Ayu Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("palenight")}
          className="flex items-center gap-2"
        >
          <CloudMoon className="h-4 w-4 text-purple-400" />
          <span>Palenight</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("everforest")}
          className="flex items-center gap-2"
        >
          <Leaf className="h-4 w-4 text-green-400" />
          <span>Everforest</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
