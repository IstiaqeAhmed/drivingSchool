import React from "react";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      {/* bg-light */}
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li class="nav-item active">
              <a class="nav-link  ms-5" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link ms-5" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li> */}
            <li className="nav-item">
              <Link to="/" className="nav-link mr-5 text-blue">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5  " to="dashboard/admittance">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mr-5  " to="dashboard/allStudents">
                Students
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link mr-5 " to="/dashboard">
                Admin
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mr-5  text-white"
                to="dashboard/admittance"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-5  text-white" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
