import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="About Me"
          subtitle="Who I am and what I enjoy building"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex flex-col md:flex-row
            items-center gap-12
            bg-white/5 border border-white/10
            backdrop-blur-xl
            rounded-2xl p-8
          "
        >
          {/* PROFILE IMAGE (SQUARE STYLE) */}
          <div className="relative shrink-0">
            {/* Glow */}
            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-2xl"></div>

            <img
              src="/profile.jpg"
              alt="Nandini Arora"
              className="
                relative
                w-48 h-48
                sm:w-56 sm:h-56
                md:w-64 md:h-64
                object-cover
                rounded-2xl
                border border-white/10
                shadow-xl
                transition-transform duration-300
                hover:scale-[1.03]
              "
            />
          </div>

          {/* ABOUT TEXT */}
          <div className="text-center md:text-left max-w-xl space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Computer Science Student | Full Stack Developer
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I’m a Computer Science student with experience across full-stack
              development, backend systems, AI-powered applications, and DevOps
              fundamentals.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I’ve built end-to-end products involving secure authentication,
              REST APIs, real-time communication, databases, and intelligent
              features such as sentiment analysis and conversational AI. I also
              have hands-on exposure to DevOps practices including
              containerization, deployment, and basic cloud-native workflows.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy understanding systems end-to-end—from development to
              deployment—and I’m actively preparing for software engineering
              internships where I can contribute, learn, and grow.
            </p>

            {/* SKILL TAGS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              {[
                "MERN Stack",
                "REST APIs",
                "AI Applications",
                "DevOps Basics",
                "System Design"
              ].map((item) => (
                <span
                  key={item}
                  className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-accent/10
                    text-accent
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
