import React from "react";
import { Button, Table } from "antd";
import { useSelector } from "react-redux";
import { dispatchColumns } from "../../VariablesAndData/dispatchData";
import "./dispatch.css";
const DispatchTable = () => {
  const { dispatchData } = useSelector((store: any) => store.dispatchSlice);
  const getRowClassName = (record: any, index: number) => {
    console.log(index, ":", record);
    console.log(index, ":status:", record.status);
    console.log(index, ":accepted-code:", record.accepted);
    // {status:'pending', accepted:0}
    // {status:'accepted', accepted:1}
    // {status:'clear at destination', accepted:6}
    // {status:'farmout accepted', accepted:8}
    return record.status == "Pending"
      ? "pending"
      : record.accepted === 1
      ? "accepted"
      : record.accepted === 6
      ? "clearAtDestination"
      : record.status == "Farmout Accepted"
      ? "farmOutAccepted"
      : "";
  };
  return (
    <div>
      <Table
        pagination={{}}
        rowClassName={getRowClassName}
        columns={dispatchColumns}
        dataSource={dispatchData}
      />
    </div>
  );
};

export default DispatchTable;
