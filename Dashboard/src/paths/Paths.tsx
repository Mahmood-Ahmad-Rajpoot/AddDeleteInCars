import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddCompany from "../Components/settings/AddCompany";
import VerifyPhone from "../Pages/VerifyPhone";
import CalenderPage from "../Pages/CalenderPage";
import CarsPage from "../Pages/CarsPage";
import CompanyPage from "../Pages/CompanyPage";
import Settings from "../Pages/Settings";
import CompanyLogo from "../Pages/CompanyLogo";
import Dispatch from "../Pages/Dispatch";
import Reports from "../Pages/Reports";
import DateAndTime from "../Components/settings/DateAndTime";
import HourlyReservationPage from "../Pages/HourlyReservationPage";
import LocalReservationPage from "../Pages/LocalReservationPage";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompanyPage />} />
        <Route path="AddCompany" element={<AddCompany />} />
        <Route path="VerifyPhone" element={<VerifyPhone />} />
        <Route path="Dispatch" element={<Dispatch />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="Cars" element={<CarsPage />} />
        <Route path="Calender" element={<CalenderPage />} />
        <Route path="CompanyLogo" element={<CompanyLogo />} />
        <Route path="Settings" element={<Settings />} ></Route>
        <Route path="DateTime" element={<DateAndTime />} />
        <Route path="Cars" element={<CarsPage />} />
        <Route path="LocalReservation" element={<LocalReservationPage />} />
        <Route path="HourlyReservation" element={<HourlyReservationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
