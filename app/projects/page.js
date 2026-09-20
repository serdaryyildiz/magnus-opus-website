import Link from "next/link";
import TopBand from "@/components/TopBand";

export const metadata = { title: "Projects | Magnum Opus" };

const projects = [
  {
    href: "/projects/sculpture-journey",
    title: "Sculpture Journey",
    subtitle: "Ayla Turan · Kemal Tufan — Bodrum Golf Club",
    image: "/images/proj-sj-crate.jpg",
  },
  {
    href: "/projects/play-again",
    title: "Rahşan Düren · Play Again",
    subtitle: "San Clemente Island, Venice · Tarhan Han, Istanbul",
    image: "/images/proj-pa-5.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <TopBand />
      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink text-center mb-16">
            Projects
          </h1>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {projects.map((p) => (
              <Link key={p.href} href={p.href} className="group block relative aspect-[3/4] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />
                <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
                  <h2 className="text-white font-extrabold uppercase text-lg sm:text-xl md:text-2xl mb-2 leading-[1.05]">
                    {p.title}
                  </h2>
                  <p className="text-white/70 text-sm">{p.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
