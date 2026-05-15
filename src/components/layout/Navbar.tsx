"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Student Solutions", href: "/student-solutions" },
    { name: "Corporate Solutions", href: "/corporate-solutions" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Sample Reports", href: "/sample-reports" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo Space */}
          <div className="h-8 w-32 flex items-center justify-center">
            <Image
              src="/logo.jpeg"   // place your logo file in /public/logo.png
              alt="CareerQue Logo"
              width={100}
              height={28}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-brand-teal relative py-2",
                  isActive ? "text-brand-teal font-semibold" : "text-slate-600 dark:text-slate-300"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-teal rounded-full" />
                )}
              </Link>
            )
          })}

          <div className="flex items-center space-x-4 pl-4 border-l border-slate-200 dark:border-slate-800">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-brand-orange px-4 py-2 text-sm font-medium text-white shadow transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get in Touch
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button className="p-2 text-slate-600 dark:text-slate-300" aria-label="Toggle Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
