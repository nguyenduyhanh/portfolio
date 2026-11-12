import { Mail, Phone, MapPin, Heart } from "lucide-react";
import Social from "../../../components/Social";

const FooterSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card text-card-foreground pt-12 pb-4 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border">
          {/* Column 1: Brand / Summary */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logos/logo.svg" alt="NDH Logo" className="h-6 w-auto dark:invert" />
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Nguyen Duy Hanh
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Full-stack developer passionate about crafting digital experiences that make a difference. Turning ideas into reality through code.
            </p>
            <Social />
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-foreground transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-foreground transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")} className="hover:text-foreground transition-colors cursor-pointer">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-foreground transition-colors cursor-pointer">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("experience")} className="hover:text-foreground transition-colors cursor-pointer">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-foreground transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Backend & API Development</li>
              <li>UI/UX Design</li>
              <li>AI-Assisted Solutions</li>
              <li>System Architecture</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:hanh27052004@gmail.com" className="hover:text-foreground transition-colors">
                  hanh27052004@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href="tel:+84981460071" className="hover:text-foreground transition-colors">
                  +84 332 225 159
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>Ha Noi, Vietnam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2025 Nguyen Duy Hanh. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>in Ha Noi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
