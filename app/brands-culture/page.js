import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";

export const metadata = { title: "Brands & Culture | Magnum Opus" };

const cards = [
  {
    image: "/images/bc-collaboration.jpg",
    title: "Brand & Art collaborations",
    tagline: "New encounters between brands and artists.",
    description:
      "We develop original collaborations with artists and artistic practices that align with a brand’s values.",
  },
  {
    image: "/images/bc-corporate-projects.jpg",
    title: "Corporate Art Projects",
    tagline: "Making space for art.",
    description:
      "We develop art projects for offices, hotels, residential spaces and corporate environments.",
  },
  {
    image: "/images/bc-exhibitions.jpg",
    title: "Exhibitions & Cultural Programmes",
    tagline: "Cultural programmes for brands.",
    description:
      "We conceive and produce exhibitions, art gatherings, talks and cultural programmes.",
  },
  {
    image: "/images/bc-advisory.jpg",
    title: "Art Advisory",
    tagline: "Shaping a relationship with art.",
    description:
      "From art acquisition to collection development, we approach an institution’s relationship with art from a long-term perspective.",
  },
  {
    image: "/images/bc-culture-experiences.jpg",
    title: "Art & Culture Experiences",
    tagline: "Culture, curated differently.",
    description:
      "We design exclusive art and cultural experiences for brands, institutions, collectors and private groups.",
  },
];

export default function BrandsCulturePage() {
  return (
    <>
      <Hero
        image="/images/hero-brands-culture.jpg"
        title="Brands & Culture"
        subtitle="Art, Culture & Brand Relations"
        align="right"
        textAlign="left"
      >
        We believe that brands can be more than supporters of culture; they
        can become active participants in its creation and circulation.
        Magnum Opus helps brands move their relationship with art beyond
        visibility, developing meaningful projects that align with their
        values and cultural positioning.
      </Hero>
      <CardGrid items={cards} />
    </>
  );
}
