"use client";
import { motion } from "framer-motion";
import InstagramIcon from "./icons/instagram";
import YoutubeIcon from "./icons/youtube";
import { socialLinks } from "../../lib/constant";

export default function SocialFollowBanner() {
  return (
    <div className="w-full flex justify-center flex-wrap items-center gap-6 py-8">
      {/* Instagram Follow */}
      <motion.a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 text-primary border border-orange-400 animate-bounce px-6 py-3 rounded-full shadow-lg cursor-pointer"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <InstagramIcon className="w-6 h-6" />
        </motion.div>
        <span className="font-semibold text-lg">Follow us on Instagram</span>
      </motion.a>

      {/* YouTube Subscribe */}
      <motion.a
        href={socialLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 animate-bounce border border-red-600 text-primary px-6 py-3 rounded-full shadow-lg cursor-pointer"
      >
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
          <YoutubeIcon />
        </motion.div>
        <span className="font-semibold text-lg">Subscribe on YouTube</span>
      </motion.a>
    </div>
  );
}
