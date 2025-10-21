import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Ventures", path: "/ventures" },
    { label: "Our Impact", path: "/impact" },
    { label: "Sustainability & ESG", path: "/sustainability" },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact" },
  ];

  const initiatives = [
    "safoodgardens.org",
    "AgriMintech",
    "Land Rehabilitation Company",
    "Centre of Mined Land Rehabilitation",
    "Dr Sam Motsuenyane Foundation",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">PSJ</span>
              </div>
              <div>
                <div className="text-lg font-bold">PSJ Group</div>
                <div className="text-xs text-primary-foreground/70">Agricultural Holdings</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              PSJ Group is a diversified agricultural holdings company driving food security, land
              rehabilitation, and sustainable development across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Initiatives */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Key Initiatives</h3>
            <ul className="space-y-2">
              {initiatives.map((initiative) => (
                <li key={initiative}>
                  <span className="text-sm text-primary-foreground/80">{initiative}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a 
              href="mailto:info@psjgroup.co.za"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              info@psjgroup.co.za
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} PSJ Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
