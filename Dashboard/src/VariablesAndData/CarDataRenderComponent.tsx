import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Button } from "antd";
// import { useDispatch } from "react-redux";
// import { setDeleteModal, setEditModal } from "../features/modalsSlice";
import { modalsStore } from "../Components/ZuStand/modalsStore";
// import { setDeleteModal } from "../features/modalsSlice";
// import { useDispatch } from "react-redux";


interface CarDataRenderProps{
    record:any
}

// component
const CarDataRenderComponent:React.FC<CarDataRenderProps> = ({record}) => {

     const {setDeleteCarModal, setEditCarModal} = modalsStore((state:any)=>state)
    
    return (
        <div className="flex  ">
          <Button
            type="link"
            onClick={() => 
             setDeleteCarModal(record)
            // dispatch(setDeleteModal(record))
              }  
           >
            <DeleteOutlineIcon className="text-red-500  " />
          </Button>
          <Button
            onClick={() => {
              setEditCarModal(record);
              //  dispatch(setEditModal(record))
            }}
            type="link"
          >
            <EditCalendarIcon className="green-red-500" />
          </Button>
        </div>
      );
}

export default CarDataRenderComponent