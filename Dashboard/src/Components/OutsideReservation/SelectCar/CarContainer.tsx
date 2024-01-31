import React from "react";
import { Radio } from "antd";
import "./selectCar_Type.css";
import carImage from "../../../assets/car1.png";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LuggageIcon from "@mui/icons-material/Luggage";
import { useDispatch } from "react-redux";
import { setCarDetails } from "../../../features/outsideReservationSlice";
interface SelectContainerProps {
  ind: number;
  selected: number;
  setSelected: (s: number) => void;
  car_details: any;
}
const SelectConainer: React.FC<SelectContainerProps> = ({
  ind,
  car_details,
  selected,
  setSelected,
}) => {
  // destructuring
  const { car_type, passanger_capacity, luggage_capacity } = car_details;

  // dispatcher
  const dispatch = useDispatch();

 
  // handling custom selected car
  const handleSelect = () => {
    dispatch(
      setCarDetails({
        car_type: car_type,
        luggage_capacity: luggage_capacity,
        passenger_capacity: passanger_capacity,
      })
    );
  };

  return (
    <div
      onClick={() => {
        setSelected(ind);
        handleSelect();
      }}
      className={` flex flex-col my-2 ${
        ind === selected
          ? " bg-[#324048]  z-[9999] "
          : " bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)]"
      } p-3  rounded-lg cursor-pointer min-w-[200px] h-[150px] `}
    >
      <Radio
        className={`${
          ind === selected ? "text-white" : "text-black"
        } font-semibold`}
        value={ind}
      >
        {car_type}
      </Radio>
      <div className="flex gap-4 self-center  mt-3">
        <span className="flex gap-2 items-center">
          <PeopleAltIcon />
          <p
            className={`${
              ind === selected ? "text-white" : "text-[grey]"
            } text-[1rem]`}
          >
            {passanger_capacity}
          </p>
        </span>
        <span className="flex gap-2 items-center">
          <LuggageIcon />
          <p
            className={`${
              ind === selected ? "text-white" : "text-[grey]"
            } text-[1rem]`}
          >
            {luggage_capacity}
          </p>
        </span>
      </div>
      <div className="flex justify-center self-center items-center w-[120px] h-[70px]  ">
        <img src={carImage} alt="car image " />
      </div>
    </div>
  );
};

export default SelectConainer;
