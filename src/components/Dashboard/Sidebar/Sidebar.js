import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/driving/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/driving/appointment" className="text-white">
            <FontAwesomeIcon icon={faCalendar} /> <span>Admission</span>
          </Link>
        </li>
        <li>
          <Link to="/driving/patients" className="text-white">
            <FontAwesomeIcon icon={faUsers} /> <span>Students</span>
          </Link>
        </li>
        <li>
          <Link to="/driving/prescriptions" className="text-white">
            <FontAwesomeIcon icon={faFileAlt} /> <span>Course Plan</span>
          </Link>
        </li>
        <li>
          <Link to="/addDoctor" className="text-white">
            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admittance</span>
          </Link>
        </li>
        <li>
          <Link to="/driving/setting" className="text-white">
            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
