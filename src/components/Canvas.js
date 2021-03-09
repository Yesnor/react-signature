import React, { useRef, useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

export default function Canvas() {
  const canvas = useRef();
  const [brushLine, setBrushLine] = useState(1);
  const [brushColor, setBrushColor] = useState("#000000");

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

  //   Functions
  // Useful functions that you can call, e.g. when having a reference to this component:

  // getSaveData() returns the drawing's save-data as a stringified object
  // loadSaveData(saveData: String, immediate: Boolean) loads a previously saved drawing using the saveData string, as well as an optional boolean flag to load it immediately, instead of live-drawing it.
  // clear() clears the canvas completely
  // undo() removes the latest change to the drawing. This includes everything drawn since the last MouseDown event.

  const saveImage = (canvas) => {
    const data = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = data;
    anchor.download = "Signature.png";
    anchor.click();
    anchor.remove();
  };

  useEffect(() => {}, []);
  return (
    <div
      id="canvas"
      className="drawSection__canvas d-flex flex-column justify-content-center align-items-center"
    >
      <CanvasDraw
        ref={canvas}
        style={{
          boxShadow:
            "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
        }}
        hideInterface
        hideGrid
        brushRadius={brushLine}
        brushColor={brushColor}
        canvasWidth={450}
      />

      <div className="buttons d-flex justify-content-evenly mt-3">
        <button
          id="downloadImage"
          t
          onClick={() => {
            saveImage(canvas.current.canvas.drawing);
          }}
          className="btn btn-success"
        >
          Download
        </button>
        <button
          onClick={() => {
            canvas.current.undo();
          }}
          className="btn btn-warning"
        >
          Undo
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
      <div className="brush-range w-50 mt-3 d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <strong>
            <label htmlFor="brush-range" className="form-label">
              Brush radius: {brushLine}
            </label>
          </strong>
        </div>
        <div className="container">
          <input
            type="range"
            className="form-range w-50"
            min="1"
            max="5"
            step="1"
            id="brush-range"
            value={brushLine}
            onChange={(e) => {
              setBrushLine(+e.target.value);
            }}
          />
        </div>
      </div>
      <div className="brush-color w-50 d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <strong>
            <label htmlFor="brush-color" className="form-label">
              Brush color: {brushColor}
            </label>
          </strong>
        </div>
        <div className="container">
          <input
            type="color"
            className="form-range w-50"
            id="brush-color"
            onChange={(e) => {
              setBrushColor(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
