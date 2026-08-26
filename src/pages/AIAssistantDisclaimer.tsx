import { Link } from "react-router-dom";
import Footer from "../components/Footer"

interface DisclaimerSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function DisclaimerSection({
  number,
  title,
  children,
}: DisclaimerSectionProps) {
  return (
    <section >
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

export default function AIAssistantDisclaimer() {
  return (
    <main className="min-h-screen bg-white text-[#111214]">
      {/* Hero */}
      <section className="bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 ">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F5A21A]">
            KonfirmTech Africa
          </p>

          <h1 className="max-w-4xl text-[42px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[64px]">
            AI Assistant Disclaimer
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#92949B] sm:text-[16px]">
            Important information about the use of Artificial Intelligence
            during our consultation and discovery process.
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
              Our consultation booking system utilizes Artificial Intelligence
              (AI) to facilitate the initial discovery process and help us
              better understand your business needs before you engage with our
              human team.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-[#62656C] sm:text-[16px]">
              This disclaimer explains the nature, limitations, and use of our
              AI Assistant.
            </p>
          </div>

          <div className="space-y-14 pt-14">
            {/* 01 */}
            <DisclaimerSection
              number="01"
              title="Nature of the AI Assistant"
            >
              <p>
                The AI Assistant is an automated system designed to collect
                preliminary information about your business needs, goals,
                challenges, and potential project requirements.
              </p>

              <p>
                The AI Assistant is not a human consultant and does not provide
                final strategic advice, professional opinions, or binding
                project estimates.
              </p>

              <p>
                Any information, suggestions, or recommendations provided by
                the AI Assistant should be considered preliminary and for
                informational purposes only.
              </p>
            </DisclaimerSection>

            {/* 02 */}
            <DisclaimerSection
              number="02"
              title="Data Processing"
            >
              <p>
                Inputs provided to the AI Assistant may be processed by
                third-party Artificial Intelligence or language-model
                providers through application programming interfaces (APIs).
              </p>

              <p>
                For your protection, do not share sensitive, confidential,
                proprietary, financial, security-related, or otherwise
                restricted information through the AI chat interface.
              </p>

              <p>
                Where possible, provide only the information necessary for us
                to understand your general business needs and determine how we
                may assist you.
              </p>
            </DisclaimerSection>

            {/* 03 */}
            <DisclaimerSection
              number="03"
              title="Accuracy and Limitations"
            >
              <p>
                While we strive to configure and maintain the AI Assistant so
                that it provides helpful and accurate responses, AI-generated
                responses may occasionally contain errors, omissions, outdated
                information, or contextually inappropriate responses.
              </p>

              <p>
                The AI Assistant should not be relied upon as the sole basis
                for making important business, financial, technical, legal, or
                other professional decisions.
              </p>
            </DisclaimerSection>

            {/* 04 */}
            <DisclaimerSection
              number="04"
              title="Human Review"
            >
              <p>
                Information collected through the AI Assistant may be reviewed
                by members of the KonfirmTech Africa team.
              </p>

              <p>
                AI-generated summaries, recommendations, and preliminary
                project information may be reviewed and verified by our human
                team before any formal proposal, quotation, scope of work, or
                project agreement is issued.
              </p>

              <p>
                Any formal proposal or agreement issued by KonfirmTech Africa
                will take precedence over preliminary information provided by
                the AI Assistant.
              </p>
            </DisclaimerSection>

            {/* 05 */}
            <DisclaimerSection
              number="05"
              title="No Guarantee of Availability"
            >
              <p>
                The AI Assistant is provided as a convenience and may
                occasionally be unavailable, interrupted, delayed, or subject
                to technical limitations.
              </p>

              <p>
                We do not guarantee that the AI Assistant will always be
                available or that every interaction will produce a complete or
                accurate result.
              </p>
            </DisclaimerSection>

            {/* 06 */}
            <DisclaimerSection
              number="06"
              title="Third-Party AI Providers"
            >
              <p>
                Because the AI Assistant may rely on third-party AI or
                language-model services, information submitted through the
                system may be processed by those providers in accordance with
                the applicable agreements, technical configurations, and
                privacy practices governing those services.
              </p>

              <p>
                You should avoid entering information that you are not
                authorized to share with third-party technology providers.
              </p>
            </DisclaimerSection>

            {/* 07 */}
            <DisclaimerSection
              number="07"
              title="Your Responsibility"
            >
              <p>
                By using the AI Assistant, you acknowledge that you understand
                its automated nature and limitations.
              </p>

              <p>
                You remain responsible for reviewing information provided by
                the AI Assistant and should contact a qualified professional
                where specialized legal, financial, medical, technical, or
                other professional advice is required.
              </p>
            </DisclaimerSection>

            {/* 08 */}
            <DisclaimerSection
              number="08"
              title="Relationship to Our Privacy Policy"
            >
              <p>
                Information collected through the AI Assistant may also be
                subject to our Privacy Policy.
              </p>

              <p>
                For information about how KonfirmTech Africa collects, uses,
                stores, and protects personal information, please review our
                Privacy Policy.
              </p>

              <Link
                to="/privacy-policy"
                className="inline-flex items-center gap-2 pt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1565A9] transition-colors hover:text-[#111214]"
              >
                View Privacy Policy
                <span>→</span>
              </Link>
            </DisclaimerSection>

            {/* 09 */}
            <DisclaimerSection
              number="09"
              title="Changes to This Disclaimer"
            >
              <p>
                KonfirmTech Africa may update this AI Assistant Disclaimer
                from time to time to reflect changes in our AI tools, services,
                technology, or applicable requirements.
              </p>

              <p>
                Any updates will be reflected by revising the Effective Date
                displayed at the beginning of this document.
              </p>
            </DisclaimerSection>

            {/* Contact */}
            <section className="border-t border-[#E8E9EB] pt-14">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[12px] font-semibold tracking-[0.15em] text-[#1565A9]">
                  CONTACT
                </span>

                <div className="h-px w-8 bg-[#1565A9]" />
              </div>

              <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#111214] sm:text-[34px]">
                Questions about our AI Assistant?
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#62656C]">
                If you have questions about our AI Assistant, how it is used,
                or how information submitted through it is handled, please
                contact us.
              </p>

              <div className="mt-8 space-y-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#74767D]">
                    Email
                  </p>

                  <a
                    href="mailto:info@konfirmtechafrica.com"
                    className="mt-1 inline-block text-[14px] text-[#1565A9] transition-colors hover:text-[#111214]"
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
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-medium uppercase tracking-[0.12em]">
                <Link
                  to="/privacy-policy"
                  className="text-[#62656C] transition-colors hover:text-[#1565A9]"
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
                  className="text-[#1565A9]"
                >
                  AI Disclaimer
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}