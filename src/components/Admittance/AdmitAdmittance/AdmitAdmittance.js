import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookingData = [
  {
    _id: "5e8df50be6e8231764dc23de",
    id: 1,
    subject: "Basic Package",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 40,
  },
  {
    _id: "5e8df578e6e8231764dc23df",
    id: 2,
    subject: "V.I.P Package",
    visitingHour: "9:00 AM - 11:00 AM",
    totalSpace: 20,
  },
  {
    _id: "5e8df5aee6e8231764dc23e0",
    id: 3,
    subject: "Extra Package",
    visitingHour: "5:00 PM - 6:00 PM",
    totalSpace: 30,
  },
  {
    _id: "5e8df63be6e8231764dc23e1",
    id: 4,
    subject: "Senior Driving Package",
    visitingHour: "4:00 PM - 5:30 PM",
    totalSpace: 35,
  },
  {
    _id: "5e8df68de6e8231764dc23e2",
    id: 5,
    subject: "Adult Driving Package",
    visitingHour: "11:00 AM - 11:59 AM",
    totalSpace: 40,
  },
  {
    _id: "5e8df6a0e6e8231764dc23e3",
    id: 6,
    subject: "Woman Driving Package",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 20,
  },
];

const AdmitAdmittance = ({ date }) => {
  return (
    <section>
      <h2 className="text-center text-brand mb-5">
        Available Admission ON <br /> {date.toDateString()}
      </h2>
      <div className="row">
        {bookingData.map((booking) => (
          <BookingCard
            booking={booking}
            date={date}
            key={booking.id}
          ></BookingCard>
        ))}
      </div>
    </section>
  );
};

export default AdmitAdmittance;
