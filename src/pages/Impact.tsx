import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Impact = () => {
  const projects = [
    {
      title: "A Million Food Gardens for Mandela Day",
      description:
        "Co-founded with Ndaba Mandela, establishing community gardens across South Africa to fight food insecurity and honor Nelson Mandela's legacy.",
    },
    {
      title: "AgriMintech: Coal Ash Beneficiation",
      description:
        "Climate-smart partnership with Eskom transforming coal ash into fertile soil for mine land rehabilitation.",
    },
    {
      title: "Centre of Mined Land Rehabilitation",
      description:
        "Research & training collaboration with University of Pretoria, focusing on sustainable land restoration.",
    },
    {
      title: "Bokamoso Ba Rona Agricultural Project",
      description:
        "Consulting for Sibanye Stillwater's 30,000-hectare agricultural project, promoting sustainable large-scale farming.",
    },
    {
      title: "Dr Sam Motsuenyane Foundation",
      description:
        "Chairpersonship guiding farmer empowerment, entrepreneurship, and agricultural education.",
    },
    {
      title: "safoodgardens.org Platform",
      description:
        "Digital zero-hunger platform connecting communities with food garden resources and data-driven support.",
    },
  ];

  const partners = [
    "University of Pretoria Enterprise",
    "National House of Traditional Leaders",
    "Agricultural Business Chamber (Agbiz)",
    "South African Agricultural Development Agency (AGDA)",
    "Tiger Brands Foundation (Dipuno)",
    "Institute of Directors South Africa (IoDSA)",
  ];

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
                className="card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Collaborating for Sustainable Agricultural Transformation
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Working with leading organizations to drive agricultural innovation across Africa
          </p>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden bg-card rounded-lg shadow-md py-8">
            <div className="flex animate-scroll space-x-12">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-24 bg-secondary/50 rounded-lg flex items-center justify-center px-6"
                >
                  <p className="text-sm font-medium text-center text-foreground">{partner}</p>
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
