// import { useDispatch, useSelector } from "react-redux";
// import { setEditModal } from "../../features/modalsSlice";
import { Modal } from "antd";
import EditCarForm from "./EditCarForm";
import "./Modal.css";
import { modalsStore } from "../ZuStand/modalsStore";

 const EditCarModal = () => {
  // const dispatch = useDispatch();
  // const { EditModal } = useSelector((store: any) => store.modals);
  const {EditModal, setEditCarModal} = modalsStore((state: any) => state)
  const { isEditModal, editItem } = EditModal;
console.log(EditModal);


  const handleCancel = () => {
    // dispatch(setEditModal({}));
    setEditCarModal({})
  };

  return (
    <Modal
      footer={false}
      className="pt-[100px]"
      title="Basic Modal"
      open={isEditModal}
      onCancel={handleCancel}
    >
      <EditCarForm whatToDo="edit" carData={editItem} />
    </Modal>
  );
};

export default EditCarModal;
