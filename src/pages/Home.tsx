import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farmland.jpg";

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section with Video Background Effect */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="African Farmland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            Transforming African Agriculture Through Innovation and Sustainability
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
            Empowering communities, restoring land, and building a food-secure Africa.
          </p>
          <Link to="/about">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
            >
              Discover Our Story
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
