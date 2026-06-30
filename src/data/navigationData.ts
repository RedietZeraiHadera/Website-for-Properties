export interface SubMenuOption {
  title: string;
  description: string;
  type: 'properties' | 'articles' | 'form' | 'stats';
  items?: Array<{
    id: string;
    title: string;
    subtitle?: string;
    image?: string;
    price?: string;
    location?: string;
    beds?: number;
    baths?: number;
    sqft?: string;
    tags?: string[];
    author?: string;
    date?: string;
    readTime?: string;
    category?: string;
    metric?: string;
    label?: string;
    trend?: 'up' | 'down' | 'stable';
    trendValue?: string;
  }>;
  formType?: 'valuation' | 'enquiry' | 'newsletter';
}

export interface NavigationCategory {
  title: string;
  options: SubMenuOption[];
}

export const navigationData: Record<string, NavigationCategory> = {
  Buy: {
    title: "Buy",
    options: [
      {
        title: "Residential for Sale",
        description: "Explore exquisite homes, premium apartments, and estates for sale.",
        type: "properties",
        items: [
          {
            id: "b1",
            title: "The Belgravia Penthouse",
            location: "Belgravia, London SW1X",
            price: "£14,500,000",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
            beds: 5,
            baths: 6,
            sqft: "4,820",
            tags: ["Penthouse", "New Build", "Concierge"]
          },
          {
            id: "b2",
            title: "Mayfair Edwardian Manor",
            location: "Mayfair, London W1K",
            price: "£22,000,000",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
            beds: 7,
            baths: 8,
            sqft: "7,450",
            tags: ["Heritage", "Private Garden", "Cellar"]
          },
          {
            id: "b3",
            title: "Chelsea Riverside Apartment",
            location: "Chelsea, London SW3",
            price: "£6,750,000",
            image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
            beds: 3,
            baths: 3,
            sqft: "2,100",
            tags: ["Waterfront", "Balcony", "Parking"]
          }
        ]
      },
      {
        title: "Luxury Properties",
        description: "Prestige listings and ultra-exclusive real estate worldwide.",
        type: "properties",
        items: [
          {
            id: "l1",
            title: "The Cote d'Azur Villa",
            location: "Saint-Jean-Cap-Ferrat, France",
            price: "€28,500,000",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            beds: 6,
            baths: 7,
            sqft: "6,200",
            tags: ["Infinity Pool", "Ocean View", "Helipad"]
          },
          {
            id: "l2",
            title: "Alpine Chalet Cresta",
            location: "Verbier, Switzerland",
            price: "CHF18,900,000",
            image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
            beds: 5,
            baths: 5,
            sqft: "4,500",
            tags: ["Ski-in/Ski-out", "Spa/Sauna", "Wine Cave"]
          }
        ]
      },
      {
        title: "New Developments",
        description: "Be the first to secure plots and residences in premium upcoming structures.",
        type: "properties",
        items: [
          {
            id: "nd1",
            title: "The Regent's Collection",
            location: "Regent's Park, London NW1",
            price: "From £2,450,000",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
            beds: 2,
            baths: 2,
            sqft: "1,150",
            tags: ["Under Construction", "Gym", "Lounge"]
          }
        ]
      },
      {
        title: "Buying Guide",
        description: "Essential advice and steps for navigating luxury property purchases.",
        type: "articles",
        items: [
          {
            id: "ab1",
            title: "Understanding SDLT (Stamp Duty) for Luxury Properties",
            author: "Liam Montgomery",
            date: "June 2026",
            readTime: "6 min read",
            category: "Advisory"
          },
          {
            id: "ab2",
            title: "The Complete Guide to Prime London Residential Purchases",
            author: "Sarah Jenkins",
            date: "May 2026",
            readTime: "12 min read",
            category: "Guide"
          }
        ]
      }
    ]
  },
  Rent: {
    title: "Rent",
    options: [
      {
        title: "Residential for Rent",
        description: "Premium rental options including historic townhouses and high-spec flats.",
        type: "properties",
        items: [
          {
            id: "r1",
            title: "Knightsbridge Luxury Townhouse",
            location: "Knightsbridge, London SW7",
            price: "£4,500 / week",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
            beds: 4,
            baths: 4,
            sqft: "3,100",
            tags: ["Furnished", "24/7 Security", "Roof Terrace"]
          },
          {
            id: "r2",
            title: "Notting Hill Garden Duplex",
            location: "Notting Hill, London W11",
            price: "£1,850 / week",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
            beds: 2,
            baths: 2,
            sqft: "1,450",
            tags: ["Private Entrance", "Garden", "Pet Friendly"]
          }
        ]
      },
      {
        title: "Luxury Rentals",
        description: "Elite homes for lease with short or long-term dynamic terms.",
        type: "properties",
        items: [
          {
            id: "lr1",
            title: "The Peak Residence",
            location: "The Peak, Hong Kong",
            price: "HK$250,000 / month",
            image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
            beds: 4,
            baths: 4.5,
            sqft: "5,100",
            tags: ["Panoramic Views", "Pool", "Guard Gated"]
          }
        ]
      },
      {
        title: "Renting Guide",
        description: "What tenant covenants, holding deposits, and references mean in premium zones.",
        type: "articles",
        items: [
          {
            id: "ar1",
            title: "Navigating Tenancy Agreements in High-Value Postcodes",
            author: "Rebecca Sterling",
            date: "April 2026",
            readTime: "5 min read",
            category: "Finance"
          }
        ]
      }
    ]
  },
  Sell: {
    title: "Sell",
    options: [
      {
        title: "Request a Valuation",
        description: "Get a bespoke market estimation for your property from local directors.",
        type: "form",
        formType: "valuation"
      },
      {
        title: "Selling Your Home",
        description: "How our 600-office global network positions your luxury listing for maximum impact.",
        type: "articles",
        items: [
          {
            id: "s1",
            title: "Maximizing Appeal: Preparing Your Property for High-Net-Worth Buyers",
            author: "Alistair Vance",
            date: "June 2026",
            readTime: "8 min read",
            category: "Staging"
          },
          {
            id: "s2",
            title: "Off-Market Sales vs. Global Campaigns: Choosing the Right Path",
            author: "Edward Cole",
            date: "March 2026",
            readTime: "7 min read",
            category: "Strategy"
          }
        ]
      }
    ]
  },
  Landlords: {
    title: "Landlords",
    options: [
      {
        title: "Property Management",
        description: "Dedicated property management services for premium landlords.",
        type: "form",
        formType: "enquiry"
      },
      {
        title: "Landlord Advisory",
        description: "Understand the shifting compliance, tax, and legislative landscopes.",
        type: "articles",
        items: [
          {
            id: "lnd1",
            title: "EPC Regulations Update: Preparing Your Rental Portfolios",
            author: "Fiona Macpherson",
            date: "May 2026",
            readTime: "9 min read",
            category: "Regulation"
          },
          {
            id: "lnd2",
            title: "Optimal Landlord Tax Structuring: Expert Recommendations",
            author: "Marcus Vance",
            date: "Feb 2026",
            readTime: "11 min read",
            category: "Taxation"
          }
        ]
      }
    ]
  },
  Commercial: {
    title: "Commercial",
    options: [
      {
        title: "Offices for Rent",
        description: "A-Grade corporate settings, headquarters, and coworking hubs in financial districts.",
        type: "properties",
        items: [
          {
            id: "c1",
            title: "The Broadgate Sky Offices",
            location: "Broadgate, London EC2M",
            price: "£85 / sq ft",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            sqft: "12,500 - 45,000",
            tags: ["BREEAM Excellent", "Terraces", "Fitted out"]
          },
          {
            id: "c2",
            title: "Canary Wharf Plaza Suite",
            location: "Canary Wharf, London E14",
            price: "£62 / sq ft",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
            sqft: "8,200",
            tags: ["High Rise", "Flexible Layout", "Gym Access"]
          }
        ]
      },
      {
        title: "Commercial Sales",
        description: "Exclusive hotels, logistics warehouses, and mixed-use portfolios.",
        type: "properties",
        items: [
          {
            id: "cs1",
            title: "Prime Shoreditch Retail Block",
            location: "Shoreditch, London EC1A",
            price: "£11,250,000",
            image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80",
            sqft: "6,800",
            tags: ["Fully Let", "High Footfall", "Income Producing"]
          }
        ]
      }
    ]
  },
  Research: {
    title: "Research",
    options: [
      {
        title: "Global Research Reports",
        description: "Our signature analytics and insights trusted by institutions worldwide.",
        type: "articles",
        items: [
          {
            id: "res1",
            title: "The Wealth Report 2026",
            author: "Dr. Liam Bailey",
            date: "March 2026",
            readTime: "45 min read",
            category: "Flagship"
          },
          {
            id: "res2",
            title: "Global Cities Index H1 2026",
            author: "Flora Harley",
            date: "April 2026",
            readTime: "15 min read",
            category: "Index"
          }
        ]
      },
      {
        title: "Market Updates",
        description: "Macro indicators and price indexes across prime zones.",
        type: "stats",
        items: [
          {
            id: "st1",
            title: "Prime Central London Prices",
            metric: "+2.4%",
            label: "Annual Growth YoY",
            trend: "up",
            trendValue: "+0.4% from Q1"
          },
          {
            id: "st2",
            title: "Global Prime Residential Index",
            metric: "+4.1%",
            label: "Average YoY Growth Across 46 Cities",
            trend: "up",
            trendValue: "+1.2% average"
          },
          {
            id: "st3",
            title: "Average Yield in High-End Lettings",
            metric: "4.8%",
            label: "Gross Rental Yield",
            trend: "stable",
            trendValue: "0.0% change"
          }
        ]
      }
    ]
  },
  Overseas: {
    title: "Overseas",
    options: [
      {
        title: "European Properties",
        description: "Fabulous villas in Tuscany, penthouses in Monaco, and retreats in Marbella.",
        type: "properties",
        items: [
          {
            id: "o1",
            title: "Tuscan Wine Estate",
            location: "Siena, Tuscany, Italy",
            price: "€8,400,000",
            image: "https://images.unsplash.com/photo-1502005229762-fc1b2381f0db?auto=format&fit=crop&w=800&q=80",
            beds: 8,
            baths: 9,
            sqft: "8,900",
            tags: ["Vineyard", "Pool", "Historical Manor"]
          },
          {
            id: "o2",
            title: "Ibiza Sea-View Estate",
            location: "Es Cubells, Ibiza",
            price: "€12,500,000",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
            beds: 6,
            baths: 6,
            sqft: "5,400",
            tags: ["Sea Front", "Infinity Pool", "Privacy"]
          }
        ]
      },
      {
        title: "US & Americas Properties",
        description: "Luxury brownstones in Manhattan, waterfront mansions in Miami, and estates in Aspen.",
        type: "properties",
        items: [
          {
            id: "o3",
            title: "Miami Beach Oceanfront Villa",
            location: "Star Island, Miami, FL",
            price: "$34,000,000",
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
            beds: 6,
            baths: 8,
            sqft: "9,200",
            tags: ["Ocean Access", "Dock", "Gated Compound"]
          }
        ]
      }
    ]
  }
};
