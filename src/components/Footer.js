"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/constants/footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const renderSocialIcon = (iconName) => {
    switch (iconName) {
      case "FaFacebook":
        return <FaFacebook />;
      case "FaTwitter":
        return <FaTwitter />;
      case "FaInstagram":
        return <FaInstagram />;
      case "FaLinkedin":
        return <FaLinkedin />;
      case "FaGithub":
        return <FaGithub />;
      default:
        return null;
    }
  };

  const FooterLinksSection = ({ title, links }) => (
    <div className="space-y-4">
      <h3 className="text-xl text-blue-600 font-bold dark:text-amber-400">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-gray-800 hover:text-amber-400 transition-colors dark:text-white dark:hover:text-gray-400"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const ContactItem = ({ icon, text }) => (
    <div className="flex items-start space-x-2">
      <span className="text-gray-800 dark:text-white mt-1">{icon}</span>
      <span className="text-gray-800 dark:text-white">{text}</span>
    </div>
  );

  return (
    <footer className="bg-gray-400 text-slate-950 dark:bg-gray-900 dark:text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl text-blue-600 font-bold dark:text-amber-400">
              Lele Online Store
            </h3>
            <p>
              Let&apos;s promote local products around Lele and its surroundings.
            </p>
            <div className="gap-4">
              <span className="text-xl font-bold text-blue-600 dark:text-amber-400">
                Follow Us
              </span>
              <div className="flex space-x-4 mt-4">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-blue-600 hover:text-amber-400 transition-colors text-xl dark:text-gray-100"
                  >
                    {renderSocialIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <FooterLinksSection title="Company" links={FOOTER_LINKS.company} />
          <FooterLinksSection title="Support" links={FOOTER_LINKS.support} />

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl text-blue-600 font-bold dark:text-amber-400">
              Contact Us
            </h3>
            <div className="space-y-3">
              <ContactItem icon={<IoLocationSharp />} text={CONTACT_INFO.address} />
              <ContactItem icon={<FaPhoneAlt />} text={CONTACT_INFO.phone} />
              <ContactItem icon={<MdEmail />} text={CONTACT_INFO.email} />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-800 dark:text-white text-sm">
            &copy; {currentYear} Lele Online Store. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-white hover:text-amber-400 text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <span className="text-sm mt-4 md:mt-0">
            Designed and Developed by:{" "}
            <Link
              href="https://github.com/iamprabin-git"
              className="text-blue-600 dark:text-amber-400"
            >
              Prabin Dangol
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
