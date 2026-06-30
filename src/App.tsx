import * as React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { FeaturedProperties } from "./components/FeaturedProperties";
import { MarketDashboard } from "./components/MarketDashboard";
import { Categories } from "./components/Categories";
import { Research } from "./components/Research";
import { Footer } from "./components/Footer";
import { SubPageView } from "./components/SubPageView";

export default function App() {
  const [activeView, setActiveView] = React.useState<{ category: string; subOptionTitle: string } | null>(null);

  const handleNavigate = (category: string, subOptionTitle: string) => {
    setActiveView({ category, subOptionTitle });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setActiveView(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        onNavigate={handleNavigate} 
        onBackToHome={handleBackToHome} 
        activeView={activeView} 
      />
      <main>
        {activeView ? (
          <SubPageView 
            category={activeView.category} 
            subOptionTitle={activeView.subOptionTitle} 
            onBack={handleBackToHome} 
            onNavigate={handleNavigate} 
          />
        ) : (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services />
            <FeaturedProperties onNavigate={handleNavigate} />
            <MarketDashboard onNavigate={handleNavigate} />
            <Categories />
            <Research />
            
            {/* Additional "The Luxury Residence Difference" Section */}
            <section className="py-24 bg-primary text-white text-center">
              <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 max-w-3xl mx-auto leading-tight">
                  A global authority on luxury property for over 125 years
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
                  <div>
                    <span className="block text-4xl font-serif mb-2">600+</span>
                    <span className="text-slate-400 text-sm uppercase tracking-widest">Offices</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-serif mb-2">60</span>
                    <span className="text-slate-400 text-sm uppercase tracking-widest">Territories</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-serif mb-2">20k+</span>
                    <span className="text-slate-400 text-sm uppercase tracking-widest">People</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-serif mb-2">1896</span>
                    <span className="text-slate-400 text-sm uppercase tracking-widest">Est. Since</span>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
