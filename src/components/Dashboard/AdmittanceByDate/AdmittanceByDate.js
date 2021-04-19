import React from "react";
import AdmittanceShortList from "../AdmittanceShortList/AdmittanceShortList";
import AdmittanceDataTable from "../AdmittanceDataTable/AdmittanceDataTable";

const AdmittanceByDate = ({ admittance }) => {
  console.log(admittance);
  return (
    <div>
      <h2 className="text-brand text-center">Admittance</h2>
      {admittance.length ? (
        <AdmittanceShortList admittance={admittance}></AdmittanceShortList>
      ) : (
        <div className="p-5">
          <h4 className="lead text-center">No Admittance for this date</h4>
        </div>
      )}
    </div>
  );
};
export default AdmittanceByDate;
