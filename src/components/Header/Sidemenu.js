"use client";

import { X, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // <-- Import Framer Motion

const sideMenuLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/Projects" },
  { name: "About Us", href: "/About" },
  { name: "Contact Us", href: "/Contact" },
  { name: "Privacy Policy", href: "/Privacy-policy" },
  { name: "Terms & Conditions", href: "/Terms-and-conditions" },
];

const socialLinks = [
  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
  { icon: Youtube, href: "#", color: "hover:text-red-600" },
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
];

export default function SideMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-72 md:w-80 h-full bg-white shadow-lg z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/bloglogo.png" alt="Logo" className="w-10 h-10" />
            </Link>

            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col space-y-6 p-6">
            {sideMenuLinks.map(({ name, href }, index) => (
              <Link
                key={index}
                to={href}
                onClick={onClose}
                className="text-lg font-medium hover:text-blue-600"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-4 py-6 mt-auto border-t">
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <Link key={index} href={href}>
                <div className="p-2 border rounded-full">
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}