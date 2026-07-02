"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X, Dumbbell, ShieldAlert } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Heritage", href: "/about" },
    { name: "Amenities", href: "/amenities" },
    { name: "Programs", href: "/programs" },
    { name: "Rates Schema", href: "/pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/30 group-hover:bg-gold/20 transition-all">
            <Dumbbell className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-widest text-lg md:text-xl leading-none">
              NEPAL BYAYAM
            </span>
            <span className="font-sans text-[10px] tracking-[0.3em] font-medium text-primary">
              MANDIR • ESTD. 1953
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border hover:bg-card transition-colors hover:text-primary"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>
          
          <a
            href="/programs"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-gold-hover transition-all shadow-md shadow-primary/10 hover:shadow-primary/20"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Join Now
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border hover:bg-card transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-border hover:bg-card transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium py-2 border-b border-border/50 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/programs"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider py-3 mt-2 rounded-lg bg-primary text-primary-foreground hover:bg-gold-hover transition-colors text-center"
            >
              <ShieldAlert className="w-4 h-4" />
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
