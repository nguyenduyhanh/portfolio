import { useState } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, activePillTransition, smoothEase } from "../../../animations";

const workExperience = [
  {
    role: "Fullstack Developer",
    organization: "Globits Co., Ltd.",
    period: "10/2025 - 09/2026",
    location: "Ha Noi, Vietnam",
    description: [
      "Developed and maintained web applications based on business requirements.",
      "Designed and integrated RESTful APIs to connect frontend and backend systems.",
      "Worked with databases to manage data, write queries, and optimize data processing.",
      "Troubleshot technical issues, debugged code, and improved application performance.",
      "Collaborated with team members to implement features, test functionality, and maintain code quality.",
    ],
    technologies: ["JavaScript", "React", "Java", "Spring Boot", "RESTful API", "SQL / Database", "GitLab"],
  },
];

const educationData = [
  {
    role: "Information Technology",
    organization: "Thuy Loi University",
    period: "2022 - 2026",
    location: "Ha Noi, Vietnam",
    description: [
      "Major: Information Technology",
      "Member of the Student Informatics Club, supporting programming classes and technical assistance for electronic devices.",
    ],
    technologies: ["Data Structures & Algorithms", "Database Systems", "Software Engineering", "Web Development", "OOP"],
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("work"); // 'work' | 'education'

  const items = activeTab === "work" ? workExperience : educationData;

  return (
    <motion.section
      id="experience"
      className="py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            My Experience
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Explore the practical experiences and academic achievements I have accumulated
          </p>
        </ScrollReveal>

        {/* Tab Switcher with Scroll Animation */}
        <ScrollReveal delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-muted border border-border">
            <button
              onClick={() => setActiveTab("work")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeTab === "work"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "work" && (
                <motion.div
                  layoutId="activeExperienceTabPill"
                  className="absolute inset-0 bg-primary rounded-xl shadow-md"
                  transition={activePillTransition}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeTab === "education"
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "education" && (
                <motion.div
                  layoutId="activeExperienceTabPill"
                  className="absolute inset-0 bg-primary rounded-xl shadow-md"
                  transition={activePillTransition}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Cards Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`grid grid-cols-1 ${
              items.length > 1 ? "md:grid-cols-2" : "max-w-3xl mx-auto"
            } gap-8`}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: smoothEase, delay: index * 0.12 }}
                className="p-6 sm:p-8 rounded-3xl border border-border bg-card text-card-foreground shadow-sm hover:border-border-hover transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">
                      {item.organization}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  {Array.isArray(item.description) ? (
                    <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground">
                      {item.description.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Technologies Badges */}
                {item.technologies && item.technologies.length > 0 && (
                  <div>
                    <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Technologies / Skills:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
