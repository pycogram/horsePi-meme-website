import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import horsePiLogo from "@/assets/horsepi-logo.png";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "How to Buy", href: "#how-to-buy" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Community", href: "#community" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={horsePiLogo} 
              alt="HorsePi Logo" 
              className="w-12 h-12 rounded-full border border-primary shadow-lg group-hover:scale-110 transition-transform"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-foreground">
                HorsePi
              </h1>
              <p className="text-xs text-muted-foreground font-medium">派马 • BNB Chain</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons & Theme Toggle */}
          <div className="flex items-center absolute md:relative right-[6rem] md:right-[unset] gap-3">
            <ThemeToggle />
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x3bf3dd1d774feec9c3ced7f1079b2a9c74144444"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex btn-hero text-sm py-2 px-4 items-center gap-2"
            >
              Buy on PancakeSwap
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-card border border-border"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <nav className="xl:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-semibold text-foreground/80 hover:text-primary transition-colors py-2 px-4 rounded-xl hover:bg-card"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x3bf3dd1d774feec9c3ced7f1079b2a9c74144444"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero text-center py-3 mt-2"
              >
                Buy on PancakeSwap
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
