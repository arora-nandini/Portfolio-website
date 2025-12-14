import { useState } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import SectionHeader from "./SectionHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Contact"
          subtitle="Let’s connect and build something great"
        />

        {/* CONTACT FORM */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto bg-white/5 border border-white/10
          backdrop-blur-xl rounded-2xl p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-4 bg-dark border border-white/10 rounded outline-none"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-4 bg-dark border border-white/10 rounded outline-none"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-4 bg-dark border border-white/10 rounded outline-none"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-accent text-gray rounded font-semibold"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* SOCIAL LINKS */}
        <div className="mt-10 flex justify-center gap-8 text-2xl">
          <a
            href="https://github.com/arora-nandini"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nandini-arora-215a07308/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Nandini_arora/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </section>
  );
}
