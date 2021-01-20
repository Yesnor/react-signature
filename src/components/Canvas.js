import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";

export default function Canvas() {
  const canvas = useRef();
  /* Canvas Default Props */

  // const defaultProps = {
  //   onChange: null,
  //   loadTimeOffset: 2,
  //   lazyRadius: 30,
  //   brushRadius: 12,
  //   brushColor: "#444",
  //   catenaryColor: "#0a0302",
  //   gridColor: "rgba(150,150,150,0.17)",
  //   hideGrid: false,
  //   canvasWidth: 400,
  //   canvasHeight: 400,
  //   disabled: false,
  //   imgSrc: "",
  //   saveData: null,
  //   immediateLoading: false,
  //   hideInterface: false,
  // };

  const saveImage = (canvas) => {
    const data = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = data;
    anchor.download = "Signature.png";
    anchor.click();
    anchor.remove();
  };
  return (
    <div id="canvas" className="drawSection__canvas">
      <CanvasDraw
        ref={canvas}
        style={{
          boxShadow:
            "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
        }}
        hideInterface
        hideGrid
        brushRadius={3}
        brushColor="black"
      />

      <div className="buttons d-flex justify-content-evenly mt-3">
        <button
          id="downloadImage"
          onClick={() => {
            saveImage(canvas.current.canvas.drawing);
          }}
          className="btn btn-success"
        >
          Download
        </button>
        <button
          onClick={() => {
            canvas.current.clear();
          }}
          className="btn btn-danger"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
