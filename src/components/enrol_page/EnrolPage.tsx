import { useState, ChangeEvent, useEffect } from "react";
import "./enrolpage.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { de } from "date-fns/locale/de";
import DownloadSection from "../homepage/download_section/DownloadSection";
registerLocale("de", de);

interface EnrolData {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  birthday: Date | null;
  medication: string;
  canSwim: boolean;
  isVegetarian: boolean;
  isVacc: boolean;
  canBivouac: boolean;
  canPhoto: boolean;
  wantsTshirt: boolean;
  tshirtSize: string;
  additionalInfo: string;
  payCheck: boolean;
}

function EnrolPage() {
  const [currentData, setCurrentData] = useState<EnrolData>({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    birthday: null,
    medication: "",
    canSwim: true,
    isVegetarian: false,
    isVacc: true,
    canBivouac: true,
    canPhoto: true,
    wantsTshirt: true,
    tshirtSize: "",
    additionalInfo: "",
    payCheck: false,
  });

  return (
    <div id="enrol-page" className="">
      <div
        id="header-image-container"
        className="w-100 d-flex align-items-center justify-content-center position-relative"
      >
        <img src="src\assets\img\Header_Enrol.png" className="w-100 h-100" />
        <div
          id="heading-container"
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <h1>Anmeldung</h1>
          <p>Eine Woche Weltreise - wer kann da schon nein sagen?</p>
        </div>
      </div>
      <div
        id="title-container"
        className="row py-3 d-flex align-items-center justify-content-center"
      >
        <h2 className="col-12">Anmeldeformular</h2>
        <p className="col-12">Einfach online ausfüllen und abschicken</p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <form id="registration-form" className="p-4 mb-5">
          <div className="row mb-3">
            <div className="col-12 col-md-6">
              <label htmlFor="firstName">Vorname</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder=""
                value={currentData.firstName}
                onChange={(e) =>
                  setCurrentData((prevData) => ({
                    ...prevData,
                    firstName: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="lastName">Nachname</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder=""
                value={currentData.lastName}
                onChange={(e) =>
                  setCurrentData((prevData) => ({
                    ...prevData,
                    lastName: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-3">
              <label htmlFor="birthday">Geburtsdatum</label>
              <DatePicker
                id="birthday"
                name="birthday"
                selected={currentData.birthday}
                className="form-control"
                onChange={(date) =>
                  setCurrentData((prevData) => ({
                    ...prevData,
                    birthday: date,
                  }))
                }
                locale="de"
                dateFormat={"dd.MM.yyyy"}
                required
              />
            </div>
            <div className="col-12 col-md-9">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="beispiel@email.com"
                value={currentData.email}
                onChange={(e) =>
                  setCurrentData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-8 mb-3 mb-md-0">
              <label htmlFor="address">Adresse</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder=""
                value={currentData.address}
                onChange={(e) =>
                  setCurrentData((prevData) => ({
                    ...prevData,
                    address: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="col-12 col-md-4">
              <label htmlFor="phone">Telefonnummer</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder=""
                value={currentData.phone}
                onChange={(e) =>
                  setCurrentData((prevData) => ({
                    ...prevData,
                    phone: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
              <label htmlFor="canSwim" className="me-3 mb-2 mb-md-0">
                Mein Kind kann schwimmen.
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    id="canSwimYes"
                    className="form-check-input"
                    name="canSwim"
                    type="radio"
                    checked={currentData.canSwim === true}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        canSwim: true,
                      }))
                    }
                  />
                  <label htmlFor="canSwimYes" className="form-check-label">
                    Ja
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    id="canSwimNo"
                    className="form-check-input"
                    name="canSwim"
                    type="radio"
                    checked={currentData.canSwim === false}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        canSwim: false,
                      }))
                    }
                  />
                  <label htmlFor="canSwimNo" className="form-check-label">
                    Nein
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
              <label htmlFor="isVegetarian" className="me-3 mb-2 mb-md-0">
                Mein Kind isst vegetarisch.
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    id="isVegetarianYes"
                    className="form-check-input"
                    name="isVegetarian"
                    type="radio"
                    checked={currentData.isVegetarian === true}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        isVegetarian: true,
                      }))
                    }
                  />
                  <label htmlFor="isVegetarianYes" className="form-check-label">
                    Ja
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    id="isVegetarianNo"
                    className="form-check-input"
                    name="isVegetarian"
                    type="radio"
                    checked={currentData.isVegetarian === false}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        isVegetarian: false,
                      }))
                    }
                  />
                  <label htmlFor="isVegetarianNo" className="form-check-label">
                    Nein
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
              <label htmlFor="isVacc" className="me-3 mb-2 mb-md-0">
                Mein Kind ist gegen Zecken geimpft.
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    id="isVaccYes"
                    className="form-check-input"
                    name="isVacc"
                    type="radio"
                    checked={currentData.isVacc === true}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        isVacc: true,
                      }))
                    }
                  />
                  <label htmlFor="isVaccYes" className="form-check-label">
                    Ja
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    id="isVaccNo"
                    className="form-check-input"
                    name="isVacc"
                    type="radio"
                    checked={currentData.isVacc === false}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        isVacc: false,
                      }))
                    }
                  />
                  <label htmlFor="isVaccNo" className="form-check-label">
                    Nein
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
              <label htmlFor="canBivouac" className="me-3 mb-2 mb-md-0">
                Mein Kind darf am Biwak (Übernachtung im Freien) teilnehmen.
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    id="canBivouacYes"
                    className="form-check-input"
                    name="canBivouac"
                    type="radio"
                    checked={currentData.canBivouac === true}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        canBivouac: true,
                      }))
                    }
                  />
                  <label htmlFor="canBivouacYes" className="form-check-label">
                    Ja
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    id="canBivouacNo"
                    className="form-check-input"
                    name="canBivouac"
                    type="radio"
                    checked={currentData.canBivouac === false}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        canBivouac: false,
                      }))
                    }
                  />
                  <label htmlFor="canBivouacNo" className="form-check-label">
                    Nein
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
              <label
                id="canPhotoLabel"
                htmlFor="canPhoto"
                className="me-3 mb-2 mb-md-0"
              >
                Ich bin damit einverstanden, dass die Zeltlagerfotos, auf denen
                mein Kind zu sehen ist, veröffentlicht werden dürfen.*
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    id="canPhotoYes"
                    className="form-check-input"
                    name="canPhoto"
                    type="radio"
                    checked={currentData.canPhoto === true}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        canPhoto: true,
                      }))
                    }
                  />
                  <label htmlFor="canPhotoYes" className="form-check-label">
                    Ja
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    id="canPhotoNo"
                    className="form-check-input"
                    name="canPhoto"
                    type="radio"
                    checked={currentData.canPhoto === false}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        canPhoto: false,
                      }))
                    }
                  />
                  <label htmlFor="canPhotoNo" className="form-check-label">
                    Nein
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
              <label htmlFor="tshirt" className="me-3 mb-2 mb-md-0">
                Ich möchte ein Zeltlager T-Shirt für mein Kind bestellen.
              </label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    id="tshirtYes"
                    className="form-check-input"
                    name="tshirt"
                    type="radio"
                    checked={currentData.wantsTshirt === true}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        wantsTshirt: true,
                      }))
                    }
                  />
                  <label htmlFor="tshirtYes" className="form-check-label">
                    Ja
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    id="tshirtNo"
                    className="form-check-input"
                    name="tshirt"
                    type="radio"
                    checked={currentData.wantsTshirt === false}
                    onChange={() =>
                      setCurrentData((prevData) => ({
                        ...prevData,
                        wantsTshirt: false,
                      }))
                    }
                  />
                  <label htmlFor="tshirtNo" className="form-check-label">
                    Nein
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3" hidden={!currentData.wantsTshirt}>
            <div className="col-6 col-lg-3">
              <label htmlFor="tshirtSize">T-Shirt Größe</label>
              <input
                type="text"
                className="form-control"
                id="tshirtSize"
                name="tshirtSize"
                placeholder=""
                value={currentData.tshirtSize}
                onChange={(e) =>
                  setCurrentData((prevData) => ({
                    ...prevData,
                    tshirtSize: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="additionalInfo">
                Sonstiges, auf das wir achten sollten:
              </label>
              <textarea
                className="form-control"
                id="additionalInfo"
                name="additionalInfo"
                placeholder=""
                value={currentData.additionalInfo}
                onChange={(e) =>
                  setCurrentData((prevData) => ({
                    ...prevData,
                    additionalInfo: e.target.value,
                  }))
                }
              ></textarea>
            </div>
          </div>

          <p id="hint">
            *(Bitte beachten Sie, dass wenn Sie gegen die Veröffentlichung
            (Pfarrei-Website, Abschlussfotos, Ausstellung in Jugendräumen) der
            im Rahmen des Zeltlagers gemachten Bilder sind, wir leider keine
            Erinnerungsfotos zur Verfügung stellen können)
          </p>
          <hr />
          <h5 className="mb-3">
            Hiermit melde ich mein Kind zum diesjährigen Zeltlager der Pfarrei
            „Unsere Liebe Frau“ & Pfarreiengemeinschaft St. Martin in Höhefeld
            an.
          </h5>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="payCheck"
              checked={currentData.payCheck}
              onChange={() =>
                setCurrentData((prevData) => ({
                  ...prevData,
                  payCheck: !prevData.payCheck,
                }))
              }
            />
            <label className="form-check-label" htmlFor="payCheck">
              Mir ist bewusst, dass die Anmeldung erst mit eingegangener Zahlung
              gültig ist.
            </label>
          </div>

          <div className="container-fluid d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => console.log(currentData)}
              disabled={!currentData.payCheck}
            >
              Anmeldung abschicken
            </button>
          </div>
        </form>
      </div>
      <DownloadSection />
    </div>
  );
}

export default EnrolPage;
