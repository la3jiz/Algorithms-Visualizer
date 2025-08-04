import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../../lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Complex Algorithms">
          <div className="flex flex-col space-y-4 text-sm items-start">
            <HoveredLink to="/dijkstra">Dijkstra</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Sort Alogrithms">
          <div className="flex flex-col space-y-4 text-sm items-start">
            <HoveredLink to="/quick-sort">Quick Sort</HoveredLink>
            <HoveredLink to="/bubble-sort">Bubble Sort</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="LeetCode Challenges"
        >
          <div className="flex flex-col space-y-4 text-sm items-start">
            <HoveredLink to="/median">
              Median Of Two Sorted Arrays <span className="text-xs text-red-500">Hard</span>
            </HoveredLink>
            <HoveredLink to="/add-two-numbers">
              Add Two Numbers <span className="text-xs text-yellow-500">Medium</span>
            </HoveredLink>
            <HoveredLink to="/longest-substring">
              Longest Substring Without Repeating Characters <span className="text-xs text-yellow-500">Medium</span>
            </HoveredLink>
            <HoveredLink to="/longest-palindrome">
              Longest Palindrome Substring <span className="text-xs text-yellow-500">Medium</span>
            </HoveredLink>
            <HoveredLink to="/zigzag-conversion">
              Zigzag Conversion <span className="text-xs text-yellow-500">Medium</span>
            </HoveredLink>
            <HoveredLink to="/reverse-integer">
              Reverse Integer with Overflow Check <span className="text-xs text-yellow-500">Medium</span>
            </HoveredLink>
          </div>

        </MenuItem>
      </Menu>
    </div>
  );
}
