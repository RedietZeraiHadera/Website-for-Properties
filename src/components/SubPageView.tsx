import * as React from "react";
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  FileText, 
  Calendar, 
  User, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  SlidersHorizontal,
  Mail,
  Phone,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navigationData, SubMenuOption } from "../data/navigationData";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SubPageViewProps {
  category: string;
  subOptionTitle: string;
  onBack: () => void;
  onNavigate: (category: string, optionTitle: string) => void;
}

export function SubPageView({ category, subOptionTitle, onBack, onNavigate }: SubPageViewProps) {
  const categoryData = navigationData[category];
  const option = categoryData?.options.find(o => o.title === subOptionTitle);

  // States for interactive filters (properties)
  const [priceFilter, setPriceFilter] = React.useState<string>("all");
  const [bedsFilter, setBedsFilter] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  // Form states
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formStep, setFormStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    postcode: "",
    propertyType: "House",
    beds: "3",
    name: "",
    email: "",
    phone: "",
    message: "",
    timeframe: "Within 3 months"
  });

  // Modal / Detailed article read state
  const [activeArticleId, setActiveArticleId] = React.useState<string | null>(null);
  const [activePropertyId, setActivePropertyId] = React.useState<string | null>(null);

  // Reset states on change of view
  React.useEffect(() => {
    setFormSubmitted(false);
    setFormStep(1);
    setActiveArticleId(null);
    setActivePropertyId(null);
  }, [category, subOptionTitle]);

  if (!option) {
    return (
      <div className="py-24 text-center">
        <p className="text-muted-foreground">Category option not found.</p>
        <Button onClick={onBack} variant="outline" className="mt-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>
      </div>
    );
  }

  // Handle Form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 2 && option.formType === 'valuation') {
      setFormStep(2);
    } else {
      setFormSubmitted(true);
    }
  };

  // Filter properties logic
  const filteredItems = (option.items || []).filter(item => {
    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title?.toLowerCase().includes(q);
      const matchLoc = item.location?.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc) return false;
    }

    // Beds
    if (bedsFilter !== "all" && item.beds) {
      if (bedsFilter === "5+" && item.beds < 5) return false;
      if (bedsFilter === "3+" && item.beds < 3) return false;
    }

    // Price
    if (priceFilter !== "all" && item.price) {
      const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
      if (!isNaN(numericPrice)) {
        if (priceFilter === "under-5m" && numericPrice >= 5000000) return false;
        if (priceFilter === "5m-15m" && (numericPrice < 5000000 || numericPrice > 15000000)) return false;
        if (priceFilter === "over-15m" && numericPrice <= 15000000) return false;
      }
    }

    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      {/* breadcrumbs */}
      <div className="bg-white border-b border-slate-100 py-3">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap items-center gap-4 text-xs font-sans text-muted-foreground">
          <button 
            onClick={onBack} 
            className="flex items-center gap-1.5 font-medium text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to main site
          </button>
          
          <span className="text-slate-200 hidden sm:inline">|</span>

          <div className="flex items-center gap-2">
            <button onClick={onBack} className="hover:text-primary transition-colors flex items-center gap-1">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-slate-400">{category}</span>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-primary font-medium">{subOptionTitle}</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-secondary uppercase tracking-widest text-xs font-semibold block mb-2">
            Luxury Residence Global
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-4">
            {subOptionTitle}
          </h1>
          <p className="text-slate-300 font-sans max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {option.description}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 mt-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar for Quick Options */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-none border border-slate-150 shadow-sm sticky top-28">
              <h3 className="font-serif text-lg text-primary font-medium mb-4 pb-2 border-b border-slate-100">
                Explore {category}
              </h3>
              <ul className="space-y-2 font-sans text-sm">
                {categoryData.options.map((opt) => (
                  <li key={opt.title}>
                    <button
                      onClick={() => onNavigate(category, opt.title)}
                      className={`w-full text-left py-2 px-3 transition-colors flex items-center justify-between ${
                        opt.title === subOptionTitle
                          ? "bg-primary/5 text-primary font-medium border-l-2 border-secondary"
                          : "text-slate-600 hover:text-primary hover:bg-slate-50"
                      }`}
                    >
                      <span>{opt.title}</span>
                      <ChevronRight className="w-4 h-4 opacity-55" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Need Expert Advice?
                </p>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Connect with our prime London residential advisors immediately.
                </p>
                <div className="space-y-2">
                  <a 
                    href="tel:+442076298171" 
                    className="flex items-center gap-2 text-xs font-medium text-primary hover:text-secondary py-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-secondary" /> +44 (0) 20 7629 8171
                  </a>
                  <a 
                    href="mailto:london@luxuryresidence.com" 
                    className="flex items-center gap-2 text-xs font-medium text-primary hover:text-secondary py-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-secondary" /> london@luxuryresidence.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Panel Content */}
          <div className="lg:col-span-3">
            
            {/* TYPE: PROPERTIES */}
            {option.type === "properties" && (
              <div className="space-y-6">
                
                {/* Search & Filters */}
                <div className="bg-white p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search locations..."
                      className="pl-9 pr-4 py-2 w-full text-sm border border-slate-200 outline-none focus:border-primary transition-all font-sans"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                      <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                      <span>Filters:</span>
                    </div>

                    <select
                      className="bg-white border border-slate-200 px-3 py-1.5 text-xs font-sans outline-none focus:border-primary"
                      value={priceFilter}
                      onChange={(e) => setPriceFilter(e.target.value)}
                    >
                      <option value="all">Any Price</option>
                      <option value="under-5m">Under £5,000,000</option>
                      <option value="5m-15m">£5,000,000 - £15,000,000</option>
                      <option value="over-15m">Above £15,000,000</option>
                    </select>

                    <select
                      className="bg-white border border-slate-200 px-3 py-1.5 text-xs font-sans outline-none focus:border-primary"
                      value={bedsFilter}
                      onChange={(e) => setBedsFilter(e.target.value)}
                    >
                      <option value="all">Any Bedrooms</option>
                      <option value="3+">3+ Bedrooms</option>
                      <option value="5+">5+ Bedrooms</option>
                    </select>
                  </div>
                </div>

                {/* Properties Grid */}
                {filteredItems.length === 0 ? (
                  <div className="bg-white border border-slate-200 py-16 px-4 text-center">
                    <p className="text-slate-500 font-sans">No matching listings found. Try updating your filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        layoutId={`property-card-${item.id}`}
                        className="bg-white border border-slate-200 overflow-hidden group hover:shadow-md transition-shadow flex flex-col"
                      >
                        <div className="relative h-64 overflow-hidden bg-slate-100">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                            {item.tags?.map(tag => (
                              <span key={tag} className="bg-primary/90 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 font-sans font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-secondary font-sans font-semibold text-lg tracking-tight block mb-1">
                              {item.price}
                            </span>
                            <h4 className="font-serif text-xl font-medium text-primary mb-1">
                              {item.title}
                            </h4>
                            <p className="text-slate-500 text-xs font-sans flex items-center gap-1 mb-4">
                              <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" /> {item.location}
                            </p>
                          </div>

                          <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                            <div className="flex items-center gap-4 text-slate-600 text-xs font-sans">
                              {item.beds && (
                                <span className="flex items-center gap-1">
                                  <Bed className="w-3.5 h-3.5 opacity-60" /> <strong>{item.beds}</strong> Bed
                                </span>
                              )}
                              {item.baths && (
                                <span className="flex items-center gap-1">
                                  <Bath className="w-3.5 h-3.5 opacity-60" /> <strong>{item.baths}</strong> Bath
                                </span>
                              )}
                              {item.sqft && (
                                <span className="flex items-center gap-1">
                                  <Maximize2 className="w-3.5 h-3.5 opacity-60" /> <strong>{item.sqft}</strong> sq ft
                                </span>
                              )}
                            </div>

                            <button 
                              onClick={() => setActivePropertyId(item.id)}
                              className="text-primary hover:text-secondary text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                            >
                              Details <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}


            {/* TYPE: ARTICLES */}
            {option.type === "articles" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(option.items || []).map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-350 transition-all shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 font-sans mb-3">
                          <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 text-[10px] uppercase tracking-wider">
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                        </div>
                        <h4 className="font-serif text-2xl font-normal text-primary leading-tight mb-3">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-sm font-sans mb-6 line-clamp-3 leading-relaxed">
                          Expert analysis exploring current structural microclimates, changing stamp duty margins, and key financial projections for global high-net-worth real estate strategies.
                        </p>
                      </div>

                      <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-primary font-bold text-xs font-serif uppercase">
                            {item.author?.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-primary">{item.author}</p>
                            <p className="text-[10px] text-slate-400">{item.date}</p>
                          </div>
                        </div>

                        <button 
                          onClick={() => setActiveArticleId(item.id)}
                          className="bg-primary hover:bg-secondary text-white text-xs font-semibold px-4 py-2 uppercase tracking-wider transition-colors"
                        >
                          Read Report
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* TYPE: STATS */}
            {option.type === "stats" && (
              <div className="space-y-8">
                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(option.items || []).map((item) => (
                    <div key={item.id} className="bg-white border border-slate-200 p-6 shadow-sm">
                      <span className="text-xs uppercase tracking-widest text-slate-400 block mb-1">
                        {item.title}
                      </span>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-serif text-primary font-bold">
                          {item.metric}
                        </span>
                        {item.trend === "up" && (
                          <span className="text-xs text-green-600 font-semibold flex items-center gap-0.5">
                            <TrendingUp className="w-3.5 h-3.5" /> Rise
                          </span>
                        )}
                        {item.trend === "down" && (
                          <span className="text-xs text-red-600 font-semibold flex items-center gap-0.5">
                            <TrendingDown className="w-3.5 h-3.5" /> Drop
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-sans font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-slate-400 font-sans italic">
                        {item.trendValue}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Interactive chart */}
                <div className="bg-white border border-slate-200 p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h4 className="font-serif text-xl font-medium text-primary">
                        Prime London Price Index Trend (10 Years)
                      </h4>
                      <p className="text-xs text-slate-400">Bespoke luxury housing metrics indexed from base year 2016</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-sans mt-2 md:mt-0">
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-primary inline-block rounded-sm"></span> Prime Central</span>
                      <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-secondary inline-block rounded-sm"></span> Outer Luxury</span>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="w-full h-64 relative bg-slate-50 border border-slate-100 p-4">
                    <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                      {/* Grid Lines */}
                      <line x1="0" y1="50" x2="500" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="150" x2="500" y2="150" stroke="#f1f5f9" strokeWidth="1" />

                      {/* Primary Curve */}
                      <path 
                        d="M 0 160 Q 50 150, 100 130 T 200 110 T 300 120 T 400 90 T 500 50" 
                        fill="none" 
                        stroke="#002D54" 
                        strokeWidth="3.5"
                      />
                      {/* Secondary Curve */}
                      <path 
                        d="M 0 170 Q 60 165, 120 145 T 240 135 T 360 115 T 480 80 T 500 65" 
                        fill="none" 
                        stroke="#E30613" 
                        strokeWidth="2.5"
                        strokeDasharray="4 2"
                      />

                      {/* Dots on peak */}
                      <circle cx="500" cy="50" r="5" fill="#002D54" />
                      <circle cx="500" cy="65" r="4" fill="#E30613" />
                    </svg>

                    {/* Chart Labels */}
                    <div className="absolute left-2 top-2 text-[10px] text-slate-400 font-mono">150 Index</div>
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-mono">100 Index</div>
                    <div className="absolute left-2 bottom-2 text-[10px] text-slate-400 font-mono">50 Index</div>

                    <div className="absolute bottom-1 right-2 flex justify-between w-[95%] text-[9px] font-sans text-slate-400 mt-2">
                      <span>2016</span>
                      <span>2018</span>
                      <span>2020</span>
                      <span>2022</span>
                      <span>2024</span>
                      <span>2026</span>
                    </div>
                  </div>
                </div>
              </div>
            )}


            {/* TYPE: FORM (Valuation/Request Contact) */}
            {option.type === "form" && (
              <div className="bg-white border border-slate-200 shadow-sm max-w-xl mx-auto overflow-hidden">
                <div className="bg-primary text-white p-6">
                  <h4 className="font-serif text-2xl font-light">
                    {option.formType === 'valuation' ? "Book a Professional Market Valuation" : "Enquire with Luxury Residence Experts"}
                  </h4>
                  <p className="text-xs text-slate-300 font-sans mt-2">
                    {option.formType === 'valuation' 
                      ? "A local expert director will evaluate your property in line with prime global margins."
                      : "We will contact you within 2 business hours regarding your management queries."}
                  </p>
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {!formSubmitted ? (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleFormSubmit}
                        className="space-y-4 font-sans text-sm"
                      >
                        {option.formType === "valuation" && formStep === 1 && (
                          <motion.div 
                            key="step1"
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="space-y-4"
                          >
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                Property Postcode / Zip Code *
                              </label>
                              <Input 
                                required
                                placeholder="e.g. SW1X 7XL"
                                value={formData.postcode}
                                onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                  Property Type
                                </label>
                                <select 
                                  className="w-full bg-transparent border border-input rounded-lg h-9 px-2 text-sm outline-none focus:border-primary"
                                  value={formData.propertyType}
                                  onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                                >
                                  <option>House</option>
                                  <option>Apartment</option>
                                  <option>Penthouse</option>
                                  <option>Commercial</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                  Bedrooms
                                </label>
                                <select 
                                  className="w-full bg-transparent border border-input rounded-lg h-9 px-2 text-sm outline-none focus:border-primary"
                                  value={formData.beds}
                                  onChange={(e) => setFormData({...formData, beds: e.target.value})}
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5+</option>
                                </select>
                              </div>
                            </div>

                            <Button type="submit" className="w-full mt-4 bg-primary text-white font-semibold uppercase tracking-wider py-2">
                              Next: Contact Details
                            </Button>
                          </motion.div>
                        )}

                        {((option.formType === "valuation" && formStep === 2) || option.formType !== "valuation") && (
                          <motion.div 
                            key="step2"
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="space-y-4"
                          >
                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                Your Full Name *
                              </label>
                              <Input 
                                required
                                placeholder="e.g. James Sterling"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                  Email Address *
                                </label>
                                <Input 
                                  required
                                  type="email"
                                  placeholder="e.g. james@example.com"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                  Phone Number *
                                </label>
                                <Input 
                                  required
                                  placeholder="e.g. +44 7700 900077"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                                Additional Instructions / Message
                              </label>
                              <textarea 
                                rows={3}
                                className="w-full rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-sm outline-none focus:border-primary transition-all font-sans"
                                placeholder="Provide extra details..."
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                              />
                            </div>

                            <div className="flex gap-2">
                              {option.formType === "valuation" && (
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  onClick={() => setFormStep(1)}
                                  className="w-1/3"
                                >
                                  Back
                                </Button>
                              )}
                              <Button type="submit" className={`bg-secondary text-white font-semibold uppercase tracking-wider py-2 ${option.formType === "valuation" ? "w-2/3" : "w-full"}`}>
                                Submit Request
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </motion.form>
                    ) : (
                      <motion.div 
                        key="success"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-8 space-y-4"
                      >
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500 border border-green-200">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h5 className="font-serif text-2xl font-medium text-primary">
                          Request Successfully Registered
                        </h5>
                        <p className="text-slate-500 font-sans max-w-sm mx-auto text-sm leading-relaxed">
                          Thank you, <strong>{formData.name}</strong>. An advisor from Luxury Residence London has received your credentials and will consult the registry regarding your postcode details shortly.
                        </p>
                        <Button onClick={() => setFormSubmitted(false)} variant="outline" className="mt-4">
                          New Request
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticleId && (() => {
          const art = (option.items || []).find(a => a.id === activeArticleId);
          if (!art) return null;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="bg-white max-w-2xl w-full p-8 relative shadow-2xl border border-slate-150"
              >
                <button 
                  onClick={() => setActiveArticleId(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors text-xs font-semibold"
                >
                  Close [×]
                </button>
                <span className="bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 mb-4 inline-block">
                  {art.category} • {art.readTime}
                </span>
                <h3 className="font-serif text-3xl font-light text-primary leading-tight mb-4">
                  {art.title}
                </h3>
                <div className="flex items-center gap-2 mb-6 text-xs text-slate-500">
                  <span className="font-semibold text-primary">{art.author}</span>
                  <span>•</span>
                  <span>{art.date}</span>
                </div>
                <div className="space-y-4 font-sans text-sm text-slate-600 leading-relaxed">
                  <p className="font-serif italic text-lg text-slate-700 leading-relaxed mb-4">
                    "Prime central property coordinates have remained resilient despite wider microeconomic shifts, driven largely by solid capital preservation behaviors among international purchasers."
                  </p>
                  <p>
                    As we navigate mid-2026, the demand for core estates across Kensington, Belgravia, and Maryfair remains highly competitive. Low transactional inventory has kept support levels intact even as mortgage yields settle.
                  </p>
                  <p>
                    Furthermore, changing regulations surrounding Energy Performance Certificates (EPC) have spurred proactive refurbishment works across premier portfolios. Landlords are prioritizing long-term energy standards to safeguard asset valuation yields.
                  </p>
                  <p>
                    For prospective buyers, the current market presents a favorable window of relative stability. We advise establishing lines of capital pre-approval early to engage in competitive luxury bidding cycles successfully.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <Button onClick={() => setActiveArticleId(null)} className="bg-primary text-white">
                    Close Report
                  </Button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      {/* Property Details Modal */}
      <AnimatePresence>
        {activePropertyId && (() => {
          const prop = (option.items || []).find(p => p.id === activePropertyId);
          if (!prop) return null;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white max-w-4xl w-full relative shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
              >
                <div className="relative h-64 md:h-full bg-slate-100">
                  <img src={prop.image} alt={prop.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setActivePropertyId(null)}
                    className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white text-xs font-semibold px-3 py-1 shadow"
                  >
                    ← Back
                  </button>
                </div>

                <div className="p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-secondary font-serif text-2xl font-bold">
                        {prop.price}
                      </span>
                      <button 
                        onClick={() => setActivePropertyId(null)}
                        className="text-slate-400 hover:text-primary transition-colors text-xs font-semibold"
                      >
                        [×]
                      </button>
                    </div>

                    <h3 className="font-serif text-3xl font-light text-primary mb-1">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mb-6">
                      <MapPin className="w-3.5 h-3.5 text-secondary" /> {prop.location}
                    </p>

                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100 mb-6 font-sans text-xs text-slate-600">
                      <div>
                        <span className="block text-slate-400">Bedrooms</span>
                        <span className="font-semibold text-sm text-primary">{prop.beds || "N/A"}</span>
                      </div>
                      <div>
                        <span className="block text-slate-400">Bathrooms</span>
                        <span className="font-semibold text-sm text-primary">{prop.baths || "N/A"}</span>
                      </div>
                      <div>
                        <span className="block text-slate-400">Size</span>
                        <span className="font-semibold text-sm text-primary">{prop.sqft || "N/A"} sq ft</span>
                      </div>
                    </div>

                    <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6">
                      An exceptional estate of uncompromised caliber, exemplifying Luxury Residence's premium portfolio. Highlights include magnificent open reception chambers, secure subterranean parking, concierge services, and pristine modern amenities.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm font-semibold text-primary mb-3">
                      Enquire about this listing
                    </h4>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert("Inquiry registered! A Luxury Residence representative will contact you.");
                        setActivePropertyId(null);
                      }}
                      className="space-y-3"
                    >
                      <Input required placeholder="Your Name" className="text-xs py-1.5" />
                      <div className="grid grid-cols-2 gap-2">
                        <Input required type="email" placeholder="Your Email" className="text-xs py-1.5" />
                        <Input required placeholder="Your Phone" className="text-xs py-1.5" />
                      </div>
                      <Button type="submit" className="w-full bg-secondary text-white text-xs font-semibold uppercase tracking-wider py-2">
                        Request Viewing Details
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </div>
  );
}
