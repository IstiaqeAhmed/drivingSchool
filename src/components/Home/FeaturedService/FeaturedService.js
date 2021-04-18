import React from "react";
import featured from "../../../images/june-andrei-george-AsqnEOtNQgE-unsplash.jpg";
const FeaturedService = () => {
  return (
    <section className="features-service pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={featured} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>WHY AUTOMATIC DRIVING LESSONS HELP YOU PASS FASTER</h1>
            <p className="text-secondary my-5">
              When learning to drive, one of the biggest things to remember is
              the stopping and the braking distances of the car you are driving.
              To be behind the wheel without knowing or being able to remember
              the distances can be extremely dangerous, not just to yourself and
              your passengers, but to others on the road too.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
