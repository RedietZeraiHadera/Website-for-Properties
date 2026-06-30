import * as React from "react";
import { Search, User, Menu, X, Globe, ChevronRight, ChevronDown, ArrowLeft, Heart, MessageSquare, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { navigationData } from "../data/navigationData";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onNavigate: (category: string, subOptionTitle: string) => void;
  onBackToHome: () => void;
  activeView: { category: string; subOptionTitle: string } | null;
}

export function Navbar({ onNavigate, onBackToHome, activeView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileMenuPath, setMobileMenuPath] = React.useState<string | null>(null);
  const [activeHoverCategory, setActiveHoverCategory] = React.useState<string | null>(null);
  
  // Ref to handle hover leave timer
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (category: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveHoverCategory(category);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveHoverCategory(null);
    }, 150);
  };

  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileMenuPath(null); // Reset path when toggled
  };

  const navCategories = Object.keys(navigationData);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-slate-100 py-2 shadow-sm" 
            : "bg-transparent border-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <button 
              onClick={onBackToHome}
              className="flex items-center gap-2 group text-left cursor-pointer outline-none focus:ring-0"
            >
              <span className={cn(
                "text-xl md:text-2xl font-serif font-bold tracking-wider transition-colors duration-300",
                isScrolled || activeView ? "text-primary" : "text-white"
              )}>
                LUXURY RESIDENCE
              </span>
            </button>

            {/* Desktop Mega-Navigation */}
            <nav 
              className="hidden lg:flex items-center"
              onMouseLeave={handleMouseLeave}
            >
              <ul className="flex items-center gap-1">
                {navCategories.map((category) => {
                  const isActive = activeView?.category === category;
                  return (
                    <li 
                      key={category}
                      className="relative py-2"
                      onMouseEnter={() => handleMouseEnter(category)}
                    >
                      <button
                        className={cn(
                          "px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer flex items-center gap-1 rounded-sm relative",
                          isScrolled || activeView 
                            ? "text-primary hover:text-secondary" 
                            : "text-white/90 hover:text-white"
                        )}
                      >
                        <span>{category}</span>
                        <ChevronDown className={cn(
                          "w-3 h-3 transition-transform duration-200 opacity-60",
                          activeHoverCategory === category && "rotate-180"
                        )} />
                        
                        {isActive && (
                          <motion.span 
                            layoutId="activeNavLine" 
                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary"
                          />
                        )}
                      </button>

                      {/* Dropdown Card */}
                      <AnimatePresence>
                        {activeHoverCategory === category && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 w-80 bg-white shadow-xl border border-slate-100 py-4 px-2 mt-2 z-50 text-left rounded-none"
                            onMouseEnter={() => handleMouseEnter(category)}
                          >
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2 font-sans">
                              Browse {category}
                            </p>
                            <ul className="space-y-1">
                              {navigationData[category].options.map((opt) => (
                                <li key={opt.title}>
                                  <button
                                    onClick={() => {
                                      onNavigate(category, opt.title);
                                      setActiveHoverCategory(null);
                                    }}
                                    className="w-full text-left py-2 px-3 rounded-none hover:bg-slate-50 transition-colors group flex flex-col cursor-pointer"
                                  >
                                    <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors font-sans">
                                      {opt.title}
                                    </span>
                                    <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 font-sans">
                                      {opt.description}
                                    </span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Right Action Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "rounded-full transition-colors cursor-pointer",
                isScrolled || activeView ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <div className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                className={cn(
                  "hidden xl:flex text-sm font-medium transition-colors cursor-pointer",
                  isScrolled || activeView ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
                )}
                onClick={() => onNavigate("Sell", "Request a Valuation")}
              >
                Book Valuation
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "rounded-full transition-colors cursor-pointer",
                  isScrolled || activeView ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
                )}
              >
                <Globe className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "rounded-full transition-colors cursor-pointer",
                  isScrolled || activeView ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
                )}
              >
                <User className="w-5 h-5" />
              </Button>
            </div>

            {/* Hamburger Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleMobileMenuToggle}
              className={cn(
                "lg:hidden rounded-full transition-colors cursor-pointer z-50",
                isScrolled || activeView || isMobileMenuOpen ? "text-primary" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN, AMAZING NESTED MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-45"
              onClick={handleMobileMenuToggle}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-gradient-to-b from-[#001D35] to-[#002D54] text-white z-49 flex flex-col shadow-2xl overflow-hidden border-l border-white/5"
            >
              {/* Header inside Menu */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <span className="text-xl font-serif font-bold tracking-wider text-white">
                  LUXURY RESIDENCE
                </span>
                <button
                  onClick={handleMobileMenuToggle}
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Animated Hierarchical List Content */}
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <AnimatePresence mode="wait">
                  {mobileMenuPath === null ? (
                    /* LEVEL 1: Main Category Links */
                    <motion.div
                      key="level1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                        Primary Sectors
                      </p>
                      
                      {navCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setMobileMenuPath(category)}
                          className="w-full text-left py-3 flex items-center justify-between group border-b border-white/5 hover:border-secondary transition-all"
                        >
                          <span className="text-2xl font-serif font-light tracking-wide group-hover:text-secondary transition-colors">
                            {category}
                          </span>
                          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}

                      {/* Extra Utilities */}
                      <div className="pt-8 space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                          My Account
                        </p>
                        <button 
                          onClick={() => {
                            onNavigate("Sell", "Request a Valuation");
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full text-left py-2 flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                        >
                          <Heart size={16} className="text-secondary" /> Save Searches & Favourites
                        </button>
                        <button 
                          onClick={handleMobileMenuToggle}
                          className="w-full text-left py-2 flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                        >
                          <User size={16} className="text-secondary" /> Sign in to My Luxury Residence
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* LEVEL 2: Sub-options for Category with BACK button */
                    <motion.div
                      key="level2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      {/* Hierarchical BACK Button */}
                      <button
                        onClick={() => setMobileMenuPath(null)}
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary hover:text-white transition-colors py-2 px-3 bg-white/5 rounded-sm self-start"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Menu
                      </button>

                      <div className="pt-2">
                        <span className="text-slate-400 uppercase tracking-widest text-[10px] block font-sans">
                          Sector Menu
                        </span>
                        <h4 className="text-3xl font-serif font-light text-white mt-1 mb-6 border-b border-white/10 pb-4">
                          {mobileMenuPath}
                        </h4>
                      </div>

                      <ul className="space-y-2">
                        {navigationData[mobileMenuPath].options.map((opt) => (
                          <li key={opt.title}>
                            <button
                              onClick={() => {
                                onNavigate(mobileMenuPath, opt.title);
                                setIsMobileMenuOpen(false);
                              }}
                              className="w-full text-left p-4 hover:bg-white/5 border border-white/5 hover:border-white/10 transition-all rounded-none group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-serif font-medium group-hover:text-secondary transition-colors">
                                  {opt.title}
                                </span>
                                <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </div>
                              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                {opt.description}
                              </p>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer inside mobile menu */}
              <div className="p-6 border-t border-white/10 bg-[#001426] text-center text-xs text-slate-400 space-y-3">
                <p>Est. Since 1896 • London & Worldwide</p>
                <div className="flex justify-center gap-4 text-slate-300">
                  <a href="tel:+442076298171" className="hover:text-white flex items-center gap-1">
                    <Phone size={12} /> Call Us
                  </a>
                  <span>|</span>
                  <a href="mailto:london@luxuryresidence.com" className="hover:text-white flex items-center gap-1">
                    <Mail size={12} /> Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
