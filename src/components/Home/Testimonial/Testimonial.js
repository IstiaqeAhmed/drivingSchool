import React from "react";

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className="col-md-4 text-center">
      <div className="card-body">
        <p className="card-text text-center">{quote}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <img className="mx-3" src={img} alt="" width="60" />
        {/* className="img-fluid mb-3" */}
        <div>
          <h6 className="text-primary">{name}</h6>
          <p className="m-0">{from}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
