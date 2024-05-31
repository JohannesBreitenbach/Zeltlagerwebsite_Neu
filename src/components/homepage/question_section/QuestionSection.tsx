import PAGE_KEYS from "../../../constants";
import "./questionsection.scss";
import { Link } from "react-router-dom";

function QuestionSection() {
  return (
    <div
      id="question-section"
      className="container-fluid d-flex align-items-center justify-content-center p-3 pe-sm-0 py-md-0"
    >
      <div className="container pe-sm-0">
        <div className="row">
          <div
            id="contentContainer"
            className="col-12 col-md-6 d-flex align-items-start justify-content-center flex-column"
          >
            <h1>Noch Fragen?</h1>
            <h3>Wir lassen Sie nicht im Regen stehen</h3>
            <p>
              Wahrscheinlich finden Sie die nötigen Infos in unserem FAQ. Falls
              nicht, melden Sie sich gerne mit dem Kontaktformular bei uns, oder
              schreiben Sie uns eine E-Mail.
            </p>
            <div className="d-flex align-items-center justify-content-end w-100">
              <Link to={"/" + PAGE_KEYS.CONTACT}>
                <button className="btn btn-primary">Zu den FAQs ➔</button>
              </Link>
            </div>
          </div>
          <div
            id="imageContainer"
            className="d-none d-md-block col-12 col-md-6 mb-3 mb-md-0 pe-sm-0"
          >
            <img src="src\assets\img\Zeltlager2023-110.jpg" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionSection;
