import React from "react";

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
            <li class="nav-item active">
              {/* <a class="nav-link  ms-5" aria-current="page" href="#">
                Home
              </a> */}
              <a className="nav-link ms-5" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="#">
                ABOUT Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="#">
                PROGRAMS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5" href="#">
                FAQS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                BLOG
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                TESTIMONIALS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;