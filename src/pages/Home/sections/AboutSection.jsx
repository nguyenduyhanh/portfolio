import { useTranslation } from "react-i18next";
import { User, MapPin, Mail, GraduationCap, Phone, Briefcase, Download, Send } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem, buttonHoverProps } from "../../../animations";

const infoCards = [
  {
    icon: User,
    label: "Name",
    value: "Nguyen Duy Hanh",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ha Noi, Vietnam",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hanh27052004@gmail.com",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Information Technology Student",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84 332 225 159",
  },
  {
    icon: Briefcase,
    label: "Profession",
    value: "Software Engineer",
  },
];

const AboutSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            About Me
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Large Photo Card */}
          <ScrollReveal className="w-full lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border">
              <img
                src="https://res.cloudinary.com/djtqud6z0/image/upload/v1792051782/image_w0uhza.jpg"
                alt="Nguyen Duy Hanh Photo"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />
            </div>
          </ScrollReveal>

          {/* Right Content Column */}
          <div className="w-full lg:w-7/12 flex flex-col justify-between">
            <ScrollReveal delay={0.1}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                I am an Information Technology student with a strong passion for software engineering, full-stack web development, and modern UI/UX design. My goal is to build scalable, high-performance web applications that make a real impact.
              </p>
            </ScrollReveal>

            {/* 6 Grid Info Cards */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" staggerDelay={0.08}>
              {infoCards.map((info, index) => {
                const Icon = info.icon;
                return (
                  <StaggerItem
                    key={index}
                    hoverLift={-4}
                    className="p-4 rounded-2xl border border-border bg-card text-card-foreground shadow-sm flex items-start gap-4 hover:border-border-hover transition-colors"
                  >
                    <div className="p-2.5 rounded-xl bg-muted text-foreground">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {info.label}
                      </span>
                      <span className="block text-sm font-semibold text-foreground mt-0.5 break-all">
                        {info.value}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                {...buttonHoverProps}
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download My CV</span>
              </motion.a>

              <motion.button
                {...buttonHoverProps}
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Hire Me Now</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
