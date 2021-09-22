import React from "react";
import "./index.scss";

const Contribute = () => (
  <div className="contribute">
    <h1 className="title">Contribute</h1>
    <p>
      If you know a excelent free course that is not listed, please contribute.
    </p>
    <div className="iframe">
      <iframe
        title="google form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfhXYqkwSHAnVKcD4qvqCmtsZV4BUhr7XVzNB3fTko34-aIhw/viewform?embedded=true"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Carregando…
      </iframe>
    </div>
  </div>
);

export default Contribute