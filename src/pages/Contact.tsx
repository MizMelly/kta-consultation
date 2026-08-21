import ContactHero from "../components/ContactPage/ContactHero";
import ContactInfo from "../components/ContactPage/ContactInfo";
import ContactForm from "../components/ContactPage/ContactForm";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main
      className="
        min-h-screen
        bg-white

        dark:bg-[#0B0B0B]
      "
    >
      <ContactHero />

      <section
        className="
          bg-white
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-10
          lg:py-24

          dark:bg-[#0B0B0B]
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-292.5
            grid-cols-1
            gap-14
            lg:grid-cols-[1fr_545px]
            lg:gap-18.75
          "
        >
          <ContactInfo />
          <ContactForm />
           
        </div>
      </section>
      <Footer />
    </main>
  );
}