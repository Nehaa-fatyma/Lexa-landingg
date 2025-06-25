import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="images/loader.svg" alt="Loading" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
