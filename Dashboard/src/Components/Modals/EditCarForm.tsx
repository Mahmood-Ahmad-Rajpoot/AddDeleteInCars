import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setAddCarModal, setEditModal } from "../../features/modalsSlice";
import { useEffect, useState } from "react";
import { addNewCar, editCar } from "../../features/carsDataSlice";
 import UploadImage from "./UploadImage";
import { message } from "antd";

interface getProp {
  carData: any;
  whatToDo: string;
}
const EditCarForm: React.FC<getProp> = ({ carData, whatToDo }) => {
  // success message
  const [messageApi, contextHolder] = message.useMessage();
  const success = (msg: string) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };
  // states
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [image, setUploadedImage] = useState("");

  // initialValues
  useEffect(() => {
    setUploadedImage(whatToDo === "edit" ? carData.car_image : "");
    // Set initial form values when carData prop changes
    whatToDo === "edit"
      ? form.setFieldsValue({
          car_type: carData.car_type,
          hourly_rate: carData.hourly_rate,
          luggage_capacity: carData.luggage_capacity,
          minimum_fare: carData.minimum_fare,
          minimum_hours: carData.minimum_hours,
          passanger_capacity: carData.passanger_capacity,
          price: carData.price,
        })
      : form.setFieldsValue({
          car_image: "",

          car_type: "",
          hourly_rate: "",
          luggage_capacity: "",
          minimum_fare: "",
          minimum_hours: "",
          passanger_capacity: "",
          price: "",
        });
  }, [carData]);

  const handleCancel = () => {
    if (whatToDo === "edit") dispatch(setEditModal({}));
    else dispatch(setAddCarModal());
  };
  // Submission
  const onFinish = (values: any) => {
    if (whatToDo === "edit") {
      dispatch(setEditModal({}));
      dispatch(
        editCar({ car_id: carData.car_id, uploaded_image: image, ...values })
      );
      success("Record updated successfully!");
    } else {
      dispatch(setAddCarModal());

      dispatch(
        addNewCar({
          car_id: Math.round(Math.random() * 1000),
          car_image: image,
          ...values,
        })
      );
      success("Successfully New Car Added!");
    }
  };
  console.log("image:", image);
const requiredMessage = (text:string) =>(<p className="text-[0.7rem] text-red">{text}</p>)
  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: "100%",marginBottom:0,paddingBottom:0, color: "grey" ,display:'flex',flexDirection: 'column',justifyContent: 'center'}}
    >
      {" "}
      {contextHolder}
      <div className="flex flex-wrap gap-2 ">
        <div className="flex items-center w-full ">
          <div className="w-[150px] h-[150px]">
            <UploadImage
              uploadedImage={setUploadedImage}
              whatToDo={whatToDo}
              image={image}
            />
          </div>

          <div className="w-[230px]">
            <label> Car Type</label>
            <Form.Item  
              rules={[
                {
                  required: whatToDo === "add" && true,
                  message: requiredMessage('*Enter a car Type'),
                },
              ]}
              name="car_type"
            >
              <Input   />
            </Form.Item>
          </div>
        </div>
        <div className="w-[230px]">
          <label>Luggage capacity </label>
          <Form.Item
            rules={[
              {
                required: whatToDo === "add" && true,
                message: requiredMessage('*Enter Luggage capacity'),
              },
            ]}
            name="hourly_rate"
          >
            <Input />
          </Form.Item>
        </div>
        <div className="w-[230px]">
          <label>Luggage capacity </label>
          <Form.Item name="luggage_capacity">
            <Input />
          </Form.Item>
        </div>
        <div className="w-[230px]">
          <label className="mb-2">Minimum Fare </label>
          <Form.Item name="minimum_fare">
            <Input />
          </Form.Item>
        </div>
        <div className="w-[230px]">
          <label className="mb-2">Minimum Hours </label>
          <Form.Item name="minimum_hours">
            <Input />
          </Form.Item>
        </div>
        <div className="w-[230px]">
          <label className="mb-2">Passenger capacity </label>
          <Form.Item name="passanger_capacity">
            <Input />
          </Form.Item>
        </div>
        <div className="w-[230px]">
          <label className="mb-2">Price </label>
          <Form.Item name="price">
            <Input />
          </Form.Item>
        </div>
      </div>
      <Form.Item>
        <div className="w-full border flex justify-end gap-3 ">
          <Button
            onClick={handleCancel}
            className="w-[100px] text-white bg-[grey] hover:!border-[lightgrey] hover:!text-black hover:bg-[lightgrey]"
          >
            Cancel
          </Button>{" "}
          <Button
            className="w-[auto bg-blue-600 hover:!bg-blue-500"
            type="primary"
            htmlType="submit"
          >
            {whatToDo === "edit" ? " Save Changes" : "Add Car"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default EditCarForm;
