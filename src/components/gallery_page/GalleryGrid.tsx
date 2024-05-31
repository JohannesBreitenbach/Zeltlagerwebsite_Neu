import { useEffect } from "react";
import "./gallery.scss";
import Lightbox from "bs5-lightbox";

interface GalleryGridProps {
  activeYear: string;
  images: { [year: string]: { src: string; alt: string }[] };
}

function GalleryGrid({ activeYear, images }: GalleryGridProps) {
  const currImages = images[activeYear] || [];

  const lightboxOptions = {
    keyboard: true,
    size: "xl",
  };

  //run only on first render
  useEffect(() => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const lightbox = new Lightbox(
        e.currentTarget as HTMLElement,
        lightboxOptions
      );
      lightbox.show();
    };

    const elements = document.querySelectorAll(".my-lightbox-toggle");

    elements.forEach((el) => el.addEventListener("click", handleClick));

    // Cleanup event listeners on component unmount
    return () => {
      elements.forEach((el) => el.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <>
      <div id="gallery-grid">
        <div className="d-flex align-items-center justify-content-around flex-wrap">
          {currImages.map((image) => {
            return getImageCard(image.src, image.alt);
          })}
        </div>
      </div>
    </>
  );
}

function getImageCard(src: string, alt: string) {
  return (
    <a
      href={src}
      data-toggle="lightbox"
      className="col-sm-4 my-lightbox-toggle grid-img-container m-2"
    >
      <img src={src} alt={alt} className="img-fluid" />
    </a>
  );
}

export default GalleryGrid;
