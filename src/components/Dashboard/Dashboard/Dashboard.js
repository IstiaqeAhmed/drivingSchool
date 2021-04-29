import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AdmittanceByDate from "../AdmittanceByDate/AdmittanceByDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../App";

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [admittance, setAdmittance] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("https://peaceful-caverns-69164.herokuapp.com/admittanceByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmittance(data));
  }, [selectedDate]);

  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5 col-sm-12 col-12">
          <AdmittanceByDate admittance={admittance}></AdmittanceByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
