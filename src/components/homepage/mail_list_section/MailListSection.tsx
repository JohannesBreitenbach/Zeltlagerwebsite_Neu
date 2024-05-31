import "./maillistsection.scss";

function MailListSection() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailInput = (event.target as HTMLFormElement).elements.namedItem(
      "email"
    ) as HTMLInputElement;
    if (emailInput && emailInput.value) {
      console.log(`Email submitted: ${emailInput.value}`);
      // Add your email submission logic here
    }
  };

  return (
    <div id="mail-list-section" className="mail-list-section">
      <div className="container-fluid">
        <div className="row">
          <div id="imageContainer" className="d-none d-md-block col-md-6">
            <img
              src="/src/assets/img/Lagerfeuer.jpeg"
              className="w-100 h-100"
              alt="Lagerfeuer"
            />
          </div>
          <div
            id="content-container"
            className="col-12 col-md-6 d-flex align-items-start justify-content-center flex-column pb-3"
          >
            <h1 id="mail-title" className="">
              Interesse?
            </h1>
            <div
              id="content-body"
              className="w-100 d-flex align-items-center justify-content-start"
            >
              <div
                id="email-cta"
                className="d-flex align-items-start justify-content-center flex-column"
              >
                <p className="text-left">
                  Dann einfach in den E-Mail Verteiler eintragen und auf dem
                  Laufenden bleiben
                </p>
                <div className="w-100">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="E-Mail"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Hinzufügen
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailListSection;
