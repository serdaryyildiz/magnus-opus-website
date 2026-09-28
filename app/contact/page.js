import TopBand from "@/components/TopBand";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact | Magnum Opus" };

export default function ContactPage() {
  return (
    <>
      <TopBand />
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/skyline-bw.jpg"
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-ink/70" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-2 shadow-2xl">
            <div className="bg-white flex items-center">
              <div className="px-8 md:px-14 py-14 w-full">
                <h1 className="text-3xl md:text-4xl font-extrabold text-ink mb-4">
                  Let&rsquo;s Create a Meaningful Connection
                </h1>
                <p className="text-ink/70 leading-relaxed mb-8">
                  Whether you are an artist, a brand, a cultural institution
                  or simply looking for a different way to experience art
                  and culture, we would be glad to hear from you.
                </p>
                <ContactForm />
              </div>
            </div>
            <div className="relative min-h-[280px] md:min-h-[460px]">
              <img
                src="/images/chandelier.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
