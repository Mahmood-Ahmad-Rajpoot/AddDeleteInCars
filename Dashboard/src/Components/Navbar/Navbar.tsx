// import type { SearchProps } from '../Search';
import { Input } from "antd";
import styles from './navbar.module.css'
import vite from '../../assets/vite.svg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const { Search } = Input;

const Navbar = () => {
  return (
    <div className="w-full border h-auto px-5 bg-white flex justify-between items-center py-3">
      <div className="flex flex-col items-center ">
        <img src={vite} />
        WorldLimoZin
      </div>
      <div>
        {" "}
        <Search className={styles.span2}
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
        />
      </div>
      <div className="flex gap-2 ">
        <NotificationsNoneIcon className="border-r mr-2 text-blue-500"/>
       <AccountCircleIcon/>
        <span className="flex "><p>Techesthete</p> <select></select></span>
       
      </div>
    </div>
  );
};

export default Navbar;
