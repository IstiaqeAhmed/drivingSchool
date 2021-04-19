import React from "react";

const AdmittanceByDate = ({ admittance }) => {
  console.log(admittance);
  return (
    <div>
      <h2>Admittances: {admittance.length}</h2>
      {admittance.map((app) => (
        <li key={app._id}>{app.name}</li>
      ))}
    </div>
  );
};

export default AdmittanceByDate;
