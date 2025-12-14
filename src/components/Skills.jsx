import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes"]
    },
    {
      title: "Programming",
      skills: ["Java","Python", "C++"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub","AWS"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="
                bg-white/5 border border-white/10
                backdrop-blur-xl rounded-2xl p-6
                transition
              "
            >
              {/* CATEGORY TITLE */}
              <h3 className="text-accent font-semibold mb-4">
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-sm px-3 py-1
                      rounded-full
                      bg-white/10
                      text-gray-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
