import { FC } from "react";
import { MobileMenu } from "./MobileMenu";

export const Header: FC = () => (
  <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
    
    {/* Mobile Header — full width */}
    <div className="md:hidden w-full">
      <MobileMenu />
    </div>

    {/* Desktop Header — placeholder (expand later) */}
    <div className="hidden md:flex max-w-7xl mx-auto w-full px-4 py-3 justify-between items-center">
      {/* Desktop navigation can be added here */}
      <h1 className="text-xl font-bold">Ecommerce App</h1>
      <div className="flex gap-4">
        {/* Icons or links */}
      </div>
    </div>

  </header>
);
