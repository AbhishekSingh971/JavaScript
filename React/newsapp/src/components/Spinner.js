import React from "react";
// for 1 spinenr
// import loading from './Spinner-1.5s-130px.gif'

const Spinner = () => {
  return (
    // 1 spinner
    //   <div className='text-center'>
    //     <img src={loading} alt="loading"/>
    //   </div>

    // 2 spinner
    <div className="d-flex justify-content-center mt-3 mb-3">
      <div className="spinner-border border-light mx-2" role="status"></div>
    </div>
  );
};

export default Spinner;
