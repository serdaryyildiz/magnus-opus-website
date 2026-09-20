import ProjectDetail from "@/components/ProjectDetail";

export const metadata = { title: "Sculpture Journey | Magnum Opus Projects" };

export default function SculptureJourneyPage() {
  return (
    <>
      <ProjectDetail
        title="Sculpture Journey"
        image="/images/proj-sj-crate.jpg"
        tags={["Artists", "Experiences", "Brands & Culture", "Events"]}
      >
        <p>
          Sculpture Journey is an exhibition project developed by Magnum
          Opus, bringing together our approach to the relationship between
          art, place and experience.
        </p>
        <p>
          Bringing the sculptures of Ayla Turan and Kemal Tufan into dialogue
          with the landscape of Bodrum Golf Club, the project transforms the
          golf course into an open-air setting for contemporary sculpture.
        </p>
        <p>
          Its social impact component, developed in collaboration with Art
          for Goodness Association, further extends the scope of the
          exhibition by creating opportunities for the production of young
          artists.
        </p>
      </ProjectDetail>
      <section className="bg-paper">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-4 md:py-6">
          <img
            src="/images/sculpture-journey-all.png"
            alt="Sculpture Journey — exhibition gallery"
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
