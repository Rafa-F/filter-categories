import React from "react";
import {Title} from "../Title";

const NavCategory = () => (
  <nav className="nav-categories">

    <Title/>

    <ul className="nav-menu">
      <li className="active"><a href="#">Channels</a></li>
      <li><a href="#">Dialer</a></li>
      <li><a href="#">Optimization</a></li>
      <li><a href="#">Reporting</a></li>
      <li><a href="#">Voice Analytics</a></li>
    </ul>
  </nav>
);

export default NavCategory;
