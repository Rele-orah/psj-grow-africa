import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import mandelaGardens from "@/assets/mandela-gardens.jpg";
import coalAshFacility from "@/assets/coal-ash-facility.jpg";
import researchCenter from "@/assets/research-center.jpg";
import bokamosoProject from "@/assets/bokamoso-project.jpg";
import foundationTraining from "@/assets/foundation-training.jpg";
import digitalPlatform from "@/assets/digital-platform.jpg";
import upEnterpriseLogo from "@/assets/logos/up-enterprise.png";
import nhtlLogo from "@/assets/logos/nhtl.png";
import agbizLogo from "@/assets/logos/agbiz.png";
import agdaLogo from "@/assets/logos/agda.png";
import tigerBrandsLogo from "@/assets/logos/tiger-brands.png";
import iodsaLogo from "@/assets/logos/iodsa.png";
import { useEffect, useRef } from "react";

const Impact = () => {
  const projects = [
    {
      title: "A Million Food Gardens for Mandela Day",
      description:
        "Co-founded with Ndaba Mandela, establishing community gardens across South Africa to fight food insecurity and honor Nelson Mandela's legacy.",
      image: mandelaGardens,
    },
    {
      title: "AgriMintech: Coal Ash Beneficiation",
      description:
        "Climate-smart partnership with Eskom transforming coal ash into fertile soil for mine land rehabilitation.",
      image: coalAshFacility,
    },
    {
      title: "Centre of Mined Land Rehabilitation",
      description:
        "Research & training collaboration with University of Pretoria, focusing on sustainable land restoration.",
      image: researchCenter,
    },
    {
      title: "Bokamoso Ba Rona Agricultural Project",
      description:
        "Consulting for Sibanye Stillwater's 30,000-hectare agricultural project, promoting sustainable large-scale farming.",
      image: bokamosoProject,
    },
    {
      title: "Dr Sam Motsuenyane Foundation",
      description:
        "Chairpersonship guiding farmer empowerment, entrepreneurship, and agricultural education.",
      image: foundationTraining,
    },
    {
      title: "safoodgardens.org Platform",
      description:
        "Digital zero-hunger platform connecting communities with food garden resources and data-driven support.",
      image: digitalPlatform,
    },
  ];

  const partners = [
    {
      name: "University of Pretoria Enterprise",
      logo: upEnterpriseLogo,
    },
    {
      name: "National House of Traditional Leaders",
      logo: nhtlLogo,
    },
    {
      name: "Agricultural Business Chamber (Agbiz)",
      logo: agbizLogo,
    },
    {
      name: "South African Agricultural Development Agency (AGDA)",
      logo: agdaLogo,
    },
    {
      name: "Tiger Brands Foundation (Dipuno)",
      logo: tigerBrandsLogo,
    },
    {
      name: "Institute of Directors South Africa (IoDSA)",
      logo: iodsaLogo,
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && carousel) {
          carousel.scrollLeft += 1;
          // Reset to start when reaching the end
          if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
            carousel.scrollLeft = 0;
          }
        }
      }, 20);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    startScroll();

    return () => {
      clearInterval(scrollInterval);
      carousel?.removeEventListener("mouseenter", handleMouseEnter);
      carousel?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <PageLayout>
      {/* Header */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Our Impact</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Projects Transforming African Agriculture
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="card-hover animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-secondary/30 overflow-hidden">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Collaborating for Sustainable Agricultural Transformation
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Working with leading organizations to drive agricultural innovation across Africa
          </p>

          {/* Auto-scrolling Partner Logos Carousel */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-12 overflow-x-hidden py-8"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              {/* Duplicate partners for infinite scroll effect */}
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center gap-4 group cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-64 h-32 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center text-foreground max-w-[16rem] group-hover:text-primary transition-colors">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Impact;
