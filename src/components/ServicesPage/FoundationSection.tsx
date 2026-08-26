import {
  Code2,
  Palette,
  Mail,
  MapPin,
  Search,
  Globe,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Code2,
    title: "Website Design & Dev",
    description: "Custom, performant websites built for conversion.",
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Memorable logos and comprehensive visual systems.",
  },
  {
    icon: Mail,
    title: "Business Email Setup",
    description: "Professional, secure communication infrastructure.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Local SEO optimization and map visibility.",
  },
  {
    icon: Search,
    title: "Foundation SEO",
    description: "Technical and on-page search engine optimization.",
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    description: "Reliable infrastructure management.",
  },
];

export default function FoundationSection() {
  return (
    <section
      id="foundation"
      className="
        bg-white
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-24

        dark:bg-[#0B0B0B]
        
      "
    >
      <div className="mx-auto max-w-360">
        <h2
          className="
            text-[34px]
            font-bold
            leading-[1.1]
            tracking-[-1.5px]
            text-[#050505]
            sm:text-[40px]
            lg:text-[42px]

            dark:text-white
          "
        >
          Build Your Foundation
        </h2>

        <p
          className="
            mt-5
            max-w-190
            text-[16px]
            leading-7
            text-[#737680]
            sm:text-[18px]

            dark:text-gray-400
          "
        >
          Establish a robust digital presence that commands authority and
          builds trust from day one.
        </p>

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
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