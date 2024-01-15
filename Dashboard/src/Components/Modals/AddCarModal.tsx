 import EditCarForm from './EditCarForm'
import {   Modal } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { setAddCarModal,   } from "../../features/modalsSlice";
 
 
const AddCarModal = () => {
    const dispatch = useDispatch();
    const { isAddCarModal } = useSelector((store: any) => store.modals);
 
  
    const handleCancel = () => {
      dispatch(setAddCarModal());
    };
    
  return (
    <>
     <Modal
      footer={false}
      className="pt-[100px]"
      title="Basic Modal"
      open={isAddCarModal}
      onCancel={handleCancel}
    >
    <EditCarForm  whatToDo='add' carData={{}}/>
     </Modal>
    </>
  )
}

export default AddCarModal