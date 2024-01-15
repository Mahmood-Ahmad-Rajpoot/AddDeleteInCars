import StatusDropDown from "../Components/DispatchComonents/StatusDropDown";

export const dispatchColumns: any = [
  {
    title: "Company",
    dataIndex: "company_name",
    width: "11%",
    editable: true,
  },
  {
    title: "Reservation",
    //   dataIndex: "price",
    render: (record:any , index:number) => <StatusDropDown key={index} label={record.status} />,
    width: "11%",
    editable: true,
  },
  {
    title: "Conf#",
    dataIndex: "confirmation_no",
    width: "11%",
    editable: true,
  },
  {
    title: "Time",
    dataIndex: "pu_time",
    width: "11%",
    editable: true,
  },
  {
    title: "Pick Up",
    dataIndex: "pu_location",
    width: "11%",
    editable: true,
  },
  {
    title: "Drop Off",
    dataIndex: "destination",
    width: "11%",
    editable: true,
  },
  {
    title: "Name",
    dataIndex: "fname",
    width: "11%",
    editable: true,
  },
  {
    title: "Phone",
    dataIndex: "telephone",
    width: "11%",
    editable: true,
  },
  {
    title: "Car",
    dataIndex: "car_type",
    width: "11%",
    editable: true,
  },
  {
    title: "Fare",
    dataIndex: "price",
    width: "11%",
    editable: true,
  },
  {
    title: "Driver",
    dataIndex: " ",
    // company_drivers
    width: "11%",
    editable: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    width: "11%",
    editable: true,
  },
];
