import PageLayout from "@/components/PageLayout";
import { Sprout, Users, LandPlot, Award, GraduationCap, Globe, TrendingUp, Trophy } from "lucide-react";
import modernFarm from "@/assets/modern-farm.jpg";
import founderImage from "@/assets/founder-placeholder.jpg";

const About = () => {
  const focusAreas = [
    {
      icon: Sprout,
      title: "Food Security",
      description: "Championing sustainable food systems and youth empowerment.",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Supporting smallholder farmers through mentorship and training.",
    },
    {
      icon: LandPlot,
      title: "Land Reform Leadership",
      description: "Delivering inclusive, data-driven land development strategies.",
    },
  ];

  const achievements = [
    {
      icon: Globe,
      title: "USDA Cochran Fellow",
    },
    {
      icon: TrendingUp,
      title: "World Bank Programme Participant",
    },
    {
      icon: GraduationCap,
      title: "Tuks Prestigious Leadership Programme",
    },
    {
      icon: Trophy,
      title: "Member of Golden Key International Honour Society",
    },
  ];

  return (
    <PageLayout>
      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  PSJ Group is a diversified agricultural holdings company founded by Paul Ntshabele.
                </p>
                <p>
                  The company drives innovation in food security, land rehabilitation, agribusiness
                  development, and sustainable growth across Africa.
                </p>
                <p>
                  Built on integrity, collaboration, and technology, PSJ Group bridges the gap
                  between agriculture, community, and investment, creating long-term value that
                  uplifts people and the planet.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={modernFarm}
                alt="Modern Sustainable Farm"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <img
                src={founderImage}
                alt="Paul Ntshabele - Replace with official photo"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              <p className="text-sm text-center text-muted-foreground mt-4 italic">
                *Replace with Paul Ntshabele's official photo
              </p>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About the Founder — Paul Ntshabele
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Paul Ntshabele is an Agronomist, Agribusiness leader, and Land Reform specialist
                  with a lifelong commitment to transforming African agriculture through innovation
                  and sustainability.
                </p>
                <p>
                  A USDA Cochran Fellow and member of the Institute of Directors (IoDSA), Paul has
                  worked with global agribusinesses such as McCain Foods, Sakata Seeds, and
                  Freshmark of the Shoprite Group.
                </p>
                <p>
                  He co-founded "A Million Food Gardens for Mandela Day" with Ndaba Mandela,
                  launched safoodgardens.org, and serves as Chairperson of the Dr Sam Motsuenyane
                  Foundation as well as a founding member of the South African Agricultural
                  Development Agency (AGDA).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md card-hover animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Achievements */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <div className="flex justify-center mb-6">
            <Award size={48} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recognition & Achievements
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Paul Ntshabele's work has been recognized nationally and internationally for advancing
            sustainable agriculture.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg animate-fade-in flex flex-col items-center gap-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <achievement.icon className="text-primary-foreground" size={24} />
                </div>
                <p className="font-medium text-center">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
