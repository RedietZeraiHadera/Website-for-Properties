import * as React from "react";
import { Search, User, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { title: "Buy", href: "#" },
  { title: "Rent", href: "#" },
  { title: "Sell", href: "#" },
  { title: "Landlords", href: "#" },
  { title: "Commercial", href: "#" },
  { title: "Research", href: "#" },
  { title: "Overseas", href: "#" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-border py-2" 
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 group">
            <span className={cn(
              "text-2xl font-serif font-bold tracking-tight transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}>
              KNIGHT FRANK
            </span>
          </a>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors hover:opacity-70",
                      isScrolled ? "text-primary" : "text-white"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "rounded-full",
              isScrolled ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
          >
            <Search className="w-5 h-5" />
          </Button>
          
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              className={cn(
                "hidden xl:flex text-sm font-medium",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              Contact us
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "rounded-full",
                isScrolled ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
            >
              <Globe className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "rounded-full",
                isScrolled ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
            >
              <User className="w-5 h-5" />
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "lg:hidden rounded-full",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white border-primary">
              <div className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <a 
                    key={item.title} 
                    href={item.href} 
                    className="text-2xl font-serif hover:pl-2 transition-all duration-300"
                  >
                    {item.title}
                  </a>
                ))}
                <div className="h-px bg-white/20 my-4" />
                <a href="#" className="flex items-center gap-2 text-lg">
                  <User size={20} /> My Account
                </a>
                <a href="#" className="flex items-center gap-2 text-lg">
                  <Globe size={20} /> Worldwide Branches
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
