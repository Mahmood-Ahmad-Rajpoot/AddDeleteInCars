import  { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { DropdownProps, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
// import { useDispatch } from "react-redux";
 import { useNavigate } from "react-router";
 

const ReservationDropDown  = ( ) => {
    const navigate = useNavigate()
  const [open, setOpen] = useState(false);
// const dispatch = useDispatch()
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log(typeof(e.key));
    if (e.key === "1") 
    navigate('/LocalReservation')
    // dispatch(setRoute())
    //    navigate('/LocalReservation')
 
 
    else
    {
        navigate('/HourlyReservation')

        // dispatch(setRoute('/HourlyReservation'))

    }
    // setRoute((prevRoute: string) => (e.key === '1' ? 'LocalReservation' : 'HourlyReservation'));


    setOpen(false);
  };

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const items: MenuProps["items"] = [
    {
      label: "Local",
      key: "1",
    },
    {
      label: "Hourly",
      key: "2",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <h1 onClick={(e) => e.preventDefault()}>
        <Space>
          Reservations
          <DownOutlined />
        </Space>
      </h1>
    </Dropdown>
  );
};

export default ReservationDropDown;
