import PageLayout from "@/components/PageLayout";
import { Leaf, Target, Users2, MessageSquare } from "lucide-react";
import trainingImage from "@/assets/training-workshop.jpg";

const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Climate Smart Agriculture",
      description:
        "Leading coal ash beneficiation and sustainable farming practices that restore degraded lands while increasing productivity.",
    },
    {
      icon: Target,
      title: "Food Security & Zero Hunger",
      description:
        "Addressing food insecurity through safoodgardens.org and A Million Food Gardens, aligned with UN Sustainable Development Goal 2 (Zero Hunger).",
    },
    {
      icon: Users2,
      title: "Youth Empowerment",
      description:
        "Providing training, mentorship, and career pathways for young African farmers and agri-leaders.",
    },
    {
      icon: MessageSquare,
      title: "Thought Leadership",
      description:
        "Paul Ntshabele as speaker, advocate, and policy contributor on land reform and agricultural transformation.",
    },
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Sustainability & ESG
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Driving Sustainable Agricultural Change
          </p>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={trainingImage}
          alt="Community Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Initiatives */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="flex gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <initiative.icon className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment to a Sustainable Future
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PSJ Group integrates Environmental, Social, and Governance (ESG) principles into every
              aspect of our operations. We believe that sustainable agriculture is not just about
              producing food—it's about creating resilient communities, restoring our environment,
              and building economic opportunities that last for generations.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sustainability;
