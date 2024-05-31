import PAGE_KEYS from "../../../constants";
import "./imagedivider.scss";
import { Link } from "react-router-dom";

function ImageDivider() {
  // Carousel?
  return (
    <div
      id="image-divider"
      className="d-flex flex-column justify-content-center align-items-center pt-3"
    >
      <div id="images-container" className="row w-100 mb-3">
        <div id="image-container" className="col-12 col-sm-6 col-lg-4">
          <img
            className="w-100 h-100 object-fit-cover"
            src="src/assets/img/Quidditch.jpeg"
            alt="Quidditch"
          />
        </div>
        <div
          id="image-container"
          className="d-none d-sm-block col-sm-6 col-lg-4"
        >
          <img
            className="w-100 h-100 object-fit-cover"
            src="src/assets/img/Gruppenbild_cropped.jpg"
            alt="Gruppenbild"
          />
        </div>
        <div id="image-container" className="d-none d-lg-block col-4">
          <img
            className="w-100 h-100 object-fit-cover"
            src="src/assets/img/Quellenspiel.jpeg"
            alt="Quellenspiel"
          />
        </div>
      </div>
      <div className="w-100">
        <p className="text-end me-2">
          <Link to={"/" + PAGE_KEYS.GALLERY}>
            <button className="btn btn-primary">Mehr Bilder ansehen ➔</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ImageDivider;
