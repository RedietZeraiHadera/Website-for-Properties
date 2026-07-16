import { Search, MapPin, Building, Compass, Landmark } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "motion/react";
import * as React from "react";

interface HeroProps {
  onNavigate?: (category: string, subOptionTitle: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [searchValue, setSearchValue] = React.useState("");

  const handleQuickSearch = (loc: string, category: string, subOption: string) => {
    if (onNavigate) {
      onNavigate(category, subOption);
    }
  };

  const handleSearchSubmit = (value: string, defaultCat = "Buy", defaultSub = "Residential for Sale") => {
    if (!value.trim()) return;
    const lower = value.toLowerCase();
    
    if (onNavigate) {
      if (lower.includes("rent") || lower.includes("let")) {
        onNavigate("Rent", "Residential for Rent");
      } else if (lower.includes("val") || lower.includes("sell") || lower.includes("apprais")) {
        onNavigate("Sell", "Request a Valuation");
      } else if (lower.includes("france") || lower.includes("cotedazur") || lower.includes("azur") || lower.includes("tuscany") || lower.includes("europe")) {
        onNavigate("Overseas", "European Properties");
      } else if (lower.includes("miami") || lower.includes("us") || lower.includes("america") || lower.includes("aspen")) {
        onNavigate("Overseas", "US & Americas Properties");
      } else if (lower.includes("commercial") || lower.includes("office")) {
        onNavigate("Commercial", "Offices for Rent");
      } else {
        onNavigate(defaultCat, defaultSub);
      }
    }
  };

  const trendingDestinations = [
    { label: "Palm Jumeirah", category: "Buy", subOption: "Residential for Sale" },
    { label: "Emirates Hills", category: "Buy", subOption: "Residential for Sale" },
    { label: "Cote d'Azur", category: "Buy", subOption: "Luxury Properties" },
    { label: "Verbier", category: "Buy", subOption: "Luxury Properties" },
    { label: "Miami Beach", category: "Overseas", subOption: "US & Americas Properties" },
  ];

  return (
    <section className="relative h-[90vh] min-h-[750px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Elegant Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Property Estate"
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Multilayer Dark and Amber Overlay for ultra-premium depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-primary/90 opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center text-white mb-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-secondary font-semibold block mb-4"
          >
            EXPERIENCE THE EXTRAORDINARY
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 tracking-tight leading-tight"
          >
            Your Gateway to the World's <br className="hidden md:inline"/>
            <span className="font-serif italic text-secondary">Most Prestigious</span> Homes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 font-sans text-sm md:text-base max-w-xl mx-auto mb-1"
          >
            A curated global portfolio of prime estates, modern penthouses, and historic retreats.
          </motion.p>
        </div> 

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto bg-primary/40 backdrop-blur-xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden rounded-lg p-1"
        >
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="w-full h-auto p-1 bg-white/5 border-b border-white/5 grid grid-cols-4 gap-1">
              <TabsTrigger 
                value="buy" 
                className="py-3 text-xs md:text-sm font-medium rounded transition-all text-slate-300 data-[state=active]:bg-white/10 data-[state=active]:text-white hover:text-white"
              >
                Buy
              </TabsTrigger>
              <TabsTrigger 
                value="rent" 
                className="py-3 text-xs md:text-sm font-medium rounded transition-all text-slate-300 data-[state=active]:bg-white/10 data-[state=active]:text-white hover:text-white"
              >
                Rent
              </TabsTrigger>
              <TabsTrigger 
                value="commercial" 
                className="py-3 text-xs md:text-sm font-medium rounded transition-all text-slate-300 data-[state=active]:bg-white/10 data-[state=active]:text-white hover:text-white"
              >
                Commercial
              </TabsTrigger>
              <TabsTrigger 
                value="overseas" 
                className="py-3 text-xs md:text-sm font-medium rounded transition-all text-slate-300 data-[state=active]:bg-white/10 data-[state=active]:text-white hover:text-white"
              >
                Overseas
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="buy" className="p-4 md:p-6 m-0 focus-visible:outline-none">
              <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(searchValue, "Buy", "Residential for Sale"); }} className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5 z-20" />
                  <Input 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search by UAE communities, neighborhood, or country..." 
                    className="h-14 pl-12 pr-4 text-base md:text-lg bg-white/10 border-white/15 text-white placeholder:text-slate-400 focus-visible:ring-secondary focus-visible:border-secondary rounded-md"
                  />
                </div>
                <Button type="submit" className="h-14 px-8 text-base font-semibold bg-secondary hover:bg-secondary-hover text-primary transition-colors duration-300 shadow-md">
                  <Search className="mr-2 h-4 w-4 stroke-[2.5]" />
                  Search Estates
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="rent" className="p-4 md:p-6 m-0 focus-visible:outline-none">
              <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(searchValue, "Rent", "Residential for Rent"); }} className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5 z-20" />
                  <Input 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Enter district, rent price constraints, or property style..." 
                    className="h-14 pl-12 pr-4 text-base md:text-lg bg-white/10 border-white/15 text-white placeholder:text-slate-400 focus-visible:ring-secondary focus-visible:border-secondary rounded-md"
                  />
                </div>
                <Button type="submit" className="h-14 px-8 text-base font-semibold bg-secondary hover:bg-secondary-hover text-primary transition-colors duration-300 shadow-md">
                  <Search className="mr-2 h-4 w-4 stroke-[2.5]" />
                  Search Lettings
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="commercial" className="p-4 md:p-6 m-0 focus-visible:outline-none">
              <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(searchValue, "Commercial", "Offices for Rent"); }} className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Landmark className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5 z-20" />
                  <Input 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Sectors, business zones, corporate offices, square footage..." 
                    className="h-14 pl-12 pr-4 text-base md:text-lg bg-white/10 border-white/15 text-white placeholder:text-slate-400 focus-visible:ring-secondary focus-visible:border-secondary rounded-md"
                  />
                </div>
                <Button type="submit" className="h-14 px-8 text-base font-semibold bg-secondary hover:bg-secondary-hover text-primary transition-colors duration-300 shadow-md">
                  <Search className="mr-2 h-4 w-4 stroke-[2.5]" />
                  Find Offices
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="overseas" className="p-4 md:p-6 m-0 focus-visible:outline-none">
              <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(searchValue, "Overseas", "European Properties"); }} className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Compass className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5 z-20" />
                  <Input 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Explore France, Italy, Ibiza, Switzerland, Miami, New York..." 
                    className="h-14 pl-12 pr-4 text-base md:text-lg bg-white/10 border-white/15 text-white placeholder:text-slate-400 focus-visible:ring-secondary focus-visible:border-secondary rounded-md"
                  />
                </div>
                <Button type="submit" className="h-14 px-8 text-base font-semibold bg-secondary hover:bg-secondary-hover text-primary transition-colors duration-300 shadow-md">
                  <Search className="mr-2 h-4 w-4 stroke-[2.5]" />
                  Explore World
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Premium Trending Destinations / Quick Navigation Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 max-w-2xl mx-auto"
        >
          <span className="font-semibold text-secondary uppercase tracking-wider mr-1">Trending:</span>
          {trendingDestinations.map((dest) => (
            <button
              key={dest.label}
              onClick={() => handleQuickSearch(dest.label, dest.category, dest.subOption)}
              className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300 cursor-pointer text-slate-200 font-sans tracking-wide"
            >
              {dest.label}
            </button>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator with beautiful premium line-draw animation */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 pointer-events-none select-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400">Discover More</span>
        <div className="w-px h-10 bg-white/10 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-secondary" />
        </div>
      </motion.div>
    </section>
  );
}

