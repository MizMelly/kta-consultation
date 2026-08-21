import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section
      className="
        border-b
        border-[#EEEEEE]
        bg-white
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-10
        lg:py-19.5

        dark:border-gray-800
        dark:bg-[#0B0B0B]
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-225 text-center"
      >
        <h1
          className="
            text-[42px]
            font-bold
            leading-[1.05]
            tracking-[-2px]
            text-[#050505]
            sm:text-[50px]
            lg:text-[60px]

            dark:text-white
          "
        >
          Digital Solutions Designed to{" "}
          <span
            className="
              text-[#1565A9]

              dark:text-[#4DA3FF]
            "
          >
            Grow Your Business
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-7
            max-w-175
            text-[16px]
            font-medium
            leading-[1.7]
            text-[#737680]
            sm:text-[18px]

            dark:text-gray-400
          "
        >
          More Than Services. A Partnership for Growth. We don't just
          execute tasks—we build strategic digital ecosystems tailored
          to your specific business objectives.
        </p>

        <motion.a
          href="#foundation"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="
            mt-10
            inline-flex
            rounded-md
            bg-[#1565A9]
            px-8
            py-4.25
            text-[16px]
            font-semibold
            text-white
            transition
            hover:bg-[#12558F]

            dark:bg-[#1478C9]
            dark:hover:bg-[#0E64A8]
          "
        >
          Book a Free Consultation
        </motion.a>
      </motion.div>
    </section>
  );
}