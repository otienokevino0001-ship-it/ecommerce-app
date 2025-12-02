"use client";

import { FC, useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
} from "lucide-react";

export const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">

      {/* Mobile Top Bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ecommerce App</h1>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 border rounded"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Icons under title */}
      <div className="flex items-center gap-4 mt-3">
        <Search className="w-5 h-5" />
        <ShoppingCart className="w-5 h-5" />
        <User className="w-5 h-5" />
      </div>

      {/* Expanded Menu */}
      {open && (
        <div className="flex flex-col space-y-3 mt-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};
