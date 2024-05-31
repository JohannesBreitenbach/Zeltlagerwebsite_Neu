import { Link } from "react-router-dom";
import "./enrolsection.scss";
import PAGE_KEYS from "../../../constants";

function EnrolSection() {
  return (
    <div id="enrol-section" className="w-100 d-flex  justify-content-center">
      <div
        id="enrol-container"
        className="d-flex align-items-center justify-content-between py-5 px-2 px-md-0"
      >
        <h2>Jetzt anmelden!</h2>
        <Link to={"/" + PAGE_KEYS.ENROL}>
          <button className="btn btn-primary">Zur Anmeldung ➔</button>
        </Link>
      </div>
    </div>
  );
}

export default EnrolSection;
