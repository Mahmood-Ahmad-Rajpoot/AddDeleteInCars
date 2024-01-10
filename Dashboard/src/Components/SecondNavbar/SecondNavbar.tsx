// import React from 'react'
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import Styles from "./secondnavbar.module.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
const SecondNavbar = () => {
  const linkStyles = ({ isActive }: any) => {
    return {
      textDecoration: "none",
      color: isActive ? " #117bd8" : "grey",
      borderBottom: isActive ? "2px solid #117bd8" : "",
    };
  };
  return (
    <>
      <div className="w-full h-[50px] items-center border-b px-8 flex justify-between gap-3 list-none">
        <NavLink className={`${Styles.span1} flex gap-1`} style={linkStyles} to={"/"}>
           
            <AddCircleOutlineIcon /> <li className={Styles.li1}>Add Company</li>
          
        </NavLink>
        <NavLink className={`${Styles.span1} flex gap-1`} style={linkStyles} to={"/CompanyLogo"}>
          {" "}
        
            <MobileFriendlyIcon /> <li className={Styles.li1}>Verify Phone</li>
        
        </NavLink>
        <NavLink className=" " style={linkStyles} to={"/Cars"}>
          {" "}
          <span className={`${Styles.span1} flex gap-1`}>
            <LocalShippingIcon /> <li className={Styles.li1}>Dispatch</li>
          </span>
        </NavLink>
        <NavLink className=" " style={linkStyles} to={"/Cars"}>
          {" "}
          <span className={`${Styles.span1} flex gap-1`}>
            <CalendarMonthIcon /> <li className={Styles.li1}>Calender</li>
          </span>
        </NavLink>
        <NavLink className=" " style={linkStyles} to={"/Cars"}>
          {" "}
          <span className={`${Styles.span1} flex gap-1`}>
            <SummarizeIcon /> <li className={Styles.li1}>Reports</li>
            <select></select>
          </span>
        </NavLink>
        <NavLink className=" " style={linkStyles} to={"/Cars"}>
          {" "}
          <span className={`${Styles.span1} flex gap-1`}>
            <SettingsIcon /> <li className={Styles.li1}>Settings</li>
          </span>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default SecondNavbar;
