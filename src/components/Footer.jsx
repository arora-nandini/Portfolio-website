import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/10">
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a href="https://github.com/arora-nandini" target="_blank" className="hover:text-accent">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nandini-arora-215a07308/" target="_blank" className="hover:text-accent">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/Nandini_arora/" target="_blank" className="hover:text-accent">
          <SiLeetcode />
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Nandini Arora
      </p>
    </footer>
  );
}
