import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px rgba(34,211,238,0.25)"
      }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden
      backdrop-blur-xl transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-5 text-sm">
          <a
            href={project.github}
            target="_blank"
            className="hover:text-accent flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            className="hover:text-accent flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}
