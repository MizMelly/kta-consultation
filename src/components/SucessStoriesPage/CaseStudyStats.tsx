import EnakemImage from "../../assets/Enekem.jpeg";

const stats = [
  {
    value: "20+",
    label: "Businesses Partnered",
  },
  {
    value: "3+",
    label: "Industries Served",
  },
  {
    value: "100%",
    label: "Long-Term Partnerships",
  },
  {
    value: "AI-First",
    label: "Approach to Every Project",
  },
];

export default function CaseStudyStats() {
  return (
    <section className="bg-[#F7F2EA] dark:bg-[#0B0B0B]">
      {/* Stats */}
      <div className="border-b border-[#E4DCCF] px-5 py-8 dark:border-gray-800 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[30px] font-extrabold leading-none tracking-[-0.8px] text-[#0B1220] dark:text-white sm:text-[34px]">
                {stat.value}
              </p>

              <p className="mt-2 text-[13px] font-medium text-[#5F5A52] dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured case card */}
      <div className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1230px]">
          <div className="relative min-h-[380px] overflow-hidden rounded-[22px] bg-[#1565A9]">
            <img
  src={EnakemImage}
  alt="Modern apartment building"
  className="absolute inset-0 h-full w-full object-cover"
/>

            <div className="absolute inset-0 bg-gradient-to-r from-[#1565A9]/55 via-[#1565A9]/20 to-transparent" />

            <div className="relative z-10 flex min-h-[380px] max-w-[620px] flex-col justify-end px-8 py-10 sm:px-12">
              <span className="mb-5 inline-flex w-fit rounded-full border border-white/60 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.6px] text-[#F5A21A]">
                Healthcare
              </span>

              <h2 className="text-[40px] font-extrabold leading-none tracking-[-1.2px] text-white sm:text-[52px]">
                Enekem Medicals
              </h2>

              <p className="mt-3 text-[17px] font-medium leading-7 text-white/85 sm:text-[19px]">
                Modern digital presence that puts patients first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}