import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const articles = [
  {
    tag: "Market Update",
    title: "Renters’ Rights Act Fuels Growth in Prime London Rents",
    description: "New legislation is impacting the prime central London rental market with supply constraints continuing.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    date: "May 2026",
  },
  {
    tag: "Global Insights",
    title: "Hong Kong’s prime market turns a corner",
    description: "After several quarters of decline, Hong Kong's luxury residential market shows signs of stabilization.",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7a56?q=80&w=1000",
    date: "May 2026",
  },
  {
    tag: "Research",
    title: "Handful of larger deals pushed Q1 PBSA investment to £2.1 billion",
    description: "The student accommodation sector proves resilient with strong institutional interest in the first quarter.",
    image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=1000",
    date: "May 2026",
  },
];

export function Research() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Latest Insights</h2>
            <p className="text-4xl font-serif font-light text-primary">
              The intelligence behind the advice
            </p>
          </div>
          <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
            View all research <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title} className="border-none shadow-none group cursor-pointer bg-transparent">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-800 rounded-none font-normal">
                      {article.tag}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-serif leading-tight group-hover:text-primary/70 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
