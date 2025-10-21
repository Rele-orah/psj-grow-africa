import PageLayout from "@/components/PageLayout";
import { Sprout, Users, LandPlot, Award } from "lucide-react";
import officeBuilding from "@/assets/office-building.jpg";
import founderImage from "@/assets/founder-placeholder.jpg";
import usdaCochranLogo from "@/assets/logos/usda-cochran.png";
import worldBankLogo from "@/assets/logos/world-bank.png";
import tuksLeadershipLogo from "@/assets/logos/tuks-leadership.png";
import goldenKeyLogo from "@/assets/logos/golden-key.png";

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
      logo: usdaCochranLogo,
      title: "USDA Cochran Fellowship",
    },
    {
      logo: worldBankLogo,
      title: "World Bank Programme Participant",
    },
    {
      logo: tuksLeadershipLogo,
      title: "Tuks Prestigious Leadership Programme",
    },
    {
      logo: goldenKeyLogo,
      title: "Golden Key International Honour Society",
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
                src={officeBuilding}
                alt="PSJ Group modern glass office building headquarters"
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
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="flex justify-center mb-6 text-primary">
            <Award size={48} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
            Recognition & Achievements
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Paul Ntshabele's work has been recognized nationally and internationally for advancing
            sustainable agriculture.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={achievement.logo}
                      alt={`${achievement.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-semibold text-foreground">{achievement.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
