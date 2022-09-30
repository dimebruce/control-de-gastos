import React from "react";

const Footer = () => {
  return (
    <div className="container mt-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mx-4 border-top absolute-bottom mt-5">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none"
          >
            {/* <svg className="bi" width="30" height="24">
              <use href="#bootstrap" />
            </svg> */}
          </a>
          <span className="mb-3 mb-md-0 text-muted ">
             @dimebruce
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" target="_blank" href="https://github.com/dimebruce">
                <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" target="_blank" href="https://linkedin.com/in/devadriangarcia/">
            <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" target="_blank" href="https://instagram.com/dimebruce">
            <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
