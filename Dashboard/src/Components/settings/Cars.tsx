import { Button, Table } from "antd";
import { carTableHeader } from "../../VariablesAndData/carData";
import DeleteCarModal from "../Modals/DeleteCarModal";
import { useDispatch, useSelector } from "react-redux";
import EditCarModal from "../Modals/EditCarModal";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AddCarModal from "../Modals/AddCarModal";
import { setAddCarModal } from "../../features/modalsSlice";
 import './car.css'
const Cars = () => {
  const dispatch = useDispatch();

  const { carData } = useSelector((store: any) => store.carDataSlice);
  return (
    <div className="flex flex-col ">
      <Button onClick={()=>dispatch(setAddCarModal())} className="bg-blue-700 hover:bg-blue-600 flex gap-2 self-end mb-3">
        <ControlPointIcon className="text-white hover-[lightgrey]" />
        <p className="text-white hover-[lightgrey]">Add Car</p>
      </Button>
      <Table className="text-[0.5rem]" columns={carTableHeader} dataSource={carData} pagination={false} />
      <DeleteCarModal />
      <AddCarModal/>
      <EditCarModal />
    </div>
  );
};
export default Cars;
