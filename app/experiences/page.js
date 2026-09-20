import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";

export const metadata = { title: "Experiences | Magnum Opus" };

const cards = [
  {
    image: "/images/exp-art-journeys.jpg",
    title: "Art Journeys",
    tagline: "Art, beyond the exhibition.",
    description:
      "We create journeys around biennials, exhibitions, artists and art destinations.",
  },
  {
    image: "/images/exp-cultural-journeys.jpg",
    title: "Cultural Journeys",
    tagline: "Places worth discovering.",
    description:
      "We design immersive journeys shaped by history, heritage, architecture and local culture.",
  },
  {
    image: "/images/exp-private.jpg",
    title: "Private Experiences",
    tagline: "Made for a few.",
    description:
      "We curate bespoke experiences around individual interests, from private visits to unique cultural encounters.",
  },
  {
    image: "/images/exp-artist-curator.jpg",
    title: "Artist & Curator Experiences",
    tagline: "Meet the minds behind the work.",
    description:
      "We create opportunities for direct encounters with artists, curators and cultural practitioners.",
  },
  {
    image: "/images/exp-corporate.jpg",
    title: "Corporate & Collector Experiences",
    tagline: "Culture, curated differently.",
    description:
      "We design exclusive art and cultural experiences for brands, institutions, collectors and private groups.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <Hero
        image="/images/experience-head.png"
        title="Experiences"
        subtitle="Curated Journeys & Cultural Experiences"
        align="right"
      >
        Magnum Opus creates thoughtfully curated journeys that bring together
        art, culture, history, gastronomy and place. Each experience is
        designed around a distinct context, with attention to the people,
        spaces and encounters that make it meaningful.
      </Hero>
      <CardGrid items={cards} />
    </>
  );
}
