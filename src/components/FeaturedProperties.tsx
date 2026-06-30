import { Bed, Bath, Maximize, ArrowUpRight, ShieldCheck, Gem } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface FeaturedPropertiesProps {
  onNavigate?: (category: string, subOptionTitle: string) => void;
}

const featuredListings = [
  {
    id: "b1",
    title: "The Belgravia Penthouse",
    location: "Belgravia, London SW1X",
    price: "£14,500,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    beds: 5,
    baths: 6,
    sqft: "4,820",
    tag: "Exclusive Penthouse",
    category: "Buy",
    subOption: "Residential for Sale",
    badgeColor: "bg-secondary text-primary"
  },
  {
    id: "l1",
    title: "The Cote d'Azur Villa",
    location: "Saint-Jean-Cap-Ferrat, France",
    price: "€28,500,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    beds: 6,
    baths: 7,
    sqft: "6,200",
    tag: "Signature Waterfront",
    category: "Buy",
    subOption: "Luxury Properties",
    badgeColor: "bg-amber-100 text-amber-900 border border-amber-200"
  },
  {
    id: "r1",
    title: "Knightsbridge Luxury Townhouse",
    location: "Knightsbridge, London SW7",
    price: "£4,500 / week",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    beds: 4,
    baths: 4,
    sqft: "3,100",
    tag: "Heritage Residence",
    category: "Rent",
    subOption: "Residential for Rent",
    badgeColor: "bg-blue-50 text-blue-900 border border-blue-150"
  }
];

export function FeaturedProperties({ onNavigate }: FeaturedPropertiesProps) {
  const handleViewDetails = (category: string, subOption: string) => {
    if (onNavigate) {
      onNavigate(category, subOption);
    }
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-800 font-semibold block mb-3">
              Elite Curated Collections
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-primary leading-tight">
              Featured Global Residences
            </h2>
            <p className="text-slate-500 font-sans text-sm mt-3 leading-relaxed">
              Explore a hand-picked selection of our most spectacular properties, ranging from elegant London townhouses to breathtaking overseas estates.
            </p>
          </div>
          
          <div className="flex gap-4 items-center">
            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-full font-sans shadow-sm">
              <Gem className="w-3.5 h-3.5 text-secondary" />
              <span>Verified Off-Market Listings Available On Inquiry</span>
            </div>
            <Button 
              onClick={() => handleViewDetails("Buy", "Luxury Properties")}
              variant="outline" 
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-sans"
            >
              View Luxury Portfolio
            </Button>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full rounded-sm overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Premium tag overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`text-[10px] font-sans font-semibold tracking-wider uppercase px-2.5 py-1.5 shadow-sm rounded-sm ${listing.badgeColor}`}>
                    {listing.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 text-white font-serif text-xl tracking-tight font-medium z-10 drop-shadow-sm">
                  {listing.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs uppercase tracking-widest mb-2 font-sans">
                  <span>{listing.location}</span>
                </div>
                
                <h3 className="text-xl font-serif text-primary font-light mb-4 group-hover:text-secondary transition-colors duration-300">
                  {listing.title}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 py-4 my-auto border-t border-b border-slate-100 text-slate-500 text-xs font-sans">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                    <span><strong>{listing.beds}</strong> Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                    <span><strong>{listing.baths}</strong> Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize className="w-4 h-4 text-slate-400 stroke-[1.5]" />
                    <span><strong>{listing.sqft}</strong> sq ft</span>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-5 pt-1 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Verified Registry</span>
                  </div>
                  <button
                    onClick={() => handleViewDetails(listing.category, listing.subOption)}
                    className="text-xs font-semibold text-primary group-hover:text-secondary transition-colors flex items-center gap-1 cursor-pointer font-sans uppercase tracking-wider"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
