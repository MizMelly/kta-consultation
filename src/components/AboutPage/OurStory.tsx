import { useEffect, useRef, useState } from "react";

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
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
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 dark:bg-[#080D0D]"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2
          className={`text-[28px] font-bold tracking-[-1px] text-[#050505] dark:text-white transition-all duration-700 ease-out sm:text-[32px] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          Our Story
        </h2>

        {/* First paragraph */}
        <p
          className={`mt-6 text-[16px] font-medium leading-7 text-[#737680] dark:text-[#A0A3B1] transition-all delay-150 duration-700 ease-out sm:text-[17px] sm:leading-7 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          Konfirm Tech Africa was born from a simple observation: many
          businesses in Africa struggle to leverage digital technology
          effectively. They are either sold generic solutions that don't fit
          their unique market challenges, or left behind in a rapidly
          evolving digital economy.
        </p>

        {/* Second paragraph */}
        <p
          className={`mt-7 text-[16px] font-medium leading-7 text-[#737680] transition-all delay-300 duration-700 ease-out sm:text-[17px] sm:leading-7 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          We decided to change that. We positioned ourselves not just as a
          digital agency, but as a long-term strategic partner. We immerse
          ourselves in our clients' businesses, understand their core
          operations, and build tailored digital ecosystems that drive
          tangible growth. Today, we stand as a trusted ally for
          forward-thinking brands across the continent and beyond.
        </p>
      </div>
    </section>
  );
}