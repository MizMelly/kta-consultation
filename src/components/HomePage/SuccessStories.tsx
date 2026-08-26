import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import enekemImage from "../../assets/Enekem Banner.jpg.jpeg";
import veriPropertyImage from "../../assets/Veriproperty.jpeg";

const stories = [
  {
    category: "HEALTHCARE",
    title: "Enekem Medicals",
    description:
      "Complete digital transformation from brand identity to a comprehensive e-commerce platform and ongoing digital marketing.",
    image: enekemImage,
     imagePosition: "object-center",
  },
  {
    category: "PROPTECH",
    title: "VeriProperty",
    description:
      "Building trust in African real estate through a verified listing platform and automated CRM systems.",
    image: veriPropertyImage,
    imagePosition: "object-[center_35%]",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-[#FAFAFA] px-5 py-16 transition-colors duration-300 dark:bg-[#080D0D] sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.08] tracking-[-1.5px] text-[#050505] dark:text-white sm:text-[40px] md:text-[46px]">
              Helping Businesses Grow
              <br />
              <span className="bg-linear-to-r from-[#00529C] via-[#2D78B8] to-[#72A9D8] bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h2>

            <p className="mt-6 text-[16px] leading-7 text-[#737680] dark:text-gray-400 sm:text-[18px]">
              Real results from our strategic partnerships.
            </p>
          </div>

          <Link
            to="/success-stories"
            className="inline-flex h-11 w-fit items-center justify-center rounded-md border border-[#E2E2E2] bg-white px-6 text-[14px] font-medium text-[#171717] shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-all duration-200 hover:border-[#00529C] hover:text-[#003F78] dark:border-gray-700 dark:bg-[#101717] dark:text-gray-200 dark:hover:border-[#00529C] dark:hover:text-[#00529C]"
          >
            View All Stories
          </Link>
        </div>

        {/* Case Studies */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.title}
              className="group overflow-hidden rounded-2xl border border-[#E4E4E4] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.05)] dark:border-gray-800 dark:bg-[#101717] dark:hover:shadow-[0_14px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="relative aspect-[1.55/1] overflow-hidden bg-linear-to-br from-[#F7F7F8] via-[#FBFBFB] to-[#F1F2F3] dark:from-[#151D1D] dark:via-[#111919] dark:to-[#0D1414]">
                <img
                  src={story.image}
                  alt={story.title}
                   className={`h-full w-full object-cover ${story.imagePosition} transition-transform duration-500 group-hover:scale-[1.03]`}
                />
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-[12px] font-semibold tracking-[0.8px] text-[#00529C]">
                  {story.category}
                </p>

                <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.7px] text-[#111111] dark:text-white">
                  {story.title}
                </h3>

                <p className="mt-4 max-w-2xl text-[15.5px] leading-6 text-[#737680] dark:text-gray-400">
                  {story.description}
                </p>

                <Link
                  to="/success-stories"
                  className="group/link mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#00529C] transition-colors duration-200 hover:text-[#003F78]"
                >
                  Read Case Study
                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}