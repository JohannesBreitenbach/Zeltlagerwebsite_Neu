import { useState } from "react";
import "./faqsection.scss";

function FaqSection() {
  const [faqs] = useState([
    {
      question: "Für wen ist das Zeltlager?",
      answer:
        "Das Zeltlager richtet sich an Kinder zwischen 9 und 14 Jahren, die gerne eine Woche mit Freunden in der Natur verbringen und dabei viel Spaß haben möchten.",
      open: false,
    },
    {
      question: "Wie kann ich mich anmelden?",
      //TODO: Falls Anmeldung online möglich, hier ändern
      answer:
        "Einfach den Anmeldungsbogen runterladen, ausfüllen und per Email an info.ulferzeltlager@web.de schicken.",
      open: false,
    },
    {
      question: "Bis wann muss ich mich anmelden?",
      answer:
        "Die Anmeldefrist für das Zeltlager 2024 ist der 24.06.2024, es kann jedoch sein dass bis dahin schon alle Plätze ausgebucht sind. Deshalb gilt, je früher desto besser!",
      open: false,
    },
    {
      question: "Was kostet das Zeltlager?",
      answer:
        "Für das erste Kind einer Familie beträgt die Teilnahmegebühr 95€, für jedes weitere Kind sind es 90€.",
      open: false,
    },
    {
      question: "Was ist in der Teilnahmegebühr enthalten?",
      answer:
        "Hin- und Rückfahrt von den Stadtwerken Aschaffenburg zum Zeltpatz, Frühstück, Mittag- und Abendessen, Tee und Leitungswasser und jsjsjsjsjjshsjsjdkwksdk.",
      open: false,
    },
    {
      question: "Wie bezahle ich die Teilnahmegebühr?",
      answer:
        "Einfach auf folgendes Konto Überweisen: \n \n IBAN: DE63 7955 0000 0008 0568 63 \n BIC: BYLADEM1ASA \n (Kontoinhaber: Kath. Kirchenstiftung ULF)",
      open: false,
    },
    {
      question: "Brauche ich ein eigenes Zelt?",
      answer: "Nein, die Kinder schlafen zusammen in Gruppenzelten.",
      open: false,
    },
  ]);

  return (
    <div
      id="faq-section"
      className="w-100 d-flex justify-content-center align-items-center flex-column"
    >
      <div id="title-container" className="row py-3">
        <h2>FAQ - Häufig gestellte Fragen:</h2>
        <p>Vielleicht finden Sie ihre Frage hier bereits.</p>
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div id="faq-accordion-container" className="faqs accordion w-100">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + index}
                  aria-expanded="false"
                  aria-controls={"collapse" + index}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={"collapse" + index}
                className="accordion-collapse collapse"
                data-bs-parent="#faq-accordion-container"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
