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

      {/* Articles List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <article className="border-l-4 border-primary pl-6 py-4 hover:bg-secondary/20 transition-colors rounded-r-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  {article.author && (
                    <p className="text-sm text-muted-foreground mb-3">by {article.author}</p>
                  )}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-medium text-primary">{article.publication}</span>
                    {article.date && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{article.date}</span>
                      </>
                    )}
                    <ExternalLink className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" size={16} />
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default News;
