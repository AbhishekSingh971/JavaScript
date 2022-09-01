import React from "react";
import "./2_ambient_light_effect.css";

export default function Project() {
  // const click = (e)=>{
  //   let cube = document.getElementById('cube3');
  //   cube.style.transform += "rotateX(-40deg) rotateY(30deg) rotateZ(30deg)";
  // }

  return (
    <>
      <div id="projects3" className="projects3">
        <div id="cube3" className="cube3">
          <div id="top" className="top3"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>
      </div>
      {/* ------------------this is for 2 page---------------- */}
      <div className="projects2 border-top border-danger">
        <div className="cuben">
          <div className="topn"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>

        <div className="cubem">
          <div className="topm"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>
      </div>

      {/*---------------------this is for 1 page ----------------*/}
      <div className="projects border-top border-danger">
        {/* middel cube */}
        <div className="cube1" style={{ marginTop: "300px" }}>
          <div className="top1"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>

        {/* top cube */}
        <div className="cube1" style={{ marginTop: "50px" }}>
          <div className="top1"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>

        {/* last cube */}
        <div
          className="cube1"
          style={{ marginTop: "550px", marginRight: "30px" }}
        >
          <div className="top1"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>

        <div className="cube">
          <div className="top"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>

        {/* top cube */}
        <div className="cube1" style={{ marginTop: "50px" }}>
          <div className="top1"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>

        {/* last cube */}
        <div
          className="cube1"
          style={{ marginTop: "550px", marginRight: "30px" }}
        >
          <div className="top1"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>

        {/* middel cube */}
        <div className="cube1" style={{ marginTop: "300px" }}>
          <div className="top1"></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>
      </div>
    </>
  );
}
