import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@konfirmtechafrica.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 706 091 3641",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us instantly",
    link: "https://wa.me/2349168623219",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2
        className="
          text-[30px]
          font-bold
          tracking-[-1px]
          text-[#050505]

          dark:text-white
        "
      >
        Get in Touch
      </h2>

      <p
        className="
          mt-5
          max-w-127.5
          text-[15px]
          font-medium
          leading-6
          text-[#737680]
          sm:text-[16px]

          dark:text-gray-400
        "
      >
        Reach out to us directly through any of the channels below. We
        typically respond within 24 hours.
      </p>

      <div className="mt-10 space-y-7">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#EAF3FA]
                  text-[#00529C]

                  dark:bg-[#12324A]
                  dark:text-[#4DA3FF]
                "
              >
                <Icon size={24} />
              </div>

              <div>
                <h3
                  className="
                    text-[16px]
                    font-semibold
                    text-[#080808]

                    dark:text-gray-100
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-[15px]
                    font-medium
                    text-[#737680]

                    dark:text-gray-400
                  "
                >
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="
          mt-12
          h-px
          bg-[#E5E7EB]

          dark:bg-gray-800
        "
      />

      <div className="mt-9">
        <h3
          className="
            text-[16px]
            font-semibold
            text-[#080808]

            dark:text-gray-100
          "
        >
          Prefer a Faster Conversation?
        </h3>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="/booking"
            className="
              inline-flex
              h-11
              items-center
              justify-center
              rounded-md
              bg-[#00529C]
              px-6
              text-[14px]
              font-semibold
              text-white
              transition
              hover:bg-[#003F78]

              dark:bg-[#1478C9]
              dark:hover:bg-[#0E64A8]
            "
          >
            Book a Free Consultation
          </a>

          <a
            href="https://wa.me/2347060913641"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              h-11
              items-center
              justify-center
              rounded-md
              border
              border-[#00529C]
              px-6
              text-[14px]
              font-semibold
              text-[#00529C]
              transition
              hover:bg-[#EAF3FA]

              dark:border-[#4DA3FF]
              dark:text-[#4DA3FF]
              dark:hover:bg-[#12324A]
            "
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}