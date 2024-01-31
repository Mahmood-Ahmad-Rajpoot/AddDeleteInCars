import { useState, useRef, useEffect } from "react";
import { Radio } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SelectContainer from "./CarContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCarDetails } from "../../../features/outsideReservationSlice";

const SelectCar = () => {
  const dispatch = useDispatch();
  const { carData } = useSelector((store: any) => store.carDataSlice);
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef<Slider>(null);

  // destructuring
  const { car_type, passanger_capacity, luggage_capacity } = carData[0];

  //  useEffect setting default car
  useEffect(() => {
    dispatch(
      setCarDetails({
        car_type: car_type,
        luggage_capacity: luggage_capacity,
        passenger_capacity: passanger_capacity,
      })
    );
  }, []);
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="w-full mt-[35px]   flex flex-col justify-center">
      <div>
        <h1 className="text-[1.3rem] self-start text-blue-950 mb-3 mt-3">
          Select Your Car
        </h1>
        <Radio.Group
          value={selected}
          name="radiogroup"
          className="w-full   "
          defaultValue={1}
        >
          <Slider
            {...settings}
            className={` slider-for  bg-transparent`}
            ref={sliderRef}
          >
            {carData?.map((d: any, ind: number) => (
              <SelectContainer
                key={ind}
                ind={ind}
                car_details={d}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </Slider>
        </Radio.Group>
      </div>
    </div>
  );
};

export default SelectCar;
