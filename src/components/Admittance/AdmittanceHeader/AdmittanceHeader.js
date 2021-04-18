import React from "react";
import car from "../../../images/car-1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AdmittanceHeader = ({ handleDateChange }) => {
  return (
    <main style={{ height: "600px" }} class="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>Admittance</h1>
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6">
        <img src={car} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AdmittanceHeader;
