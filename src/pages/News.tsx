import PageLayout from "@/components/PageLayout";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  const articles = [
    {
      title: "Land reform solutions – mining forgotten legacies",
      author: "Paul Ntshabele",
      publication: "Daily Maverick",
      date: "October 10, 2018",
      url: "https://www.dailymaverick.co.za/opinionista/2018-10-10-land-reform-solutions-mining-forgotten-legacies/",
    },
    {
      title: "We must debunk the myth that black people cannot farm",
      author: "Dr Sam Motsuenyane and Paul Ntshabele",
      publication: "City Press",
      date: "June 1, 2018",
      url: "https://www.news24.com/citypress/voices/we-must-debunk-the-myth-that-black-people-cannot-farm-20180601",
    },
    {
      title: "UP to collaborate with Dr Sam Motsuenyane Foundation to alleviate poverty",
      publication: "University of Pretoria",
      url: "https://www.up.ac.za/news/post_3045115-up-to-collaborate-with-dr-sam-motsuenyane-rural-development-foundation-to-alleviate-poverty-and-unemployment-",
    },
    {
      title: "UP collaborates with foundation to tackle poverty through green economy",
      publication: "The Citizen",
      date: "January 31, 2022",
      url: "https://www.citizen.co.za/rekord/news-headlines/2022/01/31/up-collaborates-with-foundation-to-tackle-poverty-through-green-economy/",
    },
    {
      title: "Workshop provides important information to farmers",
      publication: "Limpopo Mirror",
      date: "April 28, 2016",
      url: "https://www.limpopomirror.co.za/articles/news/36556/2016-04-28/workshop-provides-important-information-to-farmers-",
    },
    {
      title: "Teaming up to revitalise township economy, alleviate unemployment",
      publication: "IOL",
      url: "https://www.iol.co.za/pretoria-news/news/teaming-up-to-revitalise-township-economy-alleviate-unemployment-poverty-89c52dc8-dddd-4006-9453-ae2a058a52f4",
    },
    {
      title:
        "Recapturing The Self-Reliance And Resilience of Dr Sam Motsuenyane's Generation",
      publication: "Mzansi Agri Talk",
      url: "https://www.mzansiagritalk.com/events/recapturing-the-self-reliance-and-resilience-of-dr-sam-motsuenyanes-generation-to-rebuild-the-south-african-economy",
    },
    {
      title: "Dr Reuel Khoza laments the grinding poverty and structural unemployment",
      publication: "Fullview",
      url: "https://fullview.co.za/business/item/14356-dr-reuel-khoza-laments-the-grinding-poverty-structural-unemployment-politics-of-patronage",
    },
    {
      title: "President awards exceptional individuals in the sector",
      publication: "Farmers Weekly SA",
      date: "September 7, 2018",
      url: "https://www.pressreader.com/south-africa/farmers-weekly-south-africa/20180907/28189159415384",
    },
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">News & Media</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Insights, achievements, and thought leadership in African agriculture
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="card-hover animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="flex-1">
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  {article.author && (
                    <CardDescription className="text-sm">by {article.author}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-primary">{article.publication}</p>
                    {article.date && (
                      <p className="text-xs text-muted-foreground">{article.date}</p>
                    )}
                  </div>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full">
                      Read Article
                      <ExternalLink className="ml-2" size={14} />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
