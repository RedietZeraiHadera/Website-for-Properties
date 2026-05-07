import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Property"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center text-white mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight"
          >
            Find your next property
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white/95 backdrop-blur shadow-2xl overflow-hidden"
        >
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="w-full h-auto p-0 bg-slate-50/50 border-b border-slate-200">
              <TabsTrigger 
                value="buy" 
                className="flex-1 py-4 text-sm font-medium rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Buy
              </TabsTrigger>
              <TabsTrigger 
                value="rent" 
                className="flex-1 py-4 text-sm font-medium rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Rent
              </TabsTrigger>
              <TabsTrigger 
                value="commercial" 
                className="flex-1 py-4 text-sm font-medium rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Commercial
              </TabsTrigger>
              <TabsTrigger 
                value="overseas" 
                className="flex-1 py-4 text-sm font-medium rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Overseas
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="buy" className="p-4 md:p-6 m-0">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Input 
                    placeholder="Location, postcode or property ref" 
                    className="h-14 pl-4 text-lg border-slate-200 focus-visible:ring-primary"
                  />
                </div>
                <Button className="h-14 px-8 text-lg font-medium bg-primary hover:bg-primary/90">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </div>
            </TabsContent>
            
            {/* Same content for other tabs for brevity in replication */}
            <TabsContent value="rent" className="p-4 md:p-6 m-0">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Input 
                    placeholder="Location for rent..." 
                    className="h-14 pl-4 text-lg border-slate-200"
                  />
                </div>
                <Button className="h-14 px-8 text-lg font-medium bg-primary">
                  Search
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="commercial" className="p-4 md:p-6 m-0">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Input 
                    placeholder="Commercial location..." 
                    className="h-14 pl-4 text-lg border-slate-200"
                  />
                </div>
                <Button className="h-14 px-8 text-lg font-medium bg-primary">
                  Search
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="overseas" className="p-4 md:p-6 m-0">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Input 
                    placeholder="Country, region or city..." 
                    className="h-14 pl-4 text-lg border-slate-200"
                  />
                </div>
                <Button className="h-14 px-8 text-lg font-medium bg-primary">
                  Search
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
        <div className="w-px h-12 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
