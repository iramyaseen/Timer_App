import React from "react";
import { RiTimerLine, RiPieChart2Fill } from "react-icons/ri";
import { BsListTask } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const FooterComponent = () => {
  return (
    <div id="header-content" className="footer">
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "#6b7aff" : "#5f5f5f",
            };
          }}
        >
          <RiTimerLine />
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/listBar"
          style={({ isActive }) => {
            return {
              color: isActive ? "#6b7aff" : "#5f5f5f",
            };
          }}
        >
          <BsListTask />
        </NavLink>
      </div>
      <div>
        <RiPieChart2Fill />
      </div>
      <div>
        <FaUserAlt />
      </div>
    </div>
  );
};
