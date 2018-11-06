import React from "react";
import "../Charities/Charities.css";
import SPCA from "./Charity/SPCA";
import ACS from "./Charity/ACS";
import STC from "./Charity/STC";
import Habitat from "./Charity/Habitat";

const charities = () => {
  return (
    // <div className="ui raised very padded text container segment">
    <div className="wrapper">
      <div className="card">
        <div className="content">
          <SPCA />
          <p className="charityDescription">
            SPCA International works to stop the abuse and suffering of animals
            with innovative programs that serve both animals and their human
            caretakers.
          </p>
          <a href="https://www.spcai.org/">
            <button class="ui yellow button">Click to visit the SPCA</button>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <ACS />
          <p className="charityDescription">
            Dedicated to helping people who face cancer. Learn about cancer
            research, patient services, early detection, treatment and education
            at cancer.org.
          </p>
          <a href="https://www.cancer.org">
            <button class="ui yellow button">
              Click to visit the American Cancer Society
            </button>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <STC />
          <p className="charityDescription">
            In the U.S. and around the world, we give children a healthy start
            in life, the opportunity to learn and protection from harm. We do
            whatever it takes to save children, transforming their lives and the
            future we share.
          </p>
          <a href="https://www.cancer.org/">
            <button class="ui yellow button">
              Click to visit Save the Children
            </button>
          </a>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <Habitat />
          <p className="charityDescription">
            Habitat for Humanity is a nonprofit organization that helps people
            in your community and around the world build or improve a place they
            can call home.
          </p>
          <a href="https://www.habitat.org/">
            <button class="ui yellow button">
              Click to visit Habitat for Humanity
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default charities;
