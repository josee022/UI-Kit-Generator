"use client";

import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full  text-gray-300 py-10 text-center border-t ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="text-left mb-8">
          <h2 className="text-xl font-bold text-white">UI Kit Generator</h2>
          <p className="text-sm text-gray-400 mt-2">
            Construye componentes UI de forma rápida y fácil con personalización
            avanzada.
          </p>
        </div>

        <div className="text-left">
          <h3 className="text-lg font-semibold text-white">Enlaces Útiles</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="https://react-icons.github.io/react-icons/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                React Icons
              </Link>
            </li>
            <li>
              <Link
                href="https://www.vantajs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Vanta.js
              </Link>
            </li>
            <li>
              <Link
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Shadcn
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="text-lg font-semibold text-white">
            Contáctame y desarrollemos juntos
          </h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://github.com/josee022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-mondelo-%C3%A1lvarez-0868a634a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=josemondelo022@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/josee022/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/34622331827"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} UI Kit Generator. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
