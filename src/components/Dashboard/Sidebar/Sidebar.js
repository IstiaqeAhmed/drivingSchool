import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faHome,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isTrainer, setIsTrainer] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isTrainer", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsTrainer(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/admittance" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>

        {isTrainer && (
          <div>
            <li>
              <Link to="/dashboard/admittance" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>Admission</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allStudents" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Review Students</span>
              </Link>
            </li>
            <li>
              <Link to="/admittance" className="text-white">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Course Plan</span>
              </Link>
            </li>
            <li>
              <Link to="/addTrainer" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Trainer</span>
              </Link>
            </li>
          </div>
        )}

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
