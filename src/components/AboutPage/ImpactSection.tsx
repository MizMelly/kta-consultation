import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep dive into your business model, goals, and market landscape.",
    side: "left",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Formulate a tailored digital roadmap aligned with your objectives.",
    side: "right",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Execute the plan—developing robust platforms, identities, and systems.",
    side: "left",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Deploy solutions with precision and seamless integration.",
    side: "right",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Drive traffic, generate leads, and amplify your digital presence.",
    side: "left",
  },
  {
    number: "06",
    title: "Scale",
    description:
      "Analyze performance, optimize, and introduce automation to handle increased volume.",
    side: "right",
  },
];

export default function PartnershipProcess() {
  return (
    <section className="bg-[#FAFAFA] px-5 py-16 transition-colors duration-300 dark:bg-[#080D0D] sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto text-center"
        >
          <h2 className="text-[30px] font-bold tracking-[-1px] text-[#050505] transition-colors duration-300 dark:text-white sm:text-[34px]">
            Our Partnership Process
          </h2>

          <p className="mt-4 text-[15px] font-medium leading-6 text-[#737680] transition-colors duration-300 dark:text-[#A0A3B1] sm:text-[16px]">
            A proven methodology for sustainable growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-225 sm:mt-16.5">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#E5E7EB] transition-colors duration-300 dark:bg-[#273746]" />

          <div className="relative space-y-12 sm:space-y-12">
            {steps.map((step, index) => {
              const isLeft = step.side === "left";

              return (
                <div
                  key={step.number}
                  className="relative grid min-h-31.5 grid-cols-[1fr_64px_1fr] items-center gap-0"
                >
                  {/* Left Card */}
                  <div className="flex justify-end pr-4 sm:pr-12">
                    {isLeft && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: -35,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.08,
                          ease: "easeOut",
                        }}
                        className="w-full max-w-93.25 rounded-xl border border-[#E2E4E8] bg-white px-5 py-6 transition-colors duration-300 dark:border-[#243B53] dark:bg-[#101717] dark:hover:border-[#2F5F85] sm:px-7"
                      >
                        <h3 className="text-right text-[19px] font-bold leading-6 tracking-[-0.5px] text-[#080808] transition-colors duration-300 dark:text-white sm:text-[20px]">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-right text-[14px] font-medium leading-5 text-[#737680] transition-colors duration-300 dark:text-[#A0A3B1]">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Number Circle */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#00529C] bg-[#EAF3FA] transition-colors duration-300 dark:bg-[#102A42]"
                  >
                    <span className="text-[20px] font-bold tracking-[-0.5px] text-[#00529C]">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Right Card */}
                  <div className="pl-4 sm:pl-12">
                    {!isLeft && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: 35,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.08,
                          ease: "easeOut",
                        }}
                        className="w-full max-w-93.25 rounded-xl border border-[#E2E4E8] bg-white px-5 py-6 transition-colors duration-300 dark:border-[#243B53] dark:bg-[#101717] dark:hover:border-[#2F5F85] sm:px-7"
                      >
                        <h3 className="text-left text-[19px] font-bold leading-6 tracking-[-0.5px] text-[#080808] transition-colors duration-300 dark:text-white sm:text-[20px]">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-left text-[14px] font-medium leading-5 text-[#737680] transition-colors duration-300 dark:text-[#A0A3B1]">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-12 flex justify-center sm:mt-14"
        >
          <motion.button
            whileHover={{
              y: -2,
              boxShadow: "0 8px 20px rgba(0, 82, 156, 0.22)",
            }}
            whileTap={{ scale: 0.98 }}
            className="rounded-md bg-[#00529C] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_3px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-[#003F78] sm:px-8 sm:text-[16px]"
          >
            Start Your Journey With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}