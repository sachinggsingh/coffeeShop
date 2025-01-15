import React, { useState } from "react";
import {productDropdown,ourstoryDropdown,userLoginDropdown,userLogoutDropdown} from "./Navitems";
import { Link} from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown((prevState) => !prevState);

  return (
    <ul
      className={`product-submenu ${dropdown ? "clicked" : ""}`}
      onClick={toggleDropdown}
    >
      {items.map((item) => (
        <li key={item.id} className={`submenu-item ${item.cName}`} onClick={() => setDropdown(false)}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
      
export const OsDropdown = () => <Dropdown items={ourstoryDropdown} />;
export const UsLoginDropdown = () => <Dropdown items={userLoginDropdown} />;
export const UsLogoutDropdown = () => <Dropdown items={userLogoutDropdown} />;
export const ProDropdown = () => <Dropdown items={productDropdown} />;
