import React from 'react'
import { Select } from 'antd';
interface getProp{
    label: string,
}
const StatusDropDown:React.FC<getProp> = ({label}) => {
    // handler
    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      };
      
  return (
    <Select
    labelInValue
    defaultValue={{ value: 'current_status', label: label }}
    style={{ width: 120 }}
    onChange={handleChange}
    options={[
      {
        value: 'assign_name_change',
        label: 'Assign name change',
      },
      {
        value: 'pending',
        label: 'Pending',
      },
      {
        value: 'clear_at_destination',
        label: 'Clear at destination',
      },
      {
        value: 'cust_in_Car',
        label: 'Cust, in the car',
      },
      {
        value: 'dispatched',
        label: 'Dispatched',
      },
      {
        value: 'accepted',
        label: 'Accepted',
      },
      {
        value: 'farmout_accepted',
        label: 'Farmout Accepted',
      },
    ]}
  />
  )
}
export default StatusDropDown
 