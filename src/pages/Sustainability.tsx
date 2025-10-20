import PageLayout from "@/components/PageLayout";
import climateSmart from "@/assets/climate-smart.jpg";
import foodSecurity from "@/assets/food-security.jpg";
import youthEmpowerment from "@/assets/youth-empowerment.jpg";
import thoughtLeadership from "@/assets/thought-leadership.jpg";

const Sustainability = () => {
  const initiatives = [
    {
      title: "Climate Smart Agriculture",
      description:
        "Leading coal ash beneficiation and sustainable farming practices that restore degraded lands while increasing productivity.",
      image: climateSmart,
    },
    {
      title: "Food Security & Zero Hunger",
      description:
        "Addressing food insecurity through safoodgardens.org and A Million Food Gardens, aligned with UN Sustainable Development Goal 2 (Zero Hunger).",
      image: foodSecurity,
    },
    {
      title: "Youth Empowerment",
      description:
        "Providing training, mentorship, and career pathways for young African farmers and agri-leaders.",
      image: youthEmpowerment,
    },
    {
      title: "Thought Leadership",
      description:
        "Paul Ntshabele as speaker, advocate, and policy contributor on land reform and agricultural transformation.",
      image: thoughtLeadership,
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

      {/* Initiatives */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`animate-fade-in ${index % 2 === 1 ? "md:order-2" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
                <div
                  className={`animate-fade-in ${index % 2 === 1 ? "md:order-1" : ""}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
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
