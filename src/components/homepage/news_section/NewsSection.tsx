import PAGE_KEYS from "../../../constants";
import "./newssection.scss";
import { Link } from "react-router-dom";

function NewsSection() {
  return (
    <>
      <div
        id="news-section"
        className="container-fluid d-flex align-items-center justify-content-center p-3 ps-md-0 py-md-0"
      >
        <div className="container">
          <div className="row">
            <div
              id="imageContainer"
              className="col-12 col-md-6 mb-3 mb-md-0 ps-md-0"
            >
              <img
                src="/src/assets/img/posters/Zeltlagerplakat2024-1.png"
                className="w-100"
              />
            </div>
            <div
              id="contentContainer"
              className="col-12 col-md-6 d-flex align-items-start justify-content-center flex-column"
            >
              <h1>In 7 Tagen um die Welt!</h1>
              <p>
                Begib dich mit uns auf eine aufregende Entdeckungstour rund um
                die Welt! In diesem Jahr steht unser Zeltlager ganz im Zeichen
                der Vielfalt und Abenteuer. Freu dich auf spannende
                Geländespiele, kreative Workshops und inspirierende
                Abendprogramme, die verschiedene Kulturen und Länder erlebbar
                machen. Pack deinen Rucksack und sei dabei – das Abenteuer
                deines Lebens wartet auf dich!
              </p>
              <p id="important-dates" className="fw-bold">
                Anmeldeschluss: 24.06.2024
              </p>
              <div className="d-flex align-items-center justify-content-end w-100">
                <Link to={"/" + PAGE_KEYS.ENROL}>
                  <button className="btn btn-primary">Jetzt anmelden ➔</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsSection;
