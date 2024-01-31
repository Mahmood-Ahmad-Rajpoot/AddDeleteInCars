 import EditCarForm from './EditCarForm'
import {   Modal } from "antd";
// import { useDispatch,useSelector } from "react-redux";
// import { setAddCarModal,   } from "../../features/modalsSlice";
import { modalsStore } from '../ZuStand/modalsStore';
 
 
const AddCarModal = () => {
    // const dispatch = useDispatch();
    // const { isAddCarModal } = useSelector((store: any) => store.modals);
    const {isAddCarModal, setAddCarModal} = modalsStore((state:any)=>state)

  return (
    <>
     <Modal
      footer={false}
      className="pt-[100px]"
      title="Basic Modal"
      open={isAddCarModal}
      onCancel={setAddCarModal}
    >
    <EditCarForm  whatToDo='add' carData={{}}/>
     </Modal>
    </>
  )
}

export default AddCarModal