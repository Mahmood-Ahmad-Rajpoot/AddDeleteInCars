import { Button, Modal, message } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteCar } from "../../features/carsDataSlice";
import { setDeleteModal } from "../../features/modalsSlice";
import { carDataStore } from "../ZuStand/carDataStore";
import { modalsStore } from "../ZuStand/modalsStore";
const DeleteCarModal = () => {
// msg
const [messageApi, contextHolder] = message.useMessage();
const success = (msg:string) => {
  messageApi.open({
    type: "success",
    content: msg,
  });
};

  // const dispatch = useDispatch();
  // const { DeleteModal } = useSelector((store: any) => store.modals);
  const {DeleteModal, setDeleteCarModal} = modalsStore((state:any)=>state)
  const { isDeleteModal, deleteItem } = DeleteModal;
 
  // zustand 
  const  {deleteCar} = carDataStore((state:any)=>state)

  const handleOk = () => {
    // dispatch(deleteCar(deleteItem))
    deleteCar(deleteItem.car_id)
    // dispatch(setDeleteModal({}));
    setDeleteCarModal({})
    success('car Deleted successfully!')
  };

  const handleCancel = () => {
    // dispatch(setDeleteModal({}));
    setDeleteCarModal({})

  };
  const customFooter=(<div className="flex w-full px-[50px]">
    <Button onClick={handleOk} className="bg-red-500 text-white w-full">Delete</Button>
  </div>)
  return (
    <Modal
    footer={customFooter}
      className="pt-[100px]"
      title="Basic Modal"
      open={isDeleteModal}
    
      onCancel={handleCancel}
    >  {contextHolder}
      <img className="border" src={deleteItem.car_image} width={150} height={100} alt="unable to load.." />
      <p className="mt-2"><b>Car Type: </b>  {deleteItem.car_type}</p>
      <p className="mt-1"><b>Price:</b> {deleteItem.price}$</p>
      
    </Modal>
  );
};

export default DeleteCarModal;
