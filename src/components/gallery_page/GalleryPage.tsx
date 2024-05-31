import { useState, useEffect } from "react";
import GalleryGrid from "./GalleryGrid";
import GalleryHeader from "./GalleryHeader";
import YEAR_KEYS from "./galleryConstants";

const images = {
  2021: [
    { src: "src/assets/img/Lagerfeuer.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Lagerfeuer.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Lagerfeuer.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Lagerfeuer.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Lagerfeuer.jpeg", alt: "Kinder beim Essen" },
  ],
  2022: [
    { src: "src/assets/img/Vogelperspektive.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Vogelperspektive.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Vogelperspektive.jpeg", alt: "Kinder beim Essen" },
  ],
  2023: [
    { src: "src/assets/img/Quidditch.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Quidditch.jpeg", alt: "Kinder beim Essen" },
    { src: "src/assets/img/Quidditch.jpeg", alt: "Kinder beim Essen" },
  ],
};

function GalleryPage() {
  const [activeYear, setActiveYear] = useState(YEAR_KEYS[2023]);

  return (
    <>
      <GalleryHeader activeYear={activeYear} setActiveYear={setActiveYear} />
      <GalleryGrid activeYear={activeYear} images={images} />
    </>
  );
}

export default GalleryPage;
