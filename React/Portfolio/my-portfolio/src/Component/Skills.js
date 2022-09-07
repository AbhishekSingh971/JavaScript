import React from "react";

export default function Skills(props) {
  return (
    <div style={{backgroundColor: 'black',height: 1200}}>
      <h1 className="container text-light text-center mb-4 " style={{marginTop: 80}}>My Skills</h1>

      {/* 1 row */}
      <div className="row mb-5 mx-3">
          <div className={props.border}>
          <h5 className="h5 text-warning text-center">Front-End languages</h5>
          <span className="text-light">HTML</span>
          <div className="progress">
            <div
              className={props.progress}
              style={{ width: "65%" }}
            ></div>
          </div>
          <span className="text-light">CSS</span>
          <div className="progress">
            <div
              className={props.progress}
              style={{ width: "50%" }}
            ></div>
          </div>
          <span className="text-light">JavaScript</span>
          <div className="progress">
            <div
              className={props.progress}
              style={{ width: "25%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* 2 row */}
      <div className="row mb-5 mx-3">
        <div className={props.border}>
          <h5 className="h5 text-warning text-center">Front-End Framework</h5>
          <span className="text-light">React</span>
          <div className="progress">
            <div
              className={props.progress}
              style={{ width: "25%" }}
            ></div>
          </div>
          <span className="text-light">Angular</span>
          <div className="progress">
            <div
              className={props.progress}
              style={{ width: "5%" }}
            ></div>
          </div>
        </div>

        <div className={props.border}>
          <h5 className="h5 text-warning text-center">Front-End Libraries</h5>
          <span className="text-light">jQuery</span>
          <div className="progress">
            <div
              className={props.progress}
              style={{ width: "30%" }}
            ></div>
          </div>
          <span className="text-light">Bootstrap</span>
          <div className="progress">
            <div
              className={props.progress}
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
        </div>

        {/* 3 row for backend */}
        <div className="row mt-5 mb-5 mx-3">
          <div className={props.border}> 
            <h5 className="h5 text-warning text-center">Backend languages</h5>
            <span className="text-light">C++</span>
            <div className="progress">
              <div
                className={props.progress}
                style={{ width: "50%" }}
              ></div>
            </div>
            <span className="text-light">PHP : Hypertext Preprocesser</span>
            <div className="progress">
              <div
                className={props.progress}
                style={{ width: "75%" }}
              ></div>
            </div>
            <span className="text-light">Node.js</span>
            <div className="progress">
              <div
                className={props.progress}
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* 4 row */}
        <div className="row mt-5 mx-3">
          <div className={props.border}>
            <h5 className="h5 text-warning text-center">Backend Framework</h5>
            <span className="text-light">Express</span>
            <div className="progress">
              <div
                className={props.progress}
                style={{ width: "15%" }}
              ></div>
            </div>
            <span className="text-light">Laravel</span>
            <div className="progress">
              <div
                className={props.progress}
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* 5 row */}
        <div className="row mt-5 mx-3 mb-5">
          <div className={props.border}>
            <h5 className="h5 text-warning text-center">DataBase</h5>
            <span className="text-light">MySQL</span>
            <div className="progress">
              <div
                className={props.progress}
                style={{ width: "50%" }}
              ></div>
            </div>

            <span className="text-light">MongoDB</span>
            <div className="progress">
              <div
                className={props.progress}
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
    </div>
  );
}
