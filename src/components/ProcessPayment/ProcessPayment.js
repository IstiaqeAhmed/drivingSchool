import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
import SplitCardForm from "./SplitCardForm/SplitCardForm";

const stripePromise = loadStripe(
  "pk_test_51IfE6IKe5HS8EXWMG3VuTy8vTd8yO7fyFiaSOrtjCsSmJcmyIYUuUDNkhoVDYWnEIUIN3LmCuqz2oEN8VWfZQR2Q00E5rJZmPK"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm></SimpleCardForm>
      {/* <SplitCardForm></SplitCardForm> */}
    </Elements>
  );
};

export default ProcessPayment;
