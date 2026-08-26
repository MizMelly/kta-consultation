import { Link } from "react-router-dom";

import victorImage from "../../assets/Okworie Victor Emmanuel.png";
import iniobongImage from "../../assets/Iniobong Nyong.png";
import blessingImage from "../../assets/Ocha Blessing Akwa.jpeg";
import chiomaImage from "../../assets/Chioma Obiefuna.jpeg";

const leaders = [
  {
    initials: "OV",
    name: "Okworie Victor Emmanuel",
    role: "Founder & CEO",
    image: victorImage,
    imagePosition: "object-center",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/vepdicreative?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    initials: "IN",
    name: "Iniobong Nyong",
    role: "Visual Content Lead",
    image: iniobongImage,
    imagePosition: "object-center",
    socials: {
      linkedin: "https://www.linkedin.com/in/iniobong-nyong",
    },
  },
  {
    initials: "OB",
    name: "Ocha Blessing Akwa",
    role: "Creative Design Lead",
    image: blessingImage,
    imagePosition: "object-[center_5%]",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/blessing-ocha-23b74b2b0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    initials: "CO",
    name: "Chioma Obiefuna",
    role: "Product Development Lead",
    image: chiomaImage,
    imagePosition: "object-center",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/chioma-obiefuna-183bb5235?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20 dark:bg-[#0B0B0B]">
      <div className="mx-auto max-w-290">
        <div className="text-center">
          <h2 className="text-[32px] font-extrabold tracking-[-1px] text-[#050505] sm:text-[36px] dark:text-white">
            Meet the Leadership
          </h2>

          <p className="mt-4 text-[16px] font-medium text-[#737680] sm:text-[17px] dark:text-gray-400">
            The minds driving the vision.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <div key={leader.name} className="text-center">
              <div className="aspect-square overflow-hidden rounded-[14px] border border-[#E5E7EB] bg-[#F4F4F5] dark:border-gray-800 dark:bg-[#111111]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className={`h-full w-full object-cover ${leader.imagePosition}`}
                />
              </div>

              <h3 className="mt-7 text-[18px] font-extrabold tracking-[-0.3px] text-[#050505] dark:text-white">
                {leader.name}
              </h3>

              <p className="mt-2 text-[15px] font-medium text-[#1565A9]">
                {leader.role}
              </p>

              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={leader.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${leader.name} LinkedIn`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#1565A9] transition hover:border-[#1565A9] hover:bg-[#1565A9] hover:text-white dark:border-gray-800"
                >
                  <span className="text-[12px] font-extrabold">in</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Join the Team */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/careers"
            className="rounded-md border border-[#E5E7EB] bg-white px-6 py-3 text-[14px] font-bold text-[#111827] shadow-sm transition hover:border-[#1565A9] hover:text-[#1565A9] dark:border-gray-800 dark:bg-[#111111] dark:text-white dark:hover:border-[#1565A9] dark:hover:text-[#F5A21A]"
          >
            Join the Team
          </Link>
        </div>
      </div>
    </section>
  );
}