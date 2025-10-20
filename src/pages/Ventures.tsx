import PageLayout from "@/components/PageLayout";
import { Building2, Leaf, Wheat } from "lucide-react";
import agriTech from "@/assets/agri-tech.jpg";
import landRehab from "@/assets/land-rehab.jpg";
import communityGarden from "@/assets/community-garden.jpg";

const Ventures = () => {
  const ventures = [
    {
      icon: Building2,
      title: "Agricultural Holdings & Business Development",
      description:
        "PSJ Group manages a diversified agricultural portfolio including Black Grain Merchant, PLB Agri Holdings, Black Meat Co, SP Agri Distributors, Black Commodities, and FOAGRI (AI & Engineering).",
      capabilities: [
        "Diversified agricultural portfolio",
        "Agribusiness development",
        "Strategic partnerships",
        "Market access solutions",
      ],
      image: agriTech,
    },
    {
      icon: Leaf,
      title: "Land Rehabilitation & Climate Smart Solutions",
      description:
        "Co-founder of Land Rehabilitation Company and AgriMintech, PSJ Group leads innovation in mine land restoration and coal ash beneficiation, working with Eskom and the University of Pretoria.",
      capabilities: [
        "Mine land rehabilitation",
        "Coal ash beneficiation",
        "Green economy solutions",
      ],
      image: landRehab,
    },
    {
      icon: Wheat,
      title: "Food Security & Community Gardens",
      description:
        "Through safoodgardens.org and A Million Food Gardens for Mandela Day, PSJ Group promotes climate-smart agriculture and national food independence.",
      capabilities: [
        "Food garden establishment",
        "Smallholder farmer support",
        "Zero hunger programs",
        "Community training",
      ],
      image: communityGarden,
    },
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Our Ventures</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Integrated Solutions for Agricultural Transformation
          </p>
        </div>
      </section>

      {/* Ventures */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`animate-fade-in ${index % 2 === 1 ? "md:order-2" : ""}`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                    <venture.icon className="text-primary" size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {venture.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {venture.description}
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground text-lg">Core Capabilities:</h3>
                  <ul className="space-y-2">
                    {venture.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`animate-fade-in ${index % 2 === 1 ? "md:order-1" : ""}`}
                style={{ animationDelay: "0.4s" }}
              >
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Ventures;
