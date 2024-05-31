import "./contactpage.scss";
import FormCard from "./FormCard";
import FaqSection from "../faq_section/FaqSection";
import DownloadSection from "../homepage/download_section/DownloadSection";
import Spacer from "../spacer/Spacer";

export default function ContactPage() {
  return (
    <>
      <div id="contact-page">
        <HeaderSection />
        <FaqSection />
        <Spacer />
        <DownloadSection />
        <Spacer />
        <FormCard />
        <Spacer />
      </div>
    </>
  );
}

function HeaderSection() {
  return (
    <>
      <div
        id="header-image-container"
        className="w-100 d-flex align-items-center justify-content-center position-relative"
      >
        <img src="src\assets\img\faq_header.jpg" className="w-100" />
        <div
          id="heading-container"
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <h1>Fragen?</h1>
          <p>Immer her damit!</p>
        </div>
      </div>
    </>
  );
}
