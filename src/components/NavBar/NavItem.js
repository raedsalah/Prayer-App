import React from "react";
import { Link } from "react-router-dom";

const NavItem = props => (
  <li className="nav-item">
    <Link className="nav-link" to={props.NavLink}>
      {props.NavTitle}
    </Link>
  </li>
);

export default NavItem;
