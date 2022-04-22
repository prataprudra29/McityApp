import * as React from "react";

import "./Navbar.css"

export default function NavBar() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="ferment">
            <div className="brandSearch">
              <div className="navBrand">
                My City
              </div>
              <div className="searchC">
                <input type="text" placeholder="Search for products..." />
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#"> <span className="fbicon"><i className="fa fa-th-large" aria-hidden="true"></i></span> Categories</a>
                </li>
                <li>
                  <a href="#"><span className="fbicon"><i className="fa fa-suitcase" aria-hidden="true"></i></span> Bag</a>
                </li>
                <li>
                  <a href="#"><span className="fbicon"><i className="fa fa-user" aria-hidden="true"></i></span> Account</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
