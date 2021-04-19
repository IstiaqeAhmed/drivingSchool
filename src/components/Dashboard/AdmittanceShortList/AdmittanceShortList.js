import React from "react";

const AdmittanceShortList = ({ admittance }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Phone
          </th>
          <th className="text-secondary" scope="col">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {admittance.map((admittance, index) => (
          <tr>
            <td>{admittance.name}</td>
            <td>{admittance.phone}</td>
            <td>{admittance.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdmittanceShortList;
