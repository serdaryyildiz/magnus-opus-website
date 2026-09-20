import Link from "next/link";

export default function ContactCTA({ bg = "/images/skyline-bw.jpg", image = "/images/chandelier.jpg" }) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 shadow-2xl">
          <div className="bg-white flex items-center">
            <div className="px-8 md:px-14 py-14 md:py-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-6">
                Let&rsquo;s Create a Meaningful Connection
              </h2>
              <p className="text-ink/70 leading-relaxed mb-8">
                Whether you are an artist, a brand, a cultural institution or
                simply looking for a different way to experience art and
                culture, we would be glad to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-ink text-white px-8 py-3 text-sm tracked uppercase hover:bg-gold transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="relative aspect-[544/601]">
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
