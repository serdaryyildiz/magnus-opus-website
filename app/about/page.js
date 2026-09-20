import TopBand from "@/components/TopBand";
import PaperIntro from "@/components/PaperIntro";

export const metadata = { title: "About | Magnum Opus" };

export default function AboutPage() {
  return (
    <>
      <TopBand />
      <PaperIntro title="About">
        <p>
          Magnum Opus is a cultural and creative entity developing projects
          at the intersection of art, culture and diverse disciplines.
        </p>
        <p>
          Bringing together artists, institutions, brands, collectors and
          audiences, Magnum Opus develops original projects across art
          production, cultural heritage, contemporary art, design and
          experience. At the core of its practice are research, curation,
          strategy and production. Each project is approached within its own
          historical, cultural and aesthetic context, embracing an
          integrated process that extends from the development of an idea to
          representation and communication, and from spatial and experience
          design to execution.
        </p>
        <p>
          Under Artist, Magnum Opus provides artist representation, career
          and project advisory, exhibition and project development,
          institutional relations, collaborations with museums and cultural
          institutions, and initiatives aimed at strengthening artists&rsquo;
          national and international visibility.
        </p>
        <p>
          Under Experiences, Magnum Opus designs bespoke journeys and
          private experiences that bring together art, history, architecture,
          gastronomy and local culture, offering an in-depth engagement with
          a particular geography, art event or cultural context.
        </p>
        <p>
          Through Brands &amp; Culture, Magnum Opus establishes meaningful
          relationships between brands and the art world, developing special
          exhibitions, art projects, cultural programmes, art advisory
          services, corporate art experiences and brand&ndash;art
          collaborations.
        </p>
        <p>
          Under Events, Magnum Opus conceives and produces exhibitions, art
          gatherings, talks, private events and cultural programmes, as well
          as bespoke events for institutions and brands.
        </p>
        <p>
          Across all its work, Magnum Opus follows a common approach: to
          investigate context, establish meaningful connections, and give
          each project its own distinctive narrative.
        </p>
      </PaperIntro>
    </>
  );
}
