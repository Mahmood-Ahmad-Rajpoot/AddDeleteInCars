import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "./passengerDStyles.css";
import { useDispatch } from "react-redux";
import { setPassengerDetails } from "../../../features/outsideReservationSlice";

const SelectDateTime = () => {
  const dispatch = useDispatch();
  // handlers
  const handleTimePicker = (e: any) => {
    const formattedTime = dayjs(e).format("hh:mmA");

    if (formattedTime) {
      dispatch(
        setPassengerDetails({
          time: formattedTime,
        })
      );
    }
  };
  const handleDatePicker = (e: any) => {
    const formattedDate = dayjs(e).format("DD-MM-YYYY");
    dispatch(
      setPassengerDetails({
        date: formattedDate,
      })
    );
    // console.log(formattedDate);

    // console.log(e);
  };

  return (
    <div className="flex gap-3 grow justify-between px-5 items-center h-[50px] bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)]">
      <DatePicker
        onChange={handleDatePicker}
        placeholder="Borderless"
        variant="borderless"
      />
      <TimePicker onChange={handleTimePicker} variant="borderless" />
    </div>
  );
};

export default SelectDateTime;
