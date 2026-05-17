"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
          <div className="h-12 w-48 flex items-center justify-start">
            <Image
              src="/logo.jpg"
              alt="CareerQue Logo"
              width={200}
              height={48}
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
          <button 
            className="p-2 text-slate-600 dark:text-slate-300 z-50 relative" 
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white/95 dark:bg-brand-dark/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-xl md:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "transition-colors relative py-3 px-4 rounded-lg",
                      isActive 
                        ? "bg-brand-teal/10 text-brand-teal font-semibold dark:bg-brand-teal/20 dark:text-brand-teal" 
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-md bg-brand-orange px-4 py-3 text-sm font-medium text-white shadow"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
