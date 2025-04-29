"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import SideMenu from "./Sidemenu.js";

const navLinks = [
  { name: "Latest Updates", href: "/" },
  { name: "Campaign Updates", href: "/CampaignUpdate" },
  { name: "Industry Telescope", href: "/IndustryTelescope" },
  { name: "Case Studies", href: "/CaseStudies" },
  { name: "News", href: "/News" },
  { name: "Industry Updates", href: "/IndustryUpdate" },
  { name: "Experts Speak", href: "/ExpertsSpeak" },
];

const socialLinks = [
  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
  { icon: Youtube, href: "#", color: "hover:text-red-600" },
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <header className="border-b relative ">
        {/* Top bar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          {/* Left: Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <Link href={href} key={index}>
                <Icon className={`w-5 h-5 ${color}`} />
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/bloglogo.png" alt="Logo" className="w-10 h-10" />
              <h1 className="font-bold text-sm md:text-lg whitespace-nowrap">
                LEGENDS OF MARKETING
              </h1>
            </Link>
          </div>

          {/* Right: Search and Mobile Menu */}
          <div className="flex items-center gap-4 relative">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              {isSearchOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>

            {/* Search Input Animation */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "10rem", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSearchSubmit}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-white border rounded-full overflow-hidden flex items-center shadow-md"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="px-4 py-1 outline-none w-full text-sm"
                    autoFocus
                  />
                  <button type="submit" className="px-2 text-blue-500">
                    Go
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Menu */}
        <nav className="hidden md:flex items-center justify-center max-w-7xl text-gray-700 mx-auto flex-wrap gap-8 py-3 text-md font-medium md:text-base">
          {navLinks.map(({ name, href }, index) => (
           <Link
           key={index}
           to={href}
           className="relative inline-block text-black transition-colors duration-300 hover:text-gray-500
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                      after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
         >
           {name}
         </Link>
         
          ))}

          <button
            className="flex items-center gap-1 hover:text-yellow-500"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
            More
          </button>
        </nav>
      </header>

      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
