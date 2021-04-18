import React from "react";
import Trainer from "../Trainer/Trainer";

const Trainers = () => {
  return (
    <section className="doctors">
      <div className="container">
        <h5 className="text-center  text-primary mb-5">Our Trainer</h5>
        <div className="row">
          <Trainer></Trainer>
          <Trainer></Trainer>
          <Trainer></Trainer>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
