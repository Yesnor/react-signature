import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Type() {
  const fonts = {
    type1: "Dancing Script, cursive",
    type2: "Kaushan Script, cursive",
    type3: "Marck Script, cursive",
    type4: "Knewave, cursive",
    type5: "Ruthie, cursive",
    type6: "Sarina, cursive",
  };
  const modalWidth = 466;
  const modalHeight = 306;
  const defaultSignature = "Your Signature";

  const textRef = useRef();
  const [signature, setSignature] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [canvasFont, setCanvasFont] = useState("");
  const [ctx, setCtx] = useState(null);

  const createCanvas = () => {
    const canvas = textRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, modalWidth, modalHeight);
    setCtx(ctx);
  };
  const clearCanvas = () => {
    const canvas = textRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, modalWidth, modalHeight);
  };
  const typeSignature = (fontType) => {
    ctx.font = "5rem " + fontType;
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(signature, modalWidth / 2, modalHeight / 2);
  };
  const handleTyping = (e) => {
    let name = e.target.value;
    if (name.length <= 15) {
      setSignature(name);
    }
  };

  const saveImage = (canvas) => {
    const data = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = data;
    anchor.download = "Signature.png";
    anchor.click();
    anchor.remove();
  };

  useEffect(() => {
    if (isModalOpen) {
      typeSignature(canvasFont);
    } else {
      clearCanvas();
    }
  }, [isModalOpen]);

  useEffect(() => {
    createCanvas();
  }, []);

  return (
    <section className="container typeSection">
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={
              signature ? { pointerEvents: "none" } : { pointerEvents: "auto" }
            }
          >
            <div className="modal-body">
              <canvas
                ref={textRef}
                width={modalWidth}
                height={modalHeight}
              ></canvas>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setIsModalOpen(!isModalOpen)}
                style={{ pointerEvents: "auto" }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  saveImage(textRef.current);
                }}
                style={{ pointerEvents: "auto" }}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
        <h5 className="mt-2">
          <span>
            <strong>&#8592;</strong> Go Back
          </span>
        </h5>
      </Link>
      <div className="container d-flex flex-column align-items-center">
        <h1 style={{ textAlign: "center" }}>Type Your Signature</h1>
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Type name here"
          onChange={handleTyping}
          value={signature}
        />

        <div className="signatures ">
          <div
            type="button"
            className="signature"
            style={{ fontFamily: fonts.type1 }}
            data-bs-toggle={signature ? "modal" : ""}
            data-bs-target="#exampleModal"
            onClick={() => {
              if (signature) {
                setIsModalOpen(!isModalOpen);
                setCanvasFont(fonts.type1);
              }
            }}
          >
            <h1>{signature || defaultSignature}</h1>
          </div>

          <div
            type="button"
            data-bs-toggle={signature ? "modal" : ""}
            data-bs-target="#exampleModal"
            onClick={() => {
              if (signature) {
                setIsModalOpen(!isModalOpen);
                setCanvasFont(fonts.type2);
              }
            }}
            className="signature "
            style={{ fontFamily: fonts.type2 }}
          >
            <h1>{signature || defaultSignature}</h1>
          </div>

          <div
            type="button"
            className="signature "
            data-bs-toggle={signature ? "modal" : ""}
            data-bs-target="#exampleModal"
            onClick={() => {
              if (signature) {
                setIsModalOpen(!isModalOpen);
                setCanvasFont(fonts.type3);
              }
            }}
            style={{ fontFamily: fonts.type3 }}
          >
            <h1>{signature || defaultSignature}</h1>
          </div>
          <div
            type="button"
            className="signature "
            data-bs-toggle={signature ? "modal" : ""}
            data-bs-target="#exampleModal"
            onClick={() => {
              if (signature) {
                setIsModalOpen(!isModalOpen);
                setCanvasFont(fonts.type4);
              }
            }}
            style={{ fontFamily: fonts.type4 }}
          >
            <h1>{signature || defaultSignature}</h1>
          </div>
          <div
            type="button"
            className="signature "
            data-bs-toggle={signature ? "modal" : ""}
            data-bs-target="#exampleModal"
            onClick={() => {
              if (signature) {
                setIsModalOpen(!isModalOpen);
                setCanvasFont(fonts.type5);
              }
            }}
            style={{ fontFamily: fonts.type5 }}
          >
            <h1>{signature || defaultSignature}</h1>
          </div>
          <div
            type="button"
            className="signature "
            data-bs-toggle={signature ? "modal" : ""}
            data-bs-target="#exampleModal"
            onClick={() => {
              if (signature) {
                setIsModalOpen(!isModalOpen);
                setCanvasFont(fonts.type6);
              }
            }}
            style={{ fontFamily: fonts.type6 }}
          >
            <h1>{signature || defaultSignature}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
