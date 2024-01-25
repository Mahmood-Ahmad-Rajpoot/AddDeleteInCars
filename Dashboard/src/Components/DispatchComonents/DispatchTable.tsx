import { Button, Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { dispatchColumns } from "../../VariablesAndData/dispatchData";
import "./dispatch.css";
import DateRangeFilter from "./DateRangeFilter";
import CompanyFilter from "./CompanyFilter";
 import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
  import {resetDispatch } from '../../features/dispatchSlice'
 
const DispatchTable = () => {
  const { dispatchData } = useSelector((store: any) => store.dispatchSlice);
    
  
 const dispatch = useDispatch();
// clear filters
const clearAllFilters =()=>{
   
 dispatch(resetDispatch())
}
  // filter based on input company name 
  

// filter based on the date range


  // status 
  const getRowClassName = (record: any) => {
    return record.accepted === 0
      ? "pending"
      : record.accepted === 1
      ? "accepted"
      : record.accepted === 3
      ? "dispatched"
      : record.accepted === 5
      ? "custInCar"
      : record.accepted === 6
      ? "clearAtDestination"
      : record.accepted === 7
      ? "assignName"
      : record.accepted === 8
      ? "farmOutAccepted"
      : "";
  };
  // normal and hourly
  return (
    <div>
      <div className="flex flex-col ">
        <h1 className="text-[2rem] text-black font-semibold mb-5">Dispatch</h1>
        <h1 className="mb-2 text-black text-[1rem]">Pick Date Range</h1>
        <div className="flex w-full gap-3 mb-3">
          <DateRangeFilter     />
          {/* <DateRangeFilter /> */}
          <CompanyFilter   />
          <Button className="self-end border-blue-600 text-blue-600" onClick={clearAllFilters}><FilterAltOffIcon />Remove Filters</Button>
        </div>
      </div>

      <Table
        pagination={{}}
        bordered={false}
        rowClassName={getRowClassName}
        columns={dispatchColumns}
        dataSource={dispatchData}
      />
    </div>
  );
};

export default DispatchTable;
