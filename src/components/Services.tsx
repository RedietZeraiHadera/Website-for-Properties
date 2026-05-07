import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Buyers",
    description: "Find your ideal home from our selection of properties for sale.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    href: "#",
  },
  {
    title: "Sellers",
    description: "Request a market appraisal or find out more about how we can help you sell.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
    href: "#",
  },
  {
    title: "Landlords",
    description: "Entrust your property to the experts. We'll find you the right tenant.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1000",
    href: "#",
  },
  {
    title: "Tenants",
    description: "Search the latest properties to rent and find your perfect home.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1000",
    href: "#",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-serif font-light text-primary max-w-2xl mx-auto">
            Tailored services for every property journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative block overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-primary/70 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-medium text-sm">
                Explore <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
