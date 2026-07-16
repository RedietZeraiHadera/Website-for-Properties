import * as React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-serif mb-6 tracking-wide">LUXURY RESIDENCE</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Headquartered in Dubai, UAE, Luxury Residence has more than 500 offices across 60 territories and more than 20,000 people.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-xs">Our Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Residential Search</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial Search</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Valuation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lending Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research & Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-xs">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Complaints Procedure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider text-xs">Global Branches</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-slate-400 shrink-0" />
                <div>
                  <p className="text-sm font-medium">UAE Headquarters</p>
                  <p className="text-xs text-slate-400 mt-1">Al Fattan Currency House, DIFC, Dubai, UAE</p>
                </div>
              </div>
              <FooterButton variant="outline" className="w-full rounded-none border-white/20 hover:bg-white hover:text-primary">
                Find an office
              </FooterButton>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Modern Slavery Statement</a>
          </div>
          <p className="text-xs text-slate-500">
            © Luxury Residence LLP 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterButton({ children, className, variant }: { children: React.ReactNode, className?: string, variant?: string }) {
  const variants = {
    outline: "border border-white/20 bg-transparent hover:bg-white hover:text-primary"
  };
  return (
    <button className={`px-4 py-2 transition-all duration-300 text-sm font-medium ${variant === 'outline' ? variants.outline : ''} ${className}`}>
      {children}
    </button>
  );
}
