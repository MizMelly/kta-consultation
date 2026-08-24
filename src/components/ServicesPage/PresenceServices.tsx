import {
  Share2,
  PenTool,
  TrendingUp,
  Search,
  ShieldCheck,
  Megaphone,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Share2,
    title: "Social Media Mgmt",
    description: "Strategic content and community building.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "High-value multimedia content production.",
  },
  {
    icon: TrendingUp,
    title: "Digital Campaigns",
    description: "End-to-end marketing strategy and execution.",
  },
  {
    icon: Search,
    title: "Growth SEO",
    description: "Advanced link building and content ranking strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Reputation Mgmt",
    description: "Monitoring and managing your digital perception.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "High-ROI campaigns across search and social.",
  },
];

export default function PresenceServices() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20 dark:border-gray-800
        dark:bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1375px]">
        {/* Heading */}
        <div>
          <h2 className="text-[32px] font-bold tracking-[-1.2px] text-[#050505] sm:text-[36px]">
            Grow Your Presence
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-6 text-[#737680] sm:text-[17px]">
            Expand your reach, attract quality leads, and build an engaged
            audience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}