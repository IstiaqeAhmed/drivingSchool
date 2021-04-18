import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AdmitAdmittance from "../AdmitAdmittance/AdmitAdmittance";
import AdmittanceHeader from "../AdmittanceHeader/AdmittanceHeader";

const Admittance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar></Navbar>
      <AdmittanceHeader handleDateChange={handleDateChange}></AdmittanceHeader>
      <AdmitAdmittance date={selectedDate}></AdmitAdmittance>
      <Footer></Footer>
    </div>
  );
};

export default Admittance;
