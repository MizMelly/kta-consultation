import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10"
    >
      <h2 className="text-[24px] font-bold tracking-[-0.6px] text-[#080808]">
        Send us a Message
      </h2>

      <form className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name" placeholder="John Doe" />
          <Field label="Company Name" placeholder="Acme Inc." />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email Address" placeholder="john@example.com" />
          <Field label="Phone Number" placeholder="+123 456 7890" />
        </div>

        <Field label="Subject" placeholder="How can we help?" />

        <div>
          <label className="mb-2 block text-[14px] font-semibold text-[#080808]">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Tell us about your project or inquiry..."
            className="w-full resize-y rounded-md border border-[#E1E3E6] px-3 py-3 text-[14px] outline-none placeholder:text-[#8A8D96] focus:border-[#00529C] focus:ring-2 focus:ring-[#00529C]/10"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#00529C] text-[15px] font-semibold text-white transition hover:bg-[#003F78]"
        >
          Send Message
          <Send size={17} />
        </motion.button>
      </form>
    </motion.div>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[14px] font-semibold text-[#080808]">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-md border border-[#E1E3E6] px-3 text-[14px] outline-none placeholder:text-[#8A8D96] focus:border-[#00529C] focus:ring-2 focus:ring-[#00529C]/10"
      />
    </div>
  );
}