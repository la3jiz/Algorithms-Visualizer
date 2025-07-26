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
        <MenuItem setActive={setActive} active={active} item="Algorithms">
          <div className="flex flex-col space-y-4 text-sm items-start">
            <HoveredLink href="/dijkastra">Dijkastra</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Sort Alogrithms">
          <div className="flex flex-col space-y-4 text-sm items-start">
            <HoveredLink href="/quick-sort">Quick Sort</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="LeetCode Challenges"
        >
          <div className="flex flex-col space-y-4 text-sm items-start">
            <HoveredLink href="/median">
              Median Of Two Sorted Arrays
            </HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
