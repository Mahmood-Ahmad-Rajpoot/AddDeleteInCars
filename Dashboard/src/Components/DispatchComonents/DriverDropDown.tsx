import React from 'react'
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { dispatchDriverAssign } from '../../features/dispatchSlice';

interface DriverDropDownProps{
  recordID:number,

}
const DriverDropDown:React.FC<DriverDropDownProps> = ({recordID} ) => {
  const dispatch  = useDispatch();
    const handleChange = ( ) => {
      dispatch(dispatchDriverAssign(recordID))
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
 
 
 