import { BrowserRouter, Route, Routes } from "react-router-dom";
 // import Main from "../Components/Main";
 import Main from "../Components/Main";
import AddCompany from "../Components/AddCompany/AddCompany";
import VerifyPhone from "../Components/SecondNavbar/VerifyPhone";
import Cars from "../Components/AddCompany/Cars";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
          <Route path="AddCompany" element={<AddCompany />} />
          <Route path="VerifyPhone" element={<VerifyPhone />} />
          <Route path="Cars" element={<Cars />} />
          <Route path="VerifyPhone" element={<VerifyPhone />} />
          <Route path="VerifyPhone" element={<VerifyPhone />} />
      

       
           

      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
