import Link from "next/link";
import Hero from "@/components/Hero";
import Split from "@/components/Split";
import CardGrid from "@/components/CardGrid";
import ContactCTA from "@/components/ContactCTA";

const cards = [
  {
    image: "/images/card-artists.jpg",
    title: "Artists",
    tagline: "Representation · Advisory · Career Development",
    href: "/artist",
  },
  {
    image: "/images/card-experiences.jpg",
    title: "Experiences",
    tagline: "Art · Culture · Journeys · Encounters",
    href: "/experiences",
  },
  {
    image: "/images/card-brands-culture.jpg",
    title: "Brands & Culture",
    tagline: "Art Partnerships · Cultural Strategy · Advisory",
    href: "/brands-culture",
  },
  {
    image: "/images/card-events.jpg",
    title: "Events",
    tagline: "Exhibitions · Gatherings · Talks · Special Events",
    href: "/events",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        image="/images/home-hero.jpg"
        eyebrow="Curating the Extraordinary"
        cta={
          <Link
            href="/about"
            className="inline-block mt-8 bg-white text-ink font-semibold px-8 py-4 text-sm tracked uppercase hover:bg-gold hover:text-white transition-colors"
          >
            About
          </Link>
        }
      >
        Magnum Opus brings together art, culture and experience through
        curation, representation and creative production.
      </Hero>

      <Split image="/images/manifesto.jpg" imageSide="left" title="A Quiet Manifesto" bg="bg-paper">
        <p>
          Art is a form of relationship. The value of a work lies beyond what
          it represents; it is found in how it is created, the context in
          which it emerges, the people and ideas it encounters, and the
          meaning it acquires over time. This is where we begin in our
          approach to art.
        </p>
        <p>
          We see an artist&rsquo;s career as a long-term process of creation
          and representation. What matters to us is understanding their
          practice, placing their intellectual world within the right
          context, creating new encounters, and opening space for the future
          of their career. For this reason, representation is, for us, less
          a form of management than a form of partnership.
        </p>
        <p>
          We believe that the meaning of art is not formed solely within
          museums or galleries. A city can be an exhibition space. A table
          can be a space of encounter. A journey can become a cultural
          experience. A brand can reconsider its own cultural position
          through its relationship with art.
        </p>
      </Split>

      <CardGrid items={cards} />

      <ContactCTA />
    </>
  );
}
