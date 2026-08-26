import { Link } from "react-router-dom";
import Footer from "../components/Footer"

interface TermsSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function TermsSection({
  number,
  title,
  children,
}: TermsSectionProps) {
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

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-white text-[#111214]">
      {/* Hero */}
      <section className="bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F5A21A]">
            KonfirmTech Africa
          </p>

          <h1 className="max-w-4xl text-[42px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[64px]">
            Terms & Conditions
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#92949B] sm:text-[16px]">
            Please read these terms carefully before using the KonfirmTech
            Africa website and services.
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
              Please read these Terms and Conditions ("Terms") carefully before
              using the Konfirm Tech Africa website and services.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-[#62656C] sm:text-[16px]">
              These Terms establish the rules and conditions governing your use
              of our website and services.
            </p>
          </div>

          <div className="space-y-14 pt-14">
            {/* 01 */}
            <TermsSection
              number="01"
              title="Acceptance of Terms"
            >
              <p>
                By accessing or using our website and services, you agree to be
                bound by these Terms.
              </p>

              <p>
                If you disagree with any part of these Terms, you may not
                access or use our services.
              </p>
            </TermsSection>

            {/* 02 */}
            <TermsSection
              number="02"
              title="Services Description"
            >
              <p>
                Konfirm Tech Africa provides digital business solutions,
                including but not limited to:
              </p>

              <ul className="list-disc space-y-3 pl-5">
                <li>Website development</li>
                <li>Branding and identity</li>
                <li>Digital marketing</li>
                <li>Search engine optimization (SEO)</li>
                <li>Social media management</li>
                <li>Artificial Intelligence (AI) integration</li>
                <li>Business automation</li>
              </ul>

              <p>
                Specific deliverables, timelines, costs, responsibilities, and
                other project requirements are defined in separate,
                individualized Service Agreements or Statements of Work (SOW).
              </p>
            </TermsSection>

            {/* 03 */}
            <TermsSection
              number="03"
              title="Intellectual Property"
            >
              <p>
                All content on this website, including text, graphics, logos,
                images, software, designs, and other materials, is the property
                of Konfirm Tech Africa and is protected by applicable
                intellectual property and copyright laws.
              </p>

              <p>
                You may not reproduce, distribute, modify, republish, sell, or
                otherwise exploit website content without our prior written
                permission.
              </p>

              <p>
                Upon full payment for services rendered, clients receive rights
                to their specific project deliverables as outlined in their
                individual Service Agreements or Statements of Work.
              </p>
            </TermsSection>

            {/* 04 */}
            <TermsSection
              number="04"
              title="User Responsibilities"
            >
              <p>
                You agree to use our website and services for lawful purposes
                only and in accordance with these Terms.
              </p>

              <p>You must not:</p>

              <ul className="list-disc space-y-3 pl-5">
                <li>
                  Transmit malicious code, viruses, or other harmful software.
                </li>

                <li>
                  Attempt to gain unauthorized access to our systems,
                  servers, accounts, or networks.
                </li>

                <li>
                  Interfere with or disrupt the operation of our website or
                  services.
                </li>

                <li>
                  Use our platform to distribute spam, fraudulent material, or
                  harmful content.
                </li>

                <li>
                  Use our services in a manner that violates applicable laws
                  or regulations.
                </li>
              </ul>
            </TermsSection>

            {/* 05 */}
            <TermsSection
              number="05"
              title="Disclaimer of Warranties"
            >
              <p>
                Our website and services are provided "as is" and "as
                available" without warranties of any kind, whether express or
                implied, to the fullest extent permitted by applicable law.
              </p>

              <p>
                We do not guarantee that our website or services will always be
                uninterrupted, secure, available, accurate, or error-free.
              </p>

              <p>
                While we make reasonable efforts to provide reliable services,
                technical interruptions, maintenance, third-party failures, or
                other circumstances may affect availability.
              </p>
            </TermsSection>

            {/* 06 */}
            <TermsSection
              number="06"
              title="Limitation of Liability"
            >
              <p>
                To the fullest extent permitted by applicable law, Konfirm Tech
                Africa shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from or
                related to your use of our website or services.
              </p>

              <p>
                This includes, without limitation, loss of profits, revenue,
                data, business opportunities, goodwill, or other intangible
                losses.
              </p>

              <p>
                Any liability relating to a specific client project may be
                further governed by the applicable Service Agreement or
                Statement of Work.
              </p>
            </TermsSection>

            {/* 07 */}
            <TermsSection
              number="07"
              title="Governing Law"
            >
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria, without
                regard to its conflict of law provisions.
              </p>

              <p>
                Any disputes arising in connection with these Terms or our
                services shall be subject to the applicable courts and legal
                processes within Nigeria.
              </p>
            </TermsSection>

            {/* 08 */}
            <TermsSection
              number="08"
              title="Changes to These Terms"
            >
              <p>
                Konfirm Tech Africa reserves the right to modify or update
                these Terms from time to time.
              </p>

              <p>
                Any changes will be posted on this page and will become
                effective when published unless otherwise stated.
              </p>

              <p>
                Your continued use of our website or services after changes
                have been published constitutes your acceptance of the updated
                Terms.
              </p>
            </TermsSection>

            {/* Contact */}
            <section className="border-t border-[#E8E9EB] pt-14">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[12px] font-semibold tracking-[0.15em] text-[#1565A9]">
                  CONTACT US
                </span>

                <div className="h-px w-8 bg-[#1565A9]" />
              </div>

              <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#111214] sm:text-[34px]">
                Questions about these Terms?
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#62656C]">
                If you have any questions regarding these Terms and Conditions
                or our services, please contact the KonfirmTech Africa team.
              </p>

              <div className="mt-8 space-y-5">
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
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-[11px] font-medium uppercase tracking-widest">
                <Link
                  to="/privacy-policy"
                  className="text-[#62656C] transition-colors hover:text-[#1565A9]"
                >
                  Privacy Policy
                </Link>

                <span className="text-[#D5D6D8]">•</span>

                <Link
                  to="/terms-conditions"
                  className="text-[#1565A9]"
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