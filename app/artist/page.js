import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";

export const metadata = { title: "Artist | Magnum Opus" };

const cards = [
  {
    image: "/images/card-artist-representation.jpg",
    title: "Artist Representation",
    tagline: "The right context. The right direction.",
    description:
      "We build long-term strategies around the artist’s practice and career.",
  },
  {
    image: "/images/artist-sculpture.jpg",
    title: "Career & Art Advisory",
    tagline: "A career with direction.",
    description:
      "We develop strategies shaped around the artist’s practice and ambitions.",
  },
  {
    image: "/images/artist-piano.jpg",
    title: "Exhibition & Project Development",
    tagline: "From idea to exhibition.",
    description: "We develop and produce exhibitions and artistic projects.",
  },
  {
    image: "/images/artist-corridor.jpg",
    title: "Institutional & Museum Relations",
    tagline: "Creating meaningful connections.",
    description:
      "We connect artists with museums, institutions, curators and the wider art world.",
  },
  {
    image: "/images/artist-collab.jpg",
    title: "Brand & Art Collaborations",
    tagline: "Where art meets culture.",
    description:
      "We create meaningful collaborations between artists and brands.",
  },
];

export default function ArtistPage() {
  return (
    <>
      <Hero
        image="/images/hero-artist.jpg"
        title="Artists"
        subtitle="Artist Representation & Advisory"
        align="right"
      >
        Magnum Opus approaches artists&rsquo; practices and careers from a
        long-term perspective. From understanding an artist&rsquo;s current
        position to developing future projects, exhibitions, institutional
        relationships and international visibility, we provide a
        comprehensive model of representation and advisory.
        <br />
        <br />
        We consider each artist&rsquo;s practice within its own context and
        develop a tailored strategy based on the individual needs and
        ambitions of their career.
      </Hero>
      <CardGrid items={cards} />
    </>
  );
}
