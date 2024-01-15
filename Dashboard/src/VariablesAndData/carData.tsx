 
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setDeleteModal, setEditModal } from "../features/modalsSlice";

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
    // dataIndex: "car_image",
    width: "11%",
    render: (record: any) => (
      <img
        // src={record.car_image}
        src={record.car_image}
        alt={record.car_type} // Add alt attribute for accessibility
        style={{ maxWidth: "100%", maxHeight: "100%" }} // Optional: Set max width and height
      />
    ),
  },
  {
    title: "Actions",
    // dataIndex: "car_image",
    width: "11%",
    render: (record: any) => {
      const dispatch = useDispatch();

      return (
        <div className="flex  ">
          <Button type="link" onClick={() => dispatch(setDeleteModal(record))}>
            <DeleteOutlineIcon className="text-red-500  " />
          </Button>
          <Button onClick={() => dispatch(setEditModal(record))} type="link">
            <EditCalendarIcon className="green-red-500" />
          </Button>
        </div>
      );
    },
  },
];
