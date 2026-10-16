import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, MapPin, Sparkles, Code2, Bot, Brain, Cpu, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, buttonHoverProps } from "../../../animations";

const roles = [
  "Fullstack Developer",
  "Frontend Engineer",
  "AI-Assisted Dev Specialist",
  "Software Engineer",
];

const HeroSection = ({ isWelcomeActive = false }) => {
  const { t } = useTranslation();
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isWelcomeActive) return; // Wait until Welcome screen finishes

    const fullText = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 2000; // Pause at end
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== fullText) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== "") {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [isWelcomeActive, currentText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden relative">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Left Intro Column with Staggered Entrance */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate={isWelcomeActive ? "hidden" : "visible"}
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight"
          >
            Hi, I'm <span className="text-foreground">Nguyen Duy Hanh</span>
          </motion.h1>

          {/* Typing Role Subtitle */}
          <motion.div
            variants={fadeInUp}
            className="h-10 mt-3 flex items-center justify-center md:justify-start"
          >
            <span className="text-xl sm:text-2xl font-bold text-muted-foreground">
              {currentText}
            </span>
            <span className="w-[2px] h-6 bg-foreground ml-1 animate-pulse" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* Location Badge */}
          <motion.div
            variants={fadeInUp}
            className="mt-5 flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Ha Noi, Vietnam</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <motion.button
              {...buttonHoverProps}
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-md cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              {...buttonHoverProps}
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Avatar Image Column with Floating Motion */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isWelcomeActive ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
        >
          {/* Continuous Up & Down Floating Container */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
          >
            {/* Animated Rotating Gradient Glow Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 opacity-80 blur-md"
            />

            {/* Avatar Frame */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-card border-4 border-card">
                <img
                  src="https://res.cloudinary.com/djtqud6z0/image/upload/v1792051782/image_w0uhza.jpg"
                  alt="Nguyen Duy Hanh Avatar"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
            </div>

            {/* Floating Floating Badge 1 - Top Right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-2 -right-4 px-3.5 py-1.5 rounded-full bg-card border border-border text-foreground text-xs font-bold shadow-lg flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Fullstack Dev</span>
            </motion.div>

            {/* Floating Floating Badge 2 - Bottom Left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-4 px-3.5 py-1.5 rounded-full bg-card border border-border text-foreground text-xs font-bold shadow-lg flex items-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
              <span>AI-Assisted Dev</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
