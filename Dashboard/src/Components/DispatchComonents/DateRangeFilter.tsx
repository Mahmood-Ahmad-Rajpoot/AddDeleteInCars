import type { Dayjs } from "dayjs";
import React, { useState } from "react";
import { DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { dispatchDateRangeFilter } from "../../features/dispatchSlice";
   
type RangeValue = [Dayjs | null, Dayjs | null] | null;

const { RangePicker } = DatePicker;

// interface

 
const DateRangeFilter = ( ) => {
  const dispatch = useDispatch();
  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);
const {reset} = useSelector((store:any)=>store.dispatchSlice)
  const handleChange = (v: any) => {
    const startDate = { year: v[0].$y, month: v[0].$M + 1, day: v[0].$D };
    const endDate = { year: v[1].$y, month: v[1].$M + 1, day: v[1].$D };
    // const data = (startDate, endDate, tableData);
    // setTableData(dispatchDateRangeFilter (startDate, endDate, tableData));

     dispatch(dispatchDateRangeFilter({start:startDate, end:endDate}))
  };

  return (
    <RangePicker
      value={reset? null :dates || value}
      onCalendarChange={(val) => {
        setDates(val);
      }}
      onChange={handleChange}
    />
  );
};

export default DateRangeFilter;
