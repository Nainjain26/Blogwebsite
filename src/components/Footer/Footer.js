// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineMail } from 'react-icons/hi';

const footerData = {
  logo: {
    src: "/bloglogo.png",
    alt: "Legends of Marketing",
    title: "LEGENDS OF MARKETING",
    description: "Areet consectetur tempor elit risus. Diam quisque et pharetra ornare vitae vestibulum. Diam volutpat eleifend nisi ac risus quam tempor habitasse."
  },
  socialMedia: [
    { platform: "Facebook", icon: FaFacebookF, link: "#" },
    { platform: "Instagram", icon: FaInstagram, link: "#" },
    { platform: "LinkedIn", icon: FaLinkedinIn, link: "#" },
    { platform: "YouTube", icon: FaYoutube, link: "#" },
    { platform: "Cross", icon: RxCross2, link: "#" }
  ],
  quickLinks: [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/Projects" },
    { name: "About Us", link: "/AboutUs" },
    { name: "Contact Us", link: "/Contact" }
  ],
  categories: [
    { name: "Latest Updates", link: "/" },
    { name: "Campaign Updates", link: "/CampaignUpdate" },
    { name: "Industry Telescope", link: "/IndustryTelescope" },
    { name: "Case Studies", link: "/CaseStudies" },
    { name: "News", link: "/News" },
    { name: "Industry Updates", link: "/IndustryUpdate" },
    { name: "Experts Speak", link: "/ExpertSpeak" }
  ],
  contact: {
    phone: "+91 98765 43210",
    email: "hello@legendsofmarketing.com",
    address: "Indore, Madhya Pradesh, India"
  },
  bottomLinks: [
    { name: "Privacy Policy", link: "#" },
    { name: "Terms & Conditions", link: "#" }
  ],
  copyright:
    "© 2025 TechBranzzo. All rights reserved."
};

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-10">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-700 pb-10">
        
        {/* Logo and Description */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center">
              <img src={footerData.logo.src} alt={footerData.logo.alt} className="rounded-full w-10 h-10" />
            </div>
            <div>
              <h2 className="font-bold text-lg">{footerData.logo.title.split(" ").join(" ")} </h2>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-6">{footerData.logo.description}</p>

          <div className="flex items-center gap-4 text-2xl">
            {footerData.socialMedia.map((item, index) => (
              <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                <item.icon className="hover:text-yellow-500 cursor-pointer" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            {footerData.quickLinks.map((link, index) => (
              <li key={index} className="">
                <a href={link.link} className="relative inline-block text-gray-400 transition-colors duration-300 hover:text-white
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                      after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                        {link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="flex-1">
          <h3 className="font-semibold mb-4 text-lg">Categories</h3>
          <ul className="space-y-3 text-gray-400">
            {footerData.categories.map((category, index) => (
              <li key={index} className=" ">
                <a href={category.link} className="relative inline-block text-gray-400 transition-colors duration-300 hover:text-white
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                      after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                        {category.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 cursor-pointer">
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
          <div className="flex items-center gap-3 mb-4 hover:text-yellow-400 text-gray-400">
            <FaPhoneAlt className="text-yellow-400" />
            {footerData.contact.phone}
          </div>
          <div className="flex items-center gap-3 mb-4 hover:text-yellow-400 text-gray-400">
            <HiOutlineMail className="text-yellow-400" />
            {footerData.contact.email}
          </div>
          <div className="flex items-center gap-3 hover:text-yellow-400 text-gray-400">
            <FaMapMarkerAlt className="text-yellow-400" />
            {footerData.contact.address}
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
        <div className="flex gap-2">
          {footerData.bottomLinks.map((link, index) => (
            <a href={link.link} key={index} className="hover:text-white">
              {link.name}
            </a>
          ))}
        </div>
        <p className="mt-4 md:mt-0">{footerData.copyright}</p>
      </div>

    </footer>
  );
}
