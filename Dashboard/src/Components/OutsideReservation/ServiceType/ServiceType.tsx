import { Radio } from "antd";
import { useEffect, useState } from "react";
import { useDispatch,   } from "react-redux";
import { setServiceDetail } from "../../../features/outsideReservationSlice";

const ServiceType = () => {
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
//  useeffect
 useEffect(()=>{
  dispatch(setServiceDetail('To Airport'))
 },[])

  return (
    <div className="w-full mt-[35px] flex flex-col mb-[70px]  ">
      <div>
        <h1 className="text-[1.3rem] text-blue-950 mb-3 mt-3">
          Select Your Car
        </h1>
        <Radio.Group
          value={selected}
          name="radiogroup"
          className="w-full  flex justify-between items-center"
          defaultValue={1}
        >
          {[
            "To Airport",
            "From Airport",
            "Point to Point",
            "Hourly Charter",
          ].map((v: string, ind: number) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  setSelected(ind);
                  dispatch(setServiceDetail(v))

                }}
                className={` flex  items-center justify-center ${
                  ind === selected
                    ? " bg-[#324048]  w-[230px] h-[70px] "
                    : " w-[230px] h-[70px] bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)]"
                } p-3  rounded-lg cursor-pointer `}
              >
                <Radio
                  className={`${
                    ind === selected ? "text-white" : "text-[grey]"
                  } font-normal text-[1rem]`}
                  value={ind}
                >
                  {v}
                </Radio>
              </div>
            );
          })}
        </Radio.Group>
      </div>
    </div>
  );
};

export default ServiceType;
