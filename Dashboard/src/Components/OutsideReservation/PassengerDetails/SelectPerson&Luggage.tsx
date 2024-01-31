import { Select } from "antd";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassengerDetails } from "../../../features/outsideReservationSlice";

const SelectPersonLuggage = () => {
  const dispatch = useDispatch();
  const [persons, setPersons] = useState(0);
  const [luggage, setLuggage] = useState(0);  
  
  if (persons !== 0) dispatch(setPassengerDetails({ persons: persons }));
  if (luggage !== 0) dispatch(setPassengerDetails({ luggage: luggage }));
  return (
    <div className="flex gap-3 grow justify-between items-center px-5 h-[50px] bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)]">
      <div className="flex items-center  ">
        <PeopleAltIcon />
        <People setQuantity={setPersons} />
      </div>
      <div className="flex items-center  ">
        <LuggageIcon />
        <People setQuantity={setLuggage} />
      </div>
    </div>
  );
};

export default SelectPersonLuggage;

interface PeopleProps {
  setQuantity: (number: number) => void;
}
const People: React.FC<PeopleProps> = ({ setQuantity }) => {
   
  return (
    <Select
    onChange={(e)=>setQuantity(parseInt(e))}
      style={{ width: "150px", border: "none" }}
      variant="borderless"
      defaultValue="1"
      options={[
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
        {
          value: "6",
          label: "6",
        },
      ]}
    />
  );
};
