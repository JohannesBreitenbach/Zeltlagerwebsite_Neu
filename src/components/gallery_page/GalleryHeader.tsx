import YEAR_KEYS from "./galleryConstants";

interface GalleryHeaderProps {
  activeYear: String;
  setActiveYear: (activePage: string) => void;
}

function GalleryHeader({ activeYear, setActiveYear }: GalleryHeaderProps) {
  return (
    <>
      <div id="galleryHeaderComponent" className="">
        <HeaderImage />
        <PillSelection activeYear={activeYear} setActiveYear={setActiveYear} />
      </div>
    </>
  );
}

interface PillSelectionProps {
  activeYear: String;
  setActiveYear: (activePage: string) => void;
}

function HeaderImage() {
  return (
    <div
      id="header-image-container"
      className="w-100 d-flex align-items-center justify-content-center position-relative"
    >
      <img src="src/assets/img/Wagen.jpg" className="w-100 h-100" />
      <div
        id="heading-container"
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <h1>Galerie</h1>
        <p>Denn Bilder sagen mehr als 1000 Worte</p>
      </div>
    </div>
  );
}

function PillSelection({ activeYear, setActiveYear }: PillSelectionProps) {
  return (
    <span
      id="pill-container"
      className="d-flex justify-content-center align-items-center w-100 gap-3 mt-3 mb-3"
    >
      <button
        type="button"
        className={`btn btn-outline-primary rounded-pill ${
          activeYear === YEAR_KEYS[2023] ? "active" : ""
        }`}
        onClick={() => setActiveYear(YEAR_KEYS[2023])}
      >
        2023
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary rounded-pill ${
          activeYear === YEAR_KEYS[2022] ? "active" : ""
        }`}
        onClick={() => setActiveYear(YEAR_KEYS[2022])}
      >
        2022
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary rounded-pill ${
          activeYear === YEAR_KEYS[2021] ? "active" : ""
        }`}
        onClick={() => setActiveYear(YEAR_KEYS[2021])}
      >
        2021
      </button>
    </span>
  );
}

export default GalleryHeader;
