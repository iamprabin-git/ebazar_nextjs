// components/SocialIcons.js
"use client"; // if using Next.js app router

import SocialsLinks from "@/constants/socials";
import Link from "next/link";

function SocialIcons() {
  return (
    <div className="flex gap-4">
      {SocialsLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <Link
            key={index}
            href={social.route}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <IconComponent className={`w-6 h-6 ${social.color}`} />
          </Link>
        );
      })}
    </div>
  );
}

export default SocialIcons;
