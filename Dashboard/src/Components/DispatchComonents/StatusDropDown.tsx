import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { dispatchChangeStatus } from "../../features/dispatchSlice";

interface StatusDropDownProps {
  recordID: number;
}

const StatusDropDown: React.FC<StatusDropDownProps> = ({ recordID }) => {
  const dispatch = useDispatch();
  const { dispatchData } = useSelector((store: any) => store.dispatchSlice);
  const [selectedValue, setSelectedValue] = useState("current_status");
  const [label, setLabel] = useState("All Companies"); // Default label

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setSelectedValue(value.value);
    dispatch(dispatchChangeStatus({ status: value.value, recordID }));
  };
  // useEffect
  useEffect(() => {
    const matchingData = dispatchData.find(
      (data: any) => data.confirmation_no === recordID
    );

    if (matchingData) {
      setLabel(matchingData.status);
    }
  }, [dispatchData, recordID]);

  return (
    <Select
      labelInValue
      value={{ value: selectedValue, label }}
      style={{ width: "100%" }}
      onChange={handleChange}
      options={[
        {
          value: "assign_name_change",
          label: "Assign name change",
        },
        {
          value: "pending",
          label: "Pending",
        },
        {
          value: "clear_at_destination",
          label: "Clear at destination",
        },
        {
          value: "cust_in_Car",
          label: "Cust, in the car",
        },
        {
          value: "Dispatched",
          label: "Dispatched",
        },
        {
          value: "Accepted",
          label: "Accepted",
        },
        {
          value: "farmout_accepted",
          label: "Farmout Accepted",
        },
      ]}
    />
  );
};

export default StatusDropDown;
