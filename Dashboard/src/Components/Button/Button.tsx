import React from "react";
import { Button } from "antd";
interface propTypes {
  btnText: string,
  btnIcon: string,
  btnHandler: ()=>void,
  btnStyles: string,
}
const CustomButton: React.FC<propTypes> = ({
  btnText,
  btnIcon,
  btnHandler,
  btnStyles,
}) => {
  return <Button className={btnStyles} onClick={btnHandler}>
    {btnText} {btnIcon?<img src={btnIcon}/>:null}
  </Button>;
};

export default CustomButton;
