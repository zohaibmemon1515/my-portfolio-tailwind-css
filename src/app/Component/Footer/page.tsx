import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#31065A] text-[#FFFFFF] py-8 px-4 flex flex-col items-center">
      <div className="flex justify-center gap-4 mb-4">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-2xl hover:text-[#F86F03] transition-colors" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="text-2xl hover:text-[#F86F03] transition-colors" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-2xl hover:text-[#F86F03] transition-colors" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl hover:text-[#F86F03] transition-colors" />
        </Link>
      </div>
      <p className="text-sm text-center">
        © 2024 Zohaib Memon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
