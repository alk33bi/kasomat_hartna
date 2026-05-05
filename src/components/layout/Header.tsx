import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "تصفح العروض", href: "/explore" },
  { label: "للأعمال التجارية", href: "/business" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-card/70 backdrop-blur-xl">
      {/* Subtle top accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={logoIcon} alt="خصومات حارتنا" className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute -inset-2 bg-primary/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight">
              <span className="text-primary">خصومات</span>{" "}
              <span className="text-accent">حارتنا</span>
            </span>
            <span className="text-[10px] font-medium text-muted-foreground -mt-0.5">عروض قريبة منك في عُمان 🇴🇲</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <Button
                variant={location.pathname === link.href ? "default" : "ghost"}
                size="sm"
                className={location.pathname === link.href ? "shadow-md shadow-primary/20" : "hover:bg-primary/10"}
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <Link to="/dashboard">
            <Button variant="outline" size="sm" className="hover:border-primary/40 hover:bg-primary/5">
              لوحة التحكم
            </Button>
          </Link>
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-foreground hover:bg-primary/10 transition-all duration-300 hover:text-primary"
            aria-label="تبديل الوضع المظلم"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
            aria-label="تبديل الوضع المظلم"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl p-4 space-y-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>
              <Button
                variant={location.pathname === link.href ? "default" : "ghost"}
                className="w-full justify-start"
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
            <Button variant="outline" className="w-full justify-start">
              لوحة التحكم
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
