import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home d-flex flex-column justify-content-center align-items-center">
      <h1 className="home__title">
        How would you like to create your electronic signature?
      </h1>
      <div className="home-items">
        <section className="home__drawSignature">
          <Link to="/drawSignature" className="home__drawSignature--block mb-4">
            <span>
              <i className="bi bi-pencil-square"></i>
            </span>
            <p style={{ textAlign: "center" }}>
              <strong>Draw Signature</strong>
            </p>
          </Link>
        </section>

        <section className="home__typeSignature">
          <Link to="/typeSignature" className="home__typeSignature--block mb-4">
            {" "}
            <span>
              <i className="bi bi-keyboard-fill"></i>
            </span>
            <p style={{ textAlign: "center" }}>
              <strong>Type Signature</strong>
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}
