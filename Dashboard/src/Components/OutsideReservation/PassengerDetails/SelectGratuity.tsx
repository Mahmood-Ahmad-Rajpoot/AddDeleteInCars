import { Select } from "antd";
import { useDispatch } from "react-redux";
import { setPassengerDetails } from "../../../features/outsideReservationSlice";

const SelectGratuity = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex px-5  w-1/4 justify-center items-center   h-[50px] bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)]">
      <Select
        onChange={(e) =>
          dispatch(setPassengerDetails({ gratuity: parseInt(e) }))
        }
        placeholder="Select Gratuity"
        style={{ width: "100%", border: "none" }}
        variant="borderless"
        options={[
          {
            value: "5",
            label: "5",
          },
          {
            value: "10",
            label: "10",
          },
          {
            value: "15",
            label: "15",
          },
          {
            value: "20",
            label: "20",
          },
          {
            value: "25",
            label: "25",
          },
          {
            value: "30",
            label: "30",
          },
        ]}
      />
    </div>
  );
};

export default SelectGratuity;
