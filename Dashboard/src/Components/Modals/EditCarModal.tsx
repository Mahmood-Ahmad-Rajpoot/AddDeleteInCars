import { useDispatch, useSelector } from "react-redux";
import { setEditModal } from "../../features/modalsSlice";
import { Modal } from "antd";
import EditCarForm from "./EditCarForm";
import "./Modal.css";
const EditCarModal = () => {
  const dispatch = useDispatch();
  const { EditModal } = useSelector((store: any) => store.modals);
  const { isEditModal, editItem } = EditModal;
  // form

  const handleCancel = () => {
    dispatch(setEditModal({}));
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
