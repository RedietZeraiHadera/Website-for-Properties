import * as React from "react";
import { TrendingUp, ArrowUpRight, Calculator, RefreshCw, BarChart3, LineChart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "motion/react";

interface MarketDashboardProps {
  onNavigate?: (category: string, subOptionTitle: string) => void;
}

export function MarketDashboard({ onNavigate }: MarketDashboardProps) {
  // Investment Yield Calculator states configured with representative UAE values (5,000,000 AED, 25,000 AED monthly rent)
  const [purchasePrice, setPurchasePrice] = React.useState<string>("5000000");
  const [monthlyRent, setMonthlyRent] = React.useState<string>("25000");
  const [annualYield, setAnnualYield] = React.useState<number>(6.0);

  React.useEffect(() => {
    const price = parseFloat(purchasePrice);
    const rent = parseFloat(monthlyRent);
    if (price > 0 && rent > 0) {
      const calculatedYield = ((rent * 12) / price) * 100;
      setAnnualYield(parseFloat(calculatedYield.toFixed(2)));
    } else {
      setAnnualYield(0);
    }
  }, [purchasePrice, monthlyRent]);

  const stats = [
    {
      title: "Prime Dubai Residential Index",
      value: "+8.4%",
      label: "Annual Growth YoY",
      trend: "up",
      trendValue: "+1.8% from last quarter",
      points: [25, 38, 30, 52, 45, 68, 84] // Sparkline values
    },
    {
      title: "Global Prime Residential Index",
      value: "+4.1%",
      label: "Average YoY Growth (46 Cities)",
      trend: "up",
      trendValue: "+1.2% above historical index",
      points: [15, 25, 35, 30, 42, 48, 59] // Sparkline values
    },
    {
      title: "Average Yield in High-End Lettings",
      value: "6.2%",
      label: "Gross Rental Yield",
      trend: "stable",
      trendValue: "0.0% change",
      points: [58, 60, 61, 62, 62, 62, 62] // Sparkline values
    }
  ];

  return (
    <section className="py-24 bg-primary text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative ambient visual noise */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold block mb-3">
            Institutional Intelligence
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">
            Global Market Intelligence
          </h2>
          <p className="text-slate-400 font-sans text-sm mt-3 leading-relaxed">
            Unrivalled data and advisory analytics from our research division, empowering high-net-worth individuals and corporate partners to make astute, well-timed acquisitions in the United Arab Emirates.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Index Cards (2 columns on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-md flex flex-col justify-between hover:border-white/20 transition-all group"
                >
                  <div>
                    <span className="text-xs text-slate-400 font-sans font-medium block mb-1">
                      {stat.title}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-serif text-secondary font-semibold my-2">
                      {stat.value}
                    </h4>
                    <p className="text-[11px] text-slate-300 font-sans tracking-wide">
                      {stat.label}
                    </p>
                  </div>

                  {/* Dynamic Sparkline rendering with elegant SVG paths */}
                  <div className="h-12 w-full mt-6 mb-4 relative">
                    <svg className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Gradient Fill */}
                      <path
                        d={`M 0 48 ${stat.points.map((p, i) => `L ${(i / (stat.points.length - 1)) * 140} ${48 - p}`).join(" ")} L 140 48 Z`}
                        fill={`url(#grad-${idx})`}
                        className="transition-all duration-1000"
                      />
                      {/* Sparkline Stroke */}
                      <path
                        d={stat.points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i / (stat.points.length - 1)) * 140} ${48 - p}`).join(" ")}
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="2"
                        className="transition-all duration-1000"
                      />
                      {/* End Point Glow indicator */}
                      <circle
                        cx="140"
                        cy={48 - stat.points[stat.points.length - 1]}
                        r="3"
                        fill="#D4AF37"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-sans font-medium border-t border-white/5 pt-3">
                    <TrendingUp className="w-3.5 h-3.5 text-secondary" />
                    <span>{stat.trendValue}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium analytical insight block */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-md flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-secondary/10 rounded-full text-secondary hidden md:block">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h5 className="font-serif text-lg font-light text-slate-200 mb-1">
                  Read our signature report: <span className="text-secondary italic">The Wealth Report 2026</span>
                </h5>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Our annual benchmark assessment explores global prime residential indices, generational wealth allocation, private investment inflows, and emerging luxury property hotspots in Dubai and Abu Dhabi.
                </p>
              </div>
              <Button 
                onClick={() => onNavigate && onNavigate("Research", "Global Research Reports")}
                className="bg-secondary hover:bg-secondary-hover text-primary rounded-none px-6 text-xs uppercase font-semibold tracking-wider font-sans shrink-0"
              >
                Access Reports <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Investment Yield Calculator Card */}
          <div className="bg-primary-hover border border-white/10 p-6 rounded-md flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-secondary" />
                <h4 className="font-serif text-xl font-light text-white">Yield Calculator</h4>
              </div>
              
              <p className="text-xs text-slate-400 font-sans mb-6 leading-relaxed">
                Estimate the potential rental return of high-end acquisitions with our interactive yield metrics.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1.5 font-sans">
                    Purchase Price (AED / Dirhams)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-xs font-sans font-semibold">AED</span>
                    <Input
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                      className="bg-white/5 border-white/10 pl-11 text-sm text-white focus-visible:ring-secondary rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1.5 font-sans">
                    Expected Monthly Rental Value
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-xs font-sans font-semibold">AED</span>
                    <Input
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                      className="bg-white/5 border-white/10 pl-11 text-sm text-white focus-visible:ring-secondary rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Yield display */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                Estimated Gross Annual Yield
              </span>
              <div className="text-4xl font-serif text-secondary font-bold tracking-tight">
                {annualYield}%
              </div>
              <p className="text-[10px] text-slate-400 font-sans mt-2 max-w-xs mx-auto">
                Prime Dubai residential averages currently range from 5.8% to 8.2% based on waterfront locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
