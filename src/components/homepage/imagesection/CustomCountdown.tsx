import "./herosection.scss";
import Countdown from "react-countdown";

interface CustomRendererProps {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  completed: boolean;
}

const customRenderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CustomRendererProps) => {
  if (completed) {
    // Render a completed state
    return <h1>Es ist endlich so weit!</h1>;
  } else {
    // Render a countdown
    return (
      <>
        <div className="countdown-flex container-fluid w-100 d-flex align-items-center justify-content-center text-white">
          <div className="digit-container d-flex flex-column align-items-center justify-content-center">
            <h1>{days}</h1>
            <p>Tage</p>
          </div>
          <div className="digit-container d-flex flex-column align-items-center justify-content-center">
            <h1>{hours}</h1>
            <p>Stunden</p>
          </div>
          <div className="digit-container d-flex flex-column align-items-center justify-content-center">
            <h1>{minutes}</h1>
            <p>Minuten</p>
          </div>
          <div className="digit-container d-flex flex-column align-items-center justify-content-center">
            <h1>{seconds}</h1>
            <p>Sekunden</p>
          </div>
        </div>
      </>
    );
  }
};

function CustomCountdown() {
  return (
    <div id="custom-countdown" className="w-100">
      <Countdown
        //hier einfach Jahr, Monat (Januar:0, Februar:1 etc.) und Tag ändern. Uhrzeit auf 10 Uhr
        date={new Date(2024, 6, 27, 10, 0, 0, 0)}
        renderer={customRenderer}
      />
    </div>
  );
}

export default CustomCountdown;
