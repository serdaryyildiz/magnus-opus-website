import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";

export const metadata = { title: "Events | Magnum Opus" };

const cards = [
  {
    image: "/images/ev-art-events.jpg",
    title: "Art Events",
    tagline: "Bringing people together through art.",
    description:
      "We create exhibitions, openings, artist gatherings and art-led events.",
  },
  {
    image: "/images/ev-talks.jpg",
    title: "Talks & Cultural Programmes",
    tagline: "Ideas worth gathering around.",
    description:
      "We develop talks, panels and cultural programmes with artists, curators and cultural practitioners.",
  },
  {
    image: "/images/ev-private.jpg",
    title: "Private Events",
    tagline: "Thoughtfully conceived, made for a few.",
    description:
      "We create intimate gatherings shaped around art, culture and meaningful encounters.",
  },
  {
    image: "/images/ev-corporate.jpg",
    title: "Brand & Corporate Events",
    tagline: "Events with cultural substance.",
    description:
      "We develop bespoke events that bring together brands, their communities and the cultural world.",
  },
  {
    image: "/images/ev-special-projects.jpg",
    title: "Special Projects",
    tagline: "From concept to experience.",
    description:
      "We develop distinctive event concepts that bring together place, art, people and narrative.",
  },
];

export default function EventsPage() {
  return (
    <>
      <Hero
        image="/images/hero-events.jpg"
        title="Events"
        subtitle="Cultural Events & Bespoke Experiences"
        align="right"
      >
        Magnum Opus designs and produces events that bring together art,
        culture and diverse disciplines. From exhibition openings and artist
        gatherings to talks and private events, we approach each project
        according to its own context and audience.
      </Hero>
      <CardGrid items={cards} />
    </>
  );
}
