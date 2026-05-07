import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  { title: "New homes", image: "https://images.unsplash.com/photo-1448630360428-65ff2c0257ef?q=80&w=1000" },
  { title: "Coastal", image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=1000" },
  { title: "London commute", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000" },
  { title: "Lateral living", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000" },
  { title: "With land", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000" },
  { title: "Village", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000" },
  { title: "Period homes", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000" },
  { title: "Penthouses", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000" },
];

export function Categories() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-3xl font-serif font-light">Find your lifestyle</h2>
      </div>
      
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max gap-6 px-4 md:px-6 pb-4">
          {categories.map((cat) => (
            <div 
              key={cat.title} 
              className="relative w-72 h-44 group cursor-pointer overflow-hidden shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white text-lg font-serif">
                  {cat.title}
                </span>
                <div className="w-0 group-hover:w-full h-px bg-white transition-all duration-500 mt-1" />
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </section>
  );
}
