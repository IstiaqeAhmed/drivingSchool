// import React, { useEffect, useState } from "react";
// import AdmittanceDataTable from "../../Dashboard/AdmittanceDataTable/AdmittanceDataTable";
// import Sidebar from "../../Dashboard/Sidebar/Sidebar";

// const AllStudents = () => {
//   const [admittance, setAdmittance] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/admittance")
//       .then((res) => res.json())
//       .then((data) => setAdmittance(data));
//   }, []);
//   return (
//     <div className="container-fluid row ">
//       <Sidebar></Sidebar>
//       <div
//         className="col-md-10 p-4 pr-5"
//         style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
//       >
//         <h5 className="text-brand">All admittance</h5>
//         <AdmittanceDataTable admittance={admittance} />
//       </div>
//     </div>
//   );
// };

// export default AllStudents;
