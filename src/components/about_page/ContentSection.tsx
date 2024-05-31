import "./contentsection.scss";

interface ContentSectionProps {
  heading: string;
  content: string;
}

function ContentSection({ heading, content }: ContentSectionProps) {
  return (
    <div
      id="content-section"
      className="d-flex align-items-center justify-content-center w-100"
    >
      <div id="organisation">
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default ContentSection;
