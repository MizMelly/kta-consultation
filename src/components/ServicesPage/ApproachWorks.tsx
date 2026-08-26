import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const approachItems = [
  {
    title: "Holistic Strategy",
    description: "We look at the big picture before writing a single line of code.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Every move is backed by analytics and market research.",
  },
  {
    title: "Agile Execution",
    description: "We adapt quickly to market changes and feedback.",
  },
  {
    title: "Transparent Reporting",
    description: "You always know what we're doing and why.",
  },
  {
    title: "Scalable Architecture",
    description: "We build for today with tomorrow in mind.",
  },
];

export default function ApproachWorks() {
  return (
    <section className="bg-[#F7F7F8] px-5 py-16 sm:px-8 lg:px-10 lg:py-20 dark:bg-[#0B0B0B]">
      <div className="mx-auto max-w-225">
        <div className="text-center">
          <h2 className="text-[32px] font-bold tracking-[-1.2px] text-[#050505] sm:text-[36px] dark:text-white">
            Why Our Approach Works
          </h2>

          <p className="mt-4 text-[16px] font-medium leading-6 text-[#737680] sm:text-[17px] dark:text-gray-400">
            We focus on outcomes, not just outputs.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {approachItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-lg border border-[#E5E7EB] bg-white px-5 py-5 shadow-sm dark:border-gray-800 dark:bg-[#111111]"
            >
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />

              <p className="text-[16px] font-medium leading-6 text-[#111827] dark:text-gray-100">
                <span className="font-bold">{item.title}:</span>{" "}
                {item.description}
              </p>
            </div>
          ))}
        </div>

       <div className="mt-16 flex justify-center">
  <Link
    to="/booking"
    className="rounded-full bg-blue-600 px-9 py-4 text-[16px] font-bold text-white shadow-md transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
  >
    Let's Discuss Your Business
  </Link>
</div>
      </div>
    </section>
  );
}