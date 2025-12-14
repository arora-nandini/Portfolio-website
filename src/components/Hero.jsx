import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-4 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
          Hi, I’m <span className="text-accent">Nandini Arora</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
        Software Developer building scalable applications with a DevOps mindset.

        </p>

        {/* 🔗 SOCIAL LINKS */}
        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/arora-nandini"
            target="_blank"
            className="hover:text-accent transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nandini-arora-215a07308/"
            target="_blank"
            className="hover:text-accent transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Nandini_arora/"
            target="_blank"
            className="hover:text-accent transition"
          >
            <SiLeetcode />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
