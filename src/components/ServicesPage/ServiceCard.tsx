import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -3 }}
      className="
        min-h-50
        rounded-2xl
        border
        border-[#E6E6E6]
        bg-white
        p-8
        transition-shadow
        duration-300
        hover:shadow-[0_8px_30px_rgba(21,101,169,0.08)]

        dark:border-gray-800
        dark:bg-[#151515]
        dark:hover:shadow-[0_8px_30px_rgba(77,163,255,0.08)]
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#EAF3FA]

          dark:bg-[#12324A]
        "
      >
        <Icon
          size={23}
          strokeWidth={2}
          className="
            text-[#1565A9]

            dark:text-[#4DA3FF]
          "
        />
      </div>

      <h3
        className="
          mt-7
          text-[19px]
          font-bold
          tracking-[-0.4px]
          text-[#050505]

          dark:text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-[15px]
          leading-6
          text-[#737680]

          dark:text-gray-400
        "
      >
        {description}
      </p>
    </motion.div>
  );
}