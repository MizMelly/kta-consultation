import {
  Award,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    title: "Innovation",
    description:
      "We constantly explore new technologies and approaches to keep our clients ahead.",
    icon: Lightbulb,
  },
  {
    title: "Partnership",
    description:
      "We are invested in your success. Your wins are our wins.",
    icon: UserRound,
  },
  {
    title: "Integrity",
    description:
      "Transparent communication, honest advice, and delivery on promises.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We maintain a high standard of quality in everything we produce.",
    icon: Award,
  },
  {
    title: "Growth",
    description:
      "A relentless focus on scalable solutions that drive bottom-line results.",
    icon: TrendingUp,
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA] px-5 py-16 transition-colors duration-300 dark:bg-[#080D0D] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="text-center">
          <h2
            className={`text-[30px] font-bold tracking-[-1px] text-[#050505] transition-all duration-700 ease-out dark:text-white sm:text-[34px] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Our Core Values
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-7 text-[#737680] transition-all delay-150 duration-700 ease-out dark:text-[#A0A3B1] sm:text-[17px] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            The principles that guide every line of code we write and
            strategy we craft.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className={`rounded-xl border border-[#E3E3E3] bg-white p-7 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-[#C9DEEE] hover:shadow-lg dark:border-[#243B53] dark:bg-[#101717] dark:hover:border-[#2F5F85] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)] sm:p-8 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${250 + index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-7 text-[#00529C]">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-semibold tracking-[-0.5px] text-[#050505] transition-colors duration-300 dark:text-white">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[15px] font-medium leading-6 text-[#737680] transition-colors duration-300 dark:text-[#A0A3B1]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}