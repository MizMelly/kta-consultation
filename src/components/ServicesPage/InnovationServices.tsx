import {
  Bot,
  Cpu,
  Monitor,
  Wrench,
  BarChart3,
  HardHat,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Bot,
    title: "Business Automation",
    description: "Streamlining workflows and reducing manual tasks.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description:
      "Deploying AI tools to enhance productivity and customer experience.",
  },
  {
    icon: Monitor,
    title: "Custom Web Apps",
    description: "Bespoke software solutions for complex needs.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing technical upkeep and security.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Data-driven insights for strategic decisions.",
  },
  {
    icon: HardHat,
    title: "Technical Consulting",
    description: "Expert guidance for your technology roadmap.",
  },
];

export default function InnovationServices() {
  return (
    <section className="border-t border-[#EEEEEE] bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20 dark:border-gray-800
        dark:bg-[#0B0B0B]">
      <div className="mx-auto max-w-343.75">
        {/* Heading */}
        <div>
          <h2 className="text-[32px] font-bold tracking-[-1.2px] text-[#050505] sm:text-[36px]">
            Scale Through Innovation
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-6 text-[#737680] sm:text-[17px]">
            Optimize operations and handle increased volume with advanced
            technology.
          </p>
        </div>

        {/* Cards */}
<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <ServiceCard
      key={service.title}
      icon={service.icon}
      title={service.title}
      description={service.description}
      index={index}
    />
  ))}
</div>
      </div>
    </section>
  );
}