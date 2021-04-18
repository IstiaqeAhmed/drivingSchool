import React from "react";
import student from "../../../images/istockphoto-124089966-612x612.jpg";
import "./Admission.css";

const MakeAppointment = () => {
  return (
    <section className="make-admit">
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-none d-md-block">
            <img src={student} alt="" />
          </div>
          <div className="col-md-5 text-white py-5">
            <h5 className="text-primary text-uppercase ">Admission</h5>
            <h1 className="my-4">
              Make an Admit <br /> Today
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
