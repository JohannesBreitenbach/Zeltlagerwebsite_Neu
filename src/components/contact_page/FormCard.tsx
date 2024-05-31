function FormCard() {
  return (
    <div
      id="contact-form-card-container"
      className=" w-100 d-flex align-items-center justify-content-center flex-column"
    >
      <div
        id="title-container"
        className="row py-3 d-flex align-items-center justify-content-center"
      >
        <h2>Noch immer Unklarheiten?</h2>
        <p>
          Dann schreiben Sie uns gerne. Hier oder unter unter{" "}
          <a href="mailto:info.ulferzeltlager@web.de">
            info.ulferzeltlager@web.de
          </a>
        </p>
      </div>
      <div id="contact-form-card" className="card w-100">
        <div className="card-body">
          <h1>Kontakt</h1>

          <form>
            <div className="row needs-validation mb-3">
              <div className="col-12 col-lg-6">
                <label htmlFor="firstName">Vorname</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required
                />
              </div>

              <div className="col-12 col-lg-6">
                <label htmlFor="lastName">Nachname</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="row needs-validation  mb-3">
              <div className="col-12">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@beispiel.com"
                  required
                />
              </div>
            </div>

            <div className="row needs-validation mb-3">
              <div className="col-12">
                <label htmlFor="phone">Telefonnummer (optional)</label>
                <input type="text" className="form-control" id="phone" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Worum gehts?
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={4}
                required
              ></textarea>
            </div>

            <p className="disclaimer">
              Alle Daten werden selbstverständlich nur dafür genutzt, Ihrer
              Anfrage nachzukommen.
            </p>

            <hr />
            <h3>Add reCaptcha!</h3>
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary col-5 col-lg-2"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCard;
