import React from 'react';
import './Carword.css';
import Fade from 'react-reveal/Fade';

function Carword() {
  return (
    <>
      <div class="master-image master-mobile">
        <div class="total-text-group">
          <div class="first-text">
            <Fade bottom>
            <h2 className="h_2">1,020hp</h2>
            </Fade>
            <Fade bottom>
            <span>Peak Power</span>
            </Fade>
          </div>
          <div class="secound-text">
          <Fade bottom>
            <h2 className="h_2">
              9.23<sub>s</sub>
            </h2>
            </Fade>
            <Fade bottom>
            <span>@155mph1/4 mile</span>
            </Fade>
          </div>
          <div class="third-text">
          <Fade bottom>
            <h2 className="h_2">
              1.99 <sub>s</sub>
            </h2>
            </Fade>
            <Fade bottom>
            <span>0-60mph</span>
            </Fade>
          </div>
        </div>
      </div>
      <div class="bottom-text">
        <div class="leftitem">
          <Fade bottom>
            <span>Plaid</span>
            <h2 className=".h_2">Beyond Ludicrous</h2>
          </Fade>
        </div>
        <div class="rightitem">
          <Fade bottom>
            <p class="right-para">
              Model S Plaid has the quickest acceleration of any vehicle in
              production.
              <br /> Updated battery architecture for all Model S trims enables
              back-to-back track
              <br /> runs without performance degradation.
            </p>
          </Fade>
        </div>
        <p class="order-button">Order now</p>
      </div>
    </>
  );
}
export default Carword;
