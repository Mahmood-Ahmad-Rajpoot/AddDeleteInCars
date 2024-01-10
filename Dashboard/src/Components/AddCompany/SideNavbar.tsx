import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import Styles from "../SecondNavbar/secondnavbar.module.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
const SideNavbar = () => {
    const linkStyles = ({ isActive }: any) => {
        return {
          textDecoration: "none",
          color: isActive ? " #117bd8" : "grey",
          
        };
      };
  return (
         
    <div className='flex  '>
        
      <div className="w-[250px] h-[100vh] px-[25px] pt-[50px] bg-white  items-start border-b flex flex-col gap-5 list-none">
        <NavLink className={`${Styles.span1}   flex gap-1`} style={linkStyles} to={"/"}>
           
            <CalendarMonthIcon /> <li className={Styles.li1}>Date & time</li>
          
        </NavLink>
        <NavLink className={`${Styles.span1} flex gap-1`} style={linkStyles} to={"/CompanyLogo"}>
          {" "}
        
            <AddCircleOutlineIcon /> <li className={Styles.li1}>Company</li>
        
        </NavLink>
        <NavLink className=" " style={linkStyles} to={"./Cars"}>
          {" "}
          <span className={`${Styles.span1} flex gap-1`}>
            <LocalTaxiIcon /> <li className={Styles.li1}>Cars</li>
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
    
     
    </div>
   
  )
}

export default SideNavbar



 
