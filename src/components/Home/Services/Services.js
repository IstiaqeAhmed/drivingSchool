import React from "react";
import senior from "../../../images/senior.jpg";
import winter from "../../../images/winter.jpg";
import defensive from "../../../images/defensive.jpg";
import ServiceDetail from "../Service Detail/ServiceDetail";
const serviceData = [
  {
    name: "Program for Seniors",
    img: senior,
  },
  {
    name: "Winter Driving",
    img: winter,
  },
  {
    name: "Defensive Driving",
    img: defensive,
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1cc7c1" }}>OUR PROGRAMS</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
