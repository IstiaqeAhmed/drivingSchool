import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening Hours",
    description: "9:00 AM to 6:00 PM / 6 Days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "3261 Anmoore Road Brooklyn, NY 1123",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Contract Us Now",
    description: "800-123-4567",
    email: "info@youremal.com",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
