import { Tooltip } from "antd";
import InfoIcon from "@mui/icons-material/Info";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const MainPassenger = () => {
  const inputStyles = `bg-transparent h-full focus:outline-none px-3 w-full`;
  const iconStyles = `text-[25px] px-3 text-[orangered] h-[50px] flex items-center justify-center   `;
  const inputContainer = `flex grow w-[250px] h-[70px] mb-4 bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)] items-center justify-between mb-3  `;
  return (
    <div className="mt-[80px]">
      <div className="flex items-baseline gap-3">
        <h1 className="text-[1.3rem] text-blue-950 mb-3 mt-3">
          Main Passenger
        </h1>
        <Tooltip title="tooltip">
          <InfoIcon className="text-blue-950" />{" "}
        </Tooltip>
      </div>

      {/* input fields */}
      <div className="flex flex-wrap gap-3">
        <div className={inputContainer}>
          <span className={iconStyles}>
            <PermIdentityIcon className="text-orange" />
          </span>
          <input className={inputStyles} placeholder="First Name" />
        </div>

        <div className={inputContainer}>
          <span className={iconStyles}>
            <PermIdentityIcon className="text-orange" />
          </span>
          <input className={inputStyles} placeholder="Last Name" />
        </div>

        <div className={inputContainer}>
          <span className={iconStyles}>
            <MailOutlineIcon className="text-orange" />
          </span>
          <input className={inputStyles} placeholder="Phone" />
        </div>

        <div className={inputContainer}>
          <span className={iconStyles}>
            <LocalPhoneIcon className="text-orange" />
          </span>
          <input className={inputStyles} placeholder="Mail" />
        </div>
        <div className={inputContainer+ ' grow-0'}>
          <input className={inputStyles} placeholder="Company" />
        </div>
        <div className={inputContainer + ' grow-0'}>
          <input className={inputStyles} placeholder="Ref#" />
        </div>
      </div>
    </div>
  );
};

export default MainPassenger;
// formik form with yup validations
 