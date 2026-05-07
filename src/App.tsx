import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Categories } from "./components/Categories";
import { Research } from "./components/Research";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Categories />
        <Research />
        
        {/* Additional "The Knight Frank Difference" Section */}
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
      </main>
      <Footer />
    </div>
  );
}
