import Spacer from "../spacer/Spacer";
import ContentSection from "./ContentSection";
import "./about.scss";

function AboutPage() {
  return (
    <section id="about-page" className="bg-light py-5 w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="/src/assets/img/Team.jpg"
              alt="Team"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 mb-3">Wer ist "ULF" überhaupt?</h1>
            <h2 className="h4 mb-3">Na das sind wir!</h2>
            <p className="lead">
              Wir sind ein junges und motiviertes Team, das mit viel Herzblut
              und Engagement unvergessliche Zeltlager-Erlebnisse für Kinder und
              Eltern schafft. Unsere Leidenschaft für Abenteuer und Natur
              spiegelt sich in jedem Aspekt unseres Programms wider. Bei uns
              stehen Spaß, Sicherheit und Gemeinschaft an erster Stelle.
              Gemeinsam entdecken wir spannende Outdoor-Aktivitäten, lernen neue
              Freunde kennen und wachsen über uns hinaus. Unser Ziel ist es,
              jedem Kind die Möglichkeit zu geben, unvergessliche Erinnerungen
              zu sammeln und wertvolle Erfahrungen in der Natur zu machen. Kommt
              vorbei und werdet Teil unserer Zeltlager-Familie!
            </p>
          </div>
        </div>
      </div>
      <Spacer />
      <ContentSection
        heading="Wer organisiert das Zeltlager?"
        content="Das Zeltlager wird von einer engagierten Gruppe von Freiwilligen und
          erfahrenen Betreuern organisiert, die oft aus verschiedenen sozialen
          und pädagogischen Bereichen stammen. Diese Organisatoren, die
          möglicherweise Teil einer gemeinnützigen Organisation oder eines
          Vereins sind, planen und koordinieren das gesamte Lager. Sie sorgen
          für die Sicherheit der Teilnehmer, gestalten das Programm und kümmern
          sich um die logistischen Details wie Verpflegung und Unterkunft. Die
          Organisatoren sind meist auch in der Jugendarbeit erfahren und
          verfügen über das notwendige Know-how, um den Teilnehmern eine
          unvergessliche und lehrreiche Zeit zu bieten. Durch ihre Leidenschaft
          und ihr Engagement wird das Zeltlager zu einem besonderen Erlebnis für
          alle Beteiligten."
      />
    </section>
  );
}

export default AboutPage;
