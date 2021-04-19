import React from "react";

const AdmittanceDataTable = ({ admittances }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Gender
          </th>
          <th className="text-secondary" scope="col">
            Age
          </th>
          <th className="text-secondary" scope="col">
            Weight
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
        {admittances.map((admittance, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{admittance.name}</td>
            <td>{admittance.gender}</td>
            <td>{admittance.age}</td>
            <td>{admittance.weight}KG</td>
            <td>{admittance.phone}</td>
            <td>{admittance.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdmittanceDataTable;
