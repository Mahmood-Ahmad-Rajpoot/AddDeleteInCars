// import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
 // import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import Styles from "./addcompany.module.css";
import PersonIcon from '@mui/icons-material/Person';

// import { Outlet } from "react-router";
import { NavLink,   } from "react-router-dom";
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
const SideNavbar = () => {
    const linkStyles = ({ isActive }: any) => {
        return {
          textDecoration: "none",
          color: isActive ? " #117bd8" : "grey",
          
        };
      };
  return (
         
   
        
      <div className="w-[250px] h-[100vh]  px-[25px] pt-[200px] bg-white  items-start border-b flex flex-col gap-5 list-none">
       <NavLink className={`${Styles.span1} flex gap-1`} style={linkStyles} to={"/Settings"}>
          {" "}
          <span  className="flex gap-1 hover:text-[#117bd8]"> 
            <PersonIcon  className="!w-[1.2rem]" /> <li className={Styles.li1}>Company</li>
        </span>
        </NavLink>
        <NavLink className={`${Styles.span1}   flex gap-1`} style={linkStyles} to={"/DateTime"}>
        <span  className="flex gap-1 hover:text-[#117bd8]">
            <CalendarMonthIcon  className="!w-[1.2rem]"  /> <li className={Styles.li1}>Date & time</li>
          </span>
        </NavLink>
        
        <NavLink className={`${Styles.span1} flex gap-1`} style={linkStyles} to={"/Cars"}>
          {" "}
          <span  className="flex gap-1 hover:text-[#117bd8]">
            <LocalTaxiIcon  className="!w-[1.2rem]" /> <li className={Styles.li1}>Cars</li>
          </span>
        </NavLink>
        <NavLink  className={`${Styles.span1} flex gap-1`} style={linkStyles} to={"/Calender"}>
          {" "}
          <span  className="flex gap-1 hover:text-[#117bd8]">
            <CalendarMonthIcon  className="!w-[1.2rem]" /> <li className={Styles.li1}>Calender</li>
          </span>
        </NavLink>
        <NavLink className={`${Styles.span1} flex gap-1`} style={linkStyles} to={"/crol"}>
          {" "}
          <span className="flex gap-1 hover:text-[#117bd8]" >
            <SummarizeIcon  className="!w-[1.2rem]" /> <li className={Styles.li1}>Reports</li>
            <select></select>
          </span>
        </NavLink>
        <NavLink className={`${Styles.span1} flex gap-1`} style={linkStyles} to={"/crol"}>
          {" "}
          <span  className="flex gap-1 hover:text-[#117bd8]">
            <SettingsIcon  className="!w-[1.2rem]" /> <li className={Styles.li1}>Settings</li>
          </span>
        </NavLink>
      </div>
    
     
   
   
  )
}

export default SideNavbar



 
