import { Lightbulb, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function VisionMission() {
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
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-5 py-16 transition-colors duration-300 dark:bg-[#080D0D] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">

        {/* Vision */}
        <div
          className={`rounded-2xl border border-[#E3E3E3] bg-white p-8 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-lg dark:border-[#243B53] dark:bg-[#101717] dark:hover:border-[#2F5F85] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)] sm:p-10 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Icon */}
          <div className="mb-7 flex h-12 w-12 items-center justify-center text-[#00529C]">
            <Target
              size={48}
              strokeWidth={1.8}
            />
          </div>

          <h2 className="text-[24px] font-bold tracking-[-0.8px] text-[#050505] transition-colors duration-300 dark:text-white sm:text-[26px]">
            Our Vision
          </h2>

          <p className="mt-4 max-w-xl text-[16px] font-medium leading-7 text-[#737680] transition-colors duration-300 dark:text-[#A0A3B1] sm:text-[17px]">
            To be the catalyst for digital transformation in Africa,
            empowering businesses to operate at a global standard and achieve
            unprecedented scale through innovative technology.
          </p>
        </div>

        {/* Mission */}
        <div
          className={`rounded-2xl border border-[#DCE8F2] bg-[#F0F6FA] p-8 transition-all delay-150 duration-700 ease-out hover:-translate-y-1 hover:shadow-lg dark:border-[#243B53] dark:bg-[#102A42] dark:hover:border-[#2F5F85] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)] sm:p-10 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Icon */}
          <div className="mb-7 flex h-12 w-12 items-center justify-center text-[#00529C]">
            <Lightbulb
              size={48}
              strokeWidth={1.8}
            />
          </div>

          <h2 className="text-[24px] font-bold tracking-[-0.8px] text-[#050505] transition-colors duration-300 dark:text-white sm:text-[26px]">
            Our Mission
          </h2>

          <p className="mt-4 max-w-xl text-[16px] font-medium leading-7 text-[#737680] transition-colors duration-300 dark:text-[#A0A3B1] sm:text-[17px]">
            To provide strategic, high-quality, and scalable digital solutions
            that solve real business problems, drive operational efficiency,
            and accelerate revenue growth for our partners.
          </p>
        </div>

      </div>
    </section>
  );
}