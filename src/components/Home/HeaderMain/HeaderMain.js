import React from "react";
import car from "../../../images/car-1.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} class="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>Are You Ready?</h1>
        <p className="text-secondary">
          Since 1986, throughout the area, School of Driving has earned a
          reputation for responsible and caring driving instruction. Throughout
          USA, Europe and others, wherever you live, with our professional and
          friendly local driving instructors, you’ll enjoy a relaxed, positive
          and encouraging environment as you start your driving lessons and
          learn to drive.
        </p>
        <li>We know all of the different test routes</li>
        <li>Plate Learn with a company that cares, more than just an offer!</li>
        <li>Plate First driving lessons from just $20</li>
        <br />
        <button className="btn btn-primary">ORDER NOW</button>
      </div>
      <div className="col-md-6">
        <img src={car} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
