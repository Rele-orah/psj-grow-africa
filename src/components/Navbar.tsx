import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Ventures", path: "/ventures" },
    { label: "Our Impact", path: "/impact" },
    { label: "Sustainability & ESG", path: "/sustainability" },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const isHomePage = location.pathname === "/";
  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent 
          ? "bg-transparent" 
          : "bg-white shadow-md"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className={`font-bold text-xl transition-colors ${
                shouldBeTransparent ? "text-white" : "text-primary-foreground"
              }`}>PSJ</span>
            </div>
            <div className="hidden md:block">
              <div className={`text-lg font-bold transition-colors ${
                shouldBeTransparent ? "text-white" : "text-[#1b1b1b]"
              }`}>PSJ Group</div>
              <div className={`text-xs transition-colors ${
                shouldBeTransparent ? "text-white/80" : "text-muted-foreground"
              }`}>Agricultural Holdings</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? "text-primary"
                    : shouldBeTransparent
                    ? "text-white hover:text-primary"
                    : "text-[#1b1b1b] hover:text-primary"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  isActive(item.path) ? "scale-x-100" : ""
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              shouldBeTransparent ? "text-white" : "text-[#1b1b1b] hover:bg-secondary"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-white animate-fade-in">
            <div className="py-4 px-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-white"
                      : "text-[#1b1b1b] hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
