import Spacer from "../spacer/Spacer";
import DownloadSection from "./download_section/DownloadSection";
import EnrolSection from "./enrol_section/EnrolSection";
import ImageDivider from "./image_divider/ImageDivider";
import HeroImageSection from "./imagesection/HeroImageSection";
import InfoSection from "./info_section/InfoSection";
import MailListSection from "./mail_list_section/MailListSection";
import NewsSection from "./news_section/NewsSection";
import QuestionSection from "./question_section/QuestionSection";

function HomePage() {
  /*
  Allgemein: Bänder, auch komplett IMageband
  */
  return (
    <>
      <HeroImageSection />
      <InfoSection />
      <Spacer />
      <ImageDivider />
      <Spacer />
      <NewsSection />
      <Spacer />
      <DownloadSection />
      {/*<HeroCarousel />*/}
      <Spacer />
      {/*<SponsorSection />
      <Spacer />*/}
      <QuestionSection />
      <Spacer />
      <EnrolSection />
      <Spacer />
      <MailListSection />
    </>
  );
}

export default HomePage;
