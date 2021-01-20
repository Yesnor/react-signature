import React from "react";
import { Link } from "react-router-dom";
import Canvas from "./Canvas";

export default function Draw() {
  return (
    <section className="container drawSection">
      <Link to="/">
        <h5 className="mt-2">
          <span>
            <strong>&#8592;</strong>
          </span>
          Go Back
        </h5>
      </Link>
      <div className="container d-flex flex-column align-items-center">
        <h1 style={{ textAlign: "center" }}>Draw Your Signature</h1>
        <Canvas />
      </div>
    </section>
  );
}
