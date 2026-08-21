import { useEffect, useRef, useState } from "react";

export default function AboutHero() {
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
      className="flex min-h-[calc(100vh-72px)] items-center justify-center dark:bg-[#080D0D] bg-[#FAFAFA] px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Heading */}
        <h1
          className={`text-[42px] font-bold leading-[1.04] tracking-[-2px] text-[#050505] dark:text-white transition-all duration-1000 ease-out sm:text-[52px] sm:tracking-[-2.5px] md:text-[62px] lg:text-[68px] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">Building Businesses.</span>

          <span
            className={`block bg-linear-to-r from-[#00529C] via-[#2D78B8] to-[#00529C] bg-clip-text text-transparent transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Empowering Growth
          </span>

          <span
            className={`block bg-linear-to-r from-[#00529C] to-[#2D78B8] bg-clip-text text-transparent transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Through Innovation.
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mx-auto mt-8 max-w-3xl text-[16px] font-medium leading-7 text-[#737680] transition-all delay-500 duration-1000 ease-out sm:mt-9 sm:text-[18px] sm:leading-8 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          We are a team of strategic thinkers, designers, and technologists
          dedicated to helping businesses navigate and dominate the digital
          landscape.
        </p>
      </div>
    </section>
  );
}