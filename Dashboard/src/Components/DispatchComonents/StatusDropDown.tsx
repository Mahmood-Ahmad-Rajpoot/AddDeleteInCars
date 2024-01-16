import React from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import {dispatchChangeStatus} from '../../features/dispatchSlice'
// import { changeStatus } from "../../features/dispatchSlice";
interface getProp {
  label: string;
  recordID: number;
  // tableData:any[] ;
  // setTableData: (tableData : any[])=>void
}
const StatusDropDown: React.FC<getProp> = ({ label, recordID,   }) => {
  const dispatch = useDispatch();
  // const {}

  // handler
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    // const val = value.value;
    dispatch(dispatchChangeStatus({ status: value.value, recordID: recordID }));
     
 
  };

  return (
    <Select
      labelInValue
      defaultValue={{ value: "current_status", label: label }}
      style={{ width:'100%' }}
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
          value: "dispatched",
          label: "Dispatched",
        },
        {
          value: "accepted",
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
