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
import { useDispatch, useSelector } from "react-redux";
import { setHeader } from "../../features/headerSlice";
import ReservationDropDown from "./ReservationDropDown";
import { useState } from "react";
const SecondNavbar = () => {
  const dispatch = useDispatch();
  const [dropDownRoute, setDropDownRoute] = useState('')
  console.log('Routes:',dropDownRoute);
  
  const { headerName } = useSelector((store: any) => store.headerSlice);
  const linkStyles = ({ isActive }: any) => {
    return {
      textDecoration: "none",
      color: isActive ? " #117bd8" : "grey",
    };
  };
  return (
    <>
      <div className="w-full h-[50px] bg-white items-center border-b px-[50px] flex justify-between   list-none">
        <NavLink
          onClick={() => dispatch(setHeader("AddCompany"))}
          className={`${Styles.span1}   flex flex-col items-center gap-1`}
          style={linkStyles}
          to={"/"}
        >
          <span className="flex gap-1 items-center hover:text-[#117bd8]">
            <AddCircleOutlineIcon className="!w-[1.2rem]" />{" "}
            <li className={Styles.li1}>Company Logo</li>
          </span>
          <div className={Styles.hov1}></div>
        </NavLink>
        <NavLink
          onClick={() => dispatch(setHeader("VerifyPhone"))}
          className={`${Styles.span1} flex gap-1`}
          style={linkStyles}
          to={"/VerifyPhone"}
        >
          <span className="flex gap-1 items-center hover:text-[#117bd8]">
            <MobileFriendlyIcon className="!w-[1.2rem]" />
            <li className={Styles.li1}>Verify Phone</li>
          </span>
        </NavLink>
        <NavLink
          onClick={() => dispatch(setHeader("Dispatch"))}
          className={`${Styles.span1} flex gap-1`}
          style={linkStyles}
          to={"/Dispatch"}
        >
          {" "}
          <span className="flex items-center gap-1 hover:text-[#117bd8]">
            <LocalShippingIcon className="!w-[1.2rem]" />
            <li className={Styles.li1}>Dispatch</li>{" "}
          </span>
        </NavLink>
        <NavLink
          onClick={() => dispatch(setHeader("Calender"))}
          className={`${Styles.span1} flex gap-1`}
          style={linkStyles}
          to={"/Calender"}
        >
          {" "}
          <span className="flex items-center gap-1 hover:text-[#117bd8]">
            <CalendarMonthIcon className="!w-[1.2rem]" />{" "}
            <li className={Styles.li1}>Calender</li>
          </span>
        </NavLink>
       
          
          <span onClick={() => dispatch(setHeader("Reservation"))}
           className={`flex text-[0.8rem] ${headerName==='Reservation'?'text-[#117bd8]':'text-[grey]'}  items-center gap-1 hover:text-[#117bd8]`}>
            <CalendarMonthIcon className="!w-[1.2rem]" />{" "}
          <ReservationDropDown/> 
          </span>
      
        <NavLink
          onClick={() => dispatch(setHeader("Reports"))}
          className={`${Styles.span1} flex gap-1`}
          style={linkStyles}
          to={"/Reports"}
        >
          {" "}
          <span className={`${Styles.span1} flex gap-1  items-center hover:text-[#117bd8]`}>
            <SummarizeIcon className="!w-[1.2rem]" />{" "}
            <li className={Styles.li1}>Reports</li>
            <select></select>
          </span>
        </NavLink>
        <NavLink
          onClick={() => dispatch(setHeader("Settings"))}
          className={`${Styles.span1} flex gap-1`}
          style={linkStyles}
          to={"/Settings"}
        >
          {" "}
          <span
            className={`flex gap-1 items-center ${
              headerName === "Settings" && "text-[#117bd8]"
            } hover:text-[#117bd8]`}
          >
            <SettingsIcon className="!w-[1.2rem]" />{" "}
            <li className={Styles.li1}>Settings</li>
          </span>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default SecondNavbar;
