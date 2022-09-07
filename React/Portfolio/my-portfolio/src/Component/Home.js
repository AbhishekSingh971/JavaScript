import React from "react-dom";
import img from "./download.jpg";

export default function Home() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          lineHeight: 3,
          height: 600,
          //   position: "fixed",
          backgroundColor: "black",
          paddingTop: 210,
          paddingLeft: 50,
        }}
      >
        <img src={img} className="float-end"/>
        <h5 className="h5 text-light">Hi,I'm Abhishek Singh</h5>
        <h2 className="h2 text-light">I build value through design.</h2>
        <span className="text-light">
          Web designer and developer from Delhi, India. I create custom websites
          to help businesses do better online
        </span>
        <br />
        <a className="link text-warning" href="/">
          Learn more
        </a>
      </div>
      <div className="mt-3" style={{ paddingLeft: 50 }}>
        <h1 className="h1 text-light">What I do</h1>
        <a className="link text-warning" href="/">
          Learn more
        </a>
      </div>
    </>
  );
}
