
import CarDataRenderComponent from "./CarDataRenderComponent";

  
export const carTableHeader: any = [
  {
    title: "Car Type",
    dataIndex: "car_type",
    width: "11%",
    editable: true,
  },
  {
    title: "Price Per Mile($)",
    dataIndex: "price",
    width: "11%",
    editable: true,
  },
  {
    title: "Min Fare($)",
    dataIndex: "minimum_fare",
    width: "11%",
    editable: true,
  },
  {
    title: "Hourly Rate ($)",
    dataIndex: "hourly_rate",
    width: "11%",
    editable: true,
  },
  {
    title: "Min Hours",
    dataIndex: "minimum_hours",
    width: "11%",
    editable: true,
  },
  {
    title: "Passenger Capacity",
    dataIndex: "passanger_capacity",
    width: "11%",
    editable: true,
  },
  {
    title: "Luggage Capacity",
    dataIndex: "luggage_capacity",
    width: "11%",
    editable: true,
  },
  {
    title: "Car Image",
    width: "11%",
    render: (record: any, index: number) => (
      <img
        key={index}
        src={record.car_image}
        alt={record.car_type}  
        style={{ maxWidth: "100%", maxHeight: "100%" }} 
      />
    ),
  },
  {
    title: "Actions",
    width: "11%",
    render: (record: any, index: number) => <CarDataRenderComponent key={index} record={record} />    
  },
];
