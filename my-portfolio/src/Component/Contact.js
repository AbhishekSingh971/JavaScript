import React from "react";

export default function Contact() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          height: 750,
          backgroundColor: "black",
          color: "white",
          paddingTop: 150,
          textAlign: "justify",
        }}
      >
        <div className="container">
          <h1 className="h1 text-center">Contact</h1>
          <hr />
          <p className="mb-4 text-center">
            For all enquiries, please email using the form below
          </p>
          <h1 className="h1">How can i help you?</h1>
          <br />
          <div className="d-grid">
            <input type="text" placeholder="Your Name" style={{ height: 40, borderRadius: 20}} />
            <input type="text" placeholder="E-mail" style={{ height: 40, borderRadius: 20, marginTop: 10 }} />
            <input type="text" placeholder="Phone" style={{ height: 40, borderRadius: 20, marginTop: 10 }} />
            <input type="text" placeholder="Select" style={{ height: 70, borderRadius: 20, marginTop: 10 }} />
            <div className="btn btn-primary mt-4" style={{borderRadius: 20}}>Continue</div>
          </div>
        </div>
      </div>
    </>
  );
}
