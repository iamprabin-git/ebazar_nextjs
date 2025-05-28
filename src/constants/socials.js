// constants/SocialsLinks.js
import { FaFacebook, FaYoutube, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";

const SocialsLinks = [
  {
    route: "https://www.facebook.com",
    label: "Facebook",
    icon: FaFacebook,
    color: "text-blue-600 hover:text-blue-800",
  },
  {
    route: "https://www.youtube.com",
    label: "YouTube",
    icon: FaYoutube,
    color: "text-red-600 hover:text-red-800",
  },
  {
    route: "https://www.twitter.com",
    label: "Twitter",
    icon: FaTwitter,
    color: "text-blue-400 hover:text-blue-600",
  },
  {
    route: "https://www.tiktok.com",
    label: "TikTok",
    icon: FaTiktok,
    color: "text-black hover:text-gray-800",
  },
  {
    route: "https://www.whatsapp.com",
    label: "WhatsApp",
    icon: FaWhatsapp,
    color: "text-green-500 hover:text-green-700",
  },
];

export default SocialsLinks;

