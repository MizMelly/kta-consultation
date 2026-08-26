import { Link } from "react-router-dom";
import Footer from "../components/Footer"

interface PolicySectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function PolicySection({
  number,
  title,
  children,
}: PolicySectionProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <span className="text-[12px] font-semibold tracking-[0.15em] text-[#1565A9]">
          {number}
        </span>

        <div className="h-px w-8 bg-[#1565A9]" />
      </div>

      <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-[#111214] sm:text-[28px]">
        {title}
      </h2>

      <div className="mt-5 space-y-5 text-[14px] leading-7 text-[#62656C]">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-[#111214]">
      {/* Hero */}
      <section className="bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F5A21A]">
            KonfirmTech Africa
          </p>

          <h1 className="max-w-4xl text-[42px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[64px]">
            Privacy Policy
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#92949B] sm:text-[16px]">
            Your privacy is a top priority. Learn how KonfirmTech Africa
            collects, uses, protects, and manages your information.
          </p>

          <div className="mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[#74767D]">
            <span>Effective Date</span>

            <span className="h-1 w-1 rounded-full bg-[#1565A9]" />

            <span>August 2026</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24 dark:bg-[#0B0B0B]">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="border-b border-[#E8E9EB] pb-12">
            <p className="text-[15px] leading-8 text-[#62656C] sm:text-[16px]">
              At Konfirm Tech Africa ("KTA", "we", "us", or "our"), your
              privacy is a top priority. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website, use our services, or interact with our AI
              Consultation Assistant.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-[#62656C] sm:text-[16px]">
              By using our services, you consent to the practices described in
              this policy.
            </p>
          </div>

          <div className="space-y-14 pt-14">
            {/* 01 */}
            <PolicySection
              number="01"
              title="Information We Collect"
            >
              <p>
                We collect information to provide better services to all our
                users. The types of information we collect include:
              </p>

              <ul className="list-disc space-y-4 pl-5">
                <li>
                  <strong className="font-semibold text-[#111214]">
                    Personal Information:
                  </strong>{" "}
                  Name, email address, phone number, company name, and job title
                  when you fill out forms, book consultations, or contact us.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Business Information:
                  </strong>{" "}
                  Details about your business, challenges, goals, and current
                  digital setup provided during consultations or project
                  scoping.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Technical Data:
                  </strong>{" "}
                  IP address, browser type, operating system, pages visited,
                  and interaction data collected automatically via cookies and
                  similar technologies.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    AI Interaction Data:
                  </strong>{" "}
                  Transcripts, inputs, and responses generated when you use our
                  AI Consultation Assistant.
                </li>
              </ul>
            </PolicySection>

            {/* 02 */}
            <PolicySection
              number="02"
              title="How We Use Your Information"
            >
              <p>
                We use the collected information for various purposes,
                including:
              </p>

              <ul className="list-disc space-y-3 pl-5">
                <li>
                  To provide, operate, and maintain our services.
                </li>

                <li>
                  To process and manage consultation bookings.
                </li>

                <li>
                  To personalize your experience and deliver tailored
                  solutions.
                </li>

                <li>
                  To communicate with you, including responding to inquiries
                  and sending service updates.
                </li>

                <li>
                  To improve our website, services, and AI systems.
                </li>

                <li>
                  To detect, prevent, and address technical issues or
                  fraudulent activities.
                </li>
              </ul>
            </PolicySection>

            {/* 03 */}
            <PolicySection
              number="03"
              title="Legal Basis for Processing"
            >
              <p>
                For users in regulated jurisdictions, we process personal data
                under the following legal bases:
              </p>

              <ul className="list-disc space-y-4 pl-5">
                <li>
                  <strong className="font-semibold text-[#111214]">
                    Consent:
                  </strong>{" "}
                  When you explicitly agree to our data collection, such as
                  subscribing to a newsletter.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Contractual Necessity:
                  </strong>{" "}
                  To fulfill our obligations under a service agreement with
                  you.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Legitimate Interests:
                  </strong>{" "}
                  To improve our services and secure our platform, provided
                  these interests do not override your fundamental rights.
                </li>
              </ul>
            </PolicySection>

            {/* 04 */}
            <PolicySection
              number="04"
              title="Data Sharing and Disclosure"
            >
              <p>
                We do not sell your personal information. We may share your
                data in the following circumstances:
              </p>

              <ul className="list-disc space-y-4 pl-5">
                <li>
                  <strong className="font-semibold text-[#111214]">
                    Service Providers:
                  </strong>{" "}
                  With trusted third-party vendors who assist us in operating
                  our website, conducting our business, or servicing you, such
                  as hosting providers, CRM platforms, and AI technology
                  partners, subject to appropriate confidentiality
                  obligations.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Legal Requirements:
                  </strong>{" "}
                  If required by law, court order, or governmental regulation,
                  or to protect our rights, property, or safety, and that of
                  our users or others.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Business Transfers:
                  </strong>{" "}
                  In connection with a merger, sale of company assets,
                  financing, or acquisition of all or a portion of our
                  business.
                </li>
              </ul>
            </PolicySection>

            {/* 05 */}
            <PolicySection
              number="05"
              title="Data Retention"
            >
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, comply with our legal obligations, resolve disputes,
                and enforce our agreements.
              </p>

              <p>
                AI interaction data is typically anonymized or deleted after a
                set period unless required for specific project development.
              </p>
            </PolicySection>

            {/* 06 */}
            <PolicySection
              number="06"
              title="Data Security"
            >
              <p>
                We implement robust, industry-standard security measures to
                protect your data from unauthorized access, alteration,
                disclosure, or destruction.
              </p>

              <p>
                However, no method of transmission over the Internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </PolicySection>

            {/* 07 */}
            <PolicySection
              number="07"
              title="Your Data Protection Rights"
            >
              <p>
                Depending on your location, you may have the following rights:
              </p>

              <ul className="list-disc space-y-4 pl-5">
                <li>
                  <strong className="font-semibold text-[#111214]">
                    Access:
                  </strong>{" "}
                  The right to request copies of your personal data.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Rectification:
                  </strong>{" "}
                  The right to request correction of inaccurate data.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Erasure:
                  </strong>{" "}
                  The right to request the deletion of your personal data
                  ("Right to be Forgotten").
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Restriction:
                  </strong>{" "}
                  The right to restrict the processing of your data.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Portability:
                  </strong>{" "}
                  The right to request the transfer of your data to another
                  organization.
                </li>

                <li>
                  <strong className="font-semibold text-[#111214]">
                    Objection:
                  </strong>{" "}
                  The right to object to our processing of your personal data.
                </li>
              </ul>

              <p>
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@konfirmtechafrica.com"
                  className="font-medium text-[#1565A9] transition-colors hover:text-[#111214]"
                >
                  privacy@konfirmtechafrica.com
                </a>
                .
              </p>
            </PolicySection>

            {/* 08 */}
            <PolicySection
              number="08"
              title="Cookies and Tracking Technologies"
            >
              <p>
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information.
              </p>

              <p>
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. Please note that
                disabling cookies may affect certain website functionality.
              </p>

              <p>
                For more detailed information about our use of cookies, please
                review our{" "}
                <Link
                  to="/cookie-policy"
                  className="font-medium text-[#1565A9] transition-colors hover:text-[#111214]"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </PolicySection>

            {/* 09 */}
            <PolicySection
              number="09"
              title="Third-Party Links"
            >
              <p>
                Our website may contain links to other sites that are not
                operated by us.
              </p>

              <p>
                We have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party
                sites or services.
              </p>

              <p>
                We strongly advise you to review the Privacy Policy of every
                site you visit.
              </p>
            </PolicySection>

            {/* 10 */}
            <PolicySection
              number="10"
              title="Children's Privacy"
            >
              <p>
                Our services are not intended for use by individuals under the
                age of 18 ("Children").
              </p>

              <p>
                We do not knowingly collect personally identifiable information
                from children.
              </p>

              <p>
                If you become aware that a child has provided us with personal
                data, please contact us, and we will take reasonable steps to
                remove that information.
              </p>
            </PolicySection>

            {/* 11 */}
            <PolicySection
              number="11"
              title="International Data Transfers"
            >
              <p>
                Your information may be transferred to—and maintained
                on—computers located outside of your state, province, country,
                or other governmental jurisdiction where the data protection
                laws may differ from those in your jurisdiction.
              </p>

              <p>
                By submitting your information, you agree to this transfer,
                storing, or processing.
              </p>
            </PolicySection>

            {/* 12 */}
            <PolicySection
              number="12"
              title="Changes to This Privacy Policy"
            >
              <p>
                We may update our Privacy Policy from time to time.
              </p>

              <p>
                We will notify you of any changes by posting the new Privacy
                Policy on this page and updating the "Effective Date" at the
                top.
              </p>

              <p>
                You are advised to review this Privacy Policy periodically for
                any changes.
              </p>
            </PolicySection>

            {/* 13 */}
            <PolicySection
              number="13"
              title="AI Consultation Assistant Privacy"
            >
              <p>
                When you interact with our AI Consultation Assistant, please be
                aware that:
              </p>

              <ul className="list-disc space-y-4 pl-5">
                <li>
                  Conversations are processed by third-party AI models, such
                  as OpenAI, via API.
                </li>

                <li>
                  Data entered is used solely for the purpose of understanding
                  your business needs and generating a consultation brief.
                </li>

                <li>
                  Do not submit highly sensitive, confidential, or proprietary
                  intellectual property into the AI chat interface.
                </li>
              </ul>

              <div className="mt-7 rounded-xl border border-[#DCE7F0] bg-[#F5F9FC] p-5">
                <p className="text-[13px] font-medium leading-6 text-[#1565A9]">
                  Important: The AI Consultation Assistant is an automated
                  system. Please review our{" "}
                  <Link
                    to="/ai-disclaimer"
                    className="font-semibold underline underline-offset-4"
                  >
                    AI Assistant Disclaimer
                  </Link>{" "}
                  for more information about its limitations and use.
                </p>
              </div>
            </PolicySection>

            {/* Contact */}
            <section className="border-t border-[#E8E9EB] pt-14">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[12px] font-semibold tracking-[0.15em] text-[#1565A9]">
                  CONTACT US
                </span>

                <div className="h-px w-8 bg-[#1565A9]" />
              </div>

              <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#111214] sm:text-[34px]">
                Questions about this Privacy Policy?
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#62656C]">
                If you have any questions about this Privacy Policy or how
                KonfirmTech Africa handles your information, please contact
                us.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#74767D]">
                    Email
                  </p>

                  <a
                    href="mailto:privacy@konfirmtechafrica.com"
                    className="mt-1 inline-block text-[14px] text-[#1565A9] transition-colors hover:text-[#111214]"
                  >
                    privacy@konfirmtechafrica.com
                  </a>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#74767D]">
                    General Email
                  </p>

                  <a
                    href="mailto:info@konfirmtechafrica.com"
                    className="mt-1 inline-block text-[14px] text-[#111214] transition-colors hover:text-[#1565A9]"
                  >
                    info@konfirmtechafrica.com
                  </a>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#74767D]">
                    Phone
                  </p>

                  <a
                    href="tel:+2347060913641"
                    className="mt-1 inline-block text-[14px] text-[#111214] transition-colors hover:text-[#1565A9]"
                  >
                    +234 706 091 3641
                  </a>
                </div>
              </div>
            </section>

            {/* Legal Links */}
            <div className="border-t border-[#E8E9EB] pt-8">
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-[11px] font-medium uppercase tracking-widest">
                <Link
                  to="/privacy-policy"
                  className="text-[#1565A9]"
                >
                  Privacy Policy
                </Link>

                <span className="text-[#D5D6D8]">•</span>

                <Link
                  to="/terms-conditions"
                  className="text-[#62656C] transition-colors hover:text-[#1565A9]"
                >
                  Terms & Conditions
                </Link>

                <span className="text-[#D5D6D8]">•</span>

                <Link
                  to="/cookie-policy"
                  className="text-[#62656C] transition-colors hover:text-[#1565A9]"
                >
                  Cookie Policy
                </Link>

                <span className="text-[#D5D6D8]">•</span>

                <Link
                  to="/ai-disclaimer"
                  className="text-[#62656C] transition-colors hover:text-[#1565A9]"
                >
                  AI Disclaimer
                </Link>
              </div>
            </div>

            {/* Back to Home */}
            <div className="pt-2">
              <Link
                to="/home"
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111214] transition-colors hover:text-[#1565A9]"
              >
                <span>←</span>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
