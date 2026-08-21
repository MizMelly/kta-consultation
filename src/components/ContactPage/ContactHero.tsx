import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="border-b border-[#EEEEEE] bg-[#FAFAFA] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-19">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-[42px] font-bold leading-[1.1] tracking-[-1.8px] text-[#050505] sm:text-[52px] lg:text-[60px]">
          Let's Start the{" "}
          <span className="text-[#00529C]">Conversation</span>
        </h1>

        <p className="mx-auto mt-5 max-w-180 text-[16px] font-medium leading-7 text-[#737680] sm:text-[18px]">
          Whether you have a specific project in mind or just want to explore
          possibilities, we're here to help.
        </p>
      </motion.div>
    </section>
  );
}