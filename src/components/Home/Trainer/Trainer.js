import React from "react";
import img from "../../../images/banks.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
const Trainer = () => {
  return (
    <div className="col-md-4 text-center">
      <img className="img-fluid mb-3" src={img} alt="" />
      <h4>Christopher Banks</h4>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{" "}
        +880-188-934789
      </p>
    </div>
  );
};

export default Trainer;
