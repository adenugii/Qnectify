"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

// Daftar menu navbar
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Buat Quiz", href: "/quiz-maker" },
  { name: "Studi grup", href: "/study-groups" },
  { name: "Tentang", href: "/about-us" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 md:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Quizzo Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-[#2563eb] tracking-tight">QUIZZO</span>
        </Link>
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#2563eb]"
                  : "text-gray-700 hover:text-[#2563eb]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Icon User */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="focus:outline-none"
            aria-label="Profile"
          >
            <FaUserCircle className="text-gray-400 hover:text-[#2563eb] text-2xl" />
          </button>
        </div>
        {/* Menu Mobile (opsional, bisa tambahkan hamburger menu jika perlu) */}
      </div>
    </nav>
  );
}