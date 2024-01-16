import React from 'react'
import { Select } from 'antd';
const DriverDropDown = () => {
    const handleChange = (value: { value: string; label: React.ReactNode }) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      };
  return (
    <Select
    labelInValue
    defaultValue={{ value: 'select_driver', label: 'Select Driver' }}
    style={{ width:'100%' }}    onChange={handleChange}
    options={[
      {
        value: 'muller',
        label: ' Muller Andrew',
      },
      {
        value: 'chris',
        label: 'Chris',
      },
      {
        value: 'rock',
        label: 'Rock',
      },
      {
        value: 'mock',
        label: 'Mock',
      },
     
    ]}
  />
  )
}

export default DriverDropDown
 
 
 