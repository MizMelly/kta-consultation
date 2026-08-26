import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const quickLinks = [
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Success Stories", path: "/success-stories" },
  { name: "Contact Us", path: "/contact" },
  { name: "Book a Free Consultation", path: "/booking" },
];

const services = [
  "Website Development",
  "Branding & Identity",
  "Digital Marketing",
  "SEO",
  "Social Media Management",
  "AI Solutions",
  "Business Automation",
];

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    label: "X",
    icon: FaXTwitter,
    href: "#",
  },
  {
    label: "TikTok",
    icon: FaTiktok,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* Main Footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_1.2fr_1fr] lg:gap-12">

          {/* Brand */}
          <div>
            <Link
              to="/home"
              className="inline-block"
            >
              <img
                src={logo}
                alt="KonfirmTech Africa"
                className="h-auto w-47.5 object-contain"
              />
            </Link>

            <p className="mt-6 max-w-75 text-[14px] leading-5 text-[#92949B]">
              Empowering Growth Through Innovation. We are your digital
              partner invested in long-term success.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17181B] text-[#92949B] transition-all duration-200 hover:bg-[#1565A9] hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[16px] font-semibold text-white">
              Quick Links
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-[14px] text-[#A1A3A9] transition-colors duration-200 hover:text-[#1565A9]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[16px] font-semibold text-white">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="w-fit text-[14px] text-[#A1A3A9] transition-colors duration-200 hover:text-[#1565A9]"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[16px] font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* Email */}
              <div>
                <p className="text-[13px] text-[#74767D]">
                  Email
                </p>

                <a
                  href="mailto:info@konfirmtechafrica.com"
                  className="mt-1 block text-[14px] text-[#D1D2D5] transition-colors hover:text-[#1565A9]"
                >
                  info@konfirmtechafrica.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-[13px] text-[#74767D]">
                  Phone
                </p>

                <a
                  href="tel:+2347060913641"
                  className="mt-1 block text-[14px] text-[#D1D2D5] transition-colors hover:text-[#1565A9]"
                >
                  +234 706 091 3641
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <p className="text-[13px] text-[#74767D]">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/2347060913641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-[14px] font-medium text-[#F5A21A] transition-colors hover:text-[#1565A9]"
                >
                  Chat with us →
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-14 border-t border-[#191A1D] pt-7 sm:mt-16">
          <div className="flex flex-col gap-5 text-[12px] text-[#777A82] lg:flex-row lg:items-center lg:justify-between">

            {/* Copyright */}
            <p>
              © 2026 KonfirmTech Africa. All Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <Link
                to="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/cookies"
                className="transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>

              <Link
                to="/ai-disclaimer"
                className="transition-colors hover:text-white"
              >
                AI Assistant Disclaimer
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}