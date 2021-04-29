import React, { useEffect, useState } from "react";
import AdmittanceDataTable from "../../Dashboard/AdmittanceDataTable/AdmittanceDataTable";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AllStudents = () => {
  const [admittances, setAdmittances] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-caverns-69164.herokuapp.com/admittance")
      .then((res) => res.json())
      .then((data) => setAdmittances(data));
  }, []);

  return (
    <div className="container-fluid row ">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">All Admittances</h5>
        <AdmittanceDataTable admittances={admittances} />
      </div>
    </div>
  );
};

export default AllStudents;
