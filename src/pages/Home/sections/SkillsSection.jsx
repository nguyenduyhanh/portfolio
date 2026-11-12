import { useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiVite,
  SiSpringboot,
  SiGooglegemini,
  SiClaude,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PiOpenAiLogo } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { AntigravityIcon } from "../../../components/icons/AntigravityIcon";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, activePillTransition, smoothEase } from "../../../animations";

const skillsData = [
  // Frontend
  { name: "React.js / Next.js", category: "frontend", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript / ES6+", category: "frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS & CSS3", category: "frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5 & Semantic UI", category: "frontend", icon: SiHtml5, color: "#E34F26" },

  // Backend
  { name: "Java & Core Concepts", category: "backend", icon: FaJava, color: "#EA2D2E" },
  { name: "Spring Boot & Security", category: "backend", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Node.js & Express.js", category: "backend", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "MySQL & Relational DB", category: "backend", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB & Mongoose", category: "backend", icon: SiMongodb, color: "#47A248" },
  { name: "RESTful API & WebSocket", category: "backend", icon: TbApi, color: "#009688" },

  // AI & Agents
  { name: "ChatGPT / OpenAI", category: "ai", icon: PiOpenAiLogo, color: "currentColor" },
  { name: "Google Gemini", category: "ai", icon: SiGooglegemini, color: "#4E89FF" },
  { name: "Claude & Claude Code", category: "ai", icon: SiClaude, color: "#D97757" },
  { name: "Antigravity AI Agent", category: "ai", icon: AntigravityIcon, color: "#4E89FF" },
  { name: "VS Code & AI Extensions", category: "ai", icon: VscVscode, color: "#007ACC" },

  // Dev Tools
  { name: "Git / GitHub / GitLab", category: "tools", icon: SiGit, color: "#F05032" },
  { name: "Docker & VPS Deploy", category: "tools", icon: SiDocker, color: "#2496ED" },
  { name: "Vite / Webpack", category: "tools", icon: SiVite, color: "#646CFF" },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "AI & Agents" },
  { id: "tools", label: "Dev Tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <motion.section
      id="skills"
      className="py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            My Skills
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Synthesis of skills and technologies that I have accumulated through real-world projects
          </p>
        </ScrollReveal>

        {/* Category Tabs with Scroll Animation */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeSkillCategoryPill"
                  className="absolute inset-0 bg-primary rounded-full shadow-md"
                  transition={activePillTransition}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6, ease: smoothEase, delay: (index % 3) * 0.1 }}
                  className="p-5 rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:border-border-hover transition-colors flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" style={{ color: skill.color }} />
                  </div>
                  <span className="font-bold text-sm text-foreground">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
