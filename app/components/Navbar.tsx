"use client";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-[#181818] via-[#222] to-[#181818] text-[#ededed] shadow-lg rounded-b-2xl border-b border-gray-800">
      <a href="/" className="flex items-center gap-3 text-2xl font-extrabold tracking-wide text-white hover:text-teal-300 transition-colors duration-200">
        <img src="/Images/yugan%20logo.png" alt="Yugan Logo" className="h-10 w-auto" />
        <span className="ml-1">Yugan.999</span>
      </a>
      <ul className="flex gap-8 text-lg font-medium">
        <li>
          <a
            href="/fan-art"
            className={`relative px-2 py-1 rounded transition-colors duration-200 hover:bg-[#232323] hover:text-teal-300 ${pathname === "/fan-art" ? "bg-[#232323] text-teal-300" : ""}`}
          >
            Fan Art
          </a>
        </li>
        {/*
        <li>
          <a
            href="/original-art"
            className={`relative px-2 py-1 rounded transition-colors duration-200 hover:bg-[#232323] hover:text-teal-300 ${pathname === "/original-art" ? "bg-[#232323] text-teal-300" : ""}`}
          >
            Original Art
          </a>
        </li>
        */}
      </ul>
    </nav>
  );
}
