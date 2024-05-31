import PAGE_KEYS from "../../../constants";
import "./infosection.scss";
import { Link } from "react-router-dom";

function InfoSection() {
  return (
    <>
      <div
        id="info-section"
        className="container-fluid d-flex align-items-center justify-content-center"
      >
        <div className="container p-3">
          <div className="row">
            <div id="imageContainer" className="col-12 col-md-6">
              <img src="src\assets\img\Zeltlager_Logo.png" className="w-100" />
            </div>
            <div
              id="contentContainer"
              className="col-12 col-md-6 d-flex align-items-start justify-content-center flex-column"
            >
              <h1>Wilkommen beim ULFer Zeltlager!</h1>
              <p>
                Unser jährliches Zeltlager ist das Highlight des Jahres!
                Organisiert von einem dynamischen und engagierten jungen Team,
                bieten wir Kindern und Jugendlichen eine Woche voller Abenteuer,
                Spaß und Gemeinschaft in der Natur. Unser Team besteht aus
                motivierten jungen Erwachsenen, die sich leidenschaftlich für
                die Arbeit mit Kindern und Jugendlichen einsetzen.
              </p>
              <div className="d-flex align-items-center justify-content-end w-100">
                <Link to={"/" + PAGE_KEYS.ABOUT}>
                  <button className="btn btn-primary">Mehr über uns ➔</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
